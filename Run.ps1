# Set the execution policy to RemoteSigned for the current user
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Function to display the menu
function Show-Menu {
    param (
        [string]$Title = 'React Native Project Script'
    )
    
    $menuItems = @(
        "1) Run React Native app on Android",
        "2) Reset Metro cache and run app",
        "3) Build the app",
        "4) Build APK for testing",
        "5) Install the release app",
        "6) Install the debug app",
        "7) Show output path",
        "8) Change app-icon",
        "9) Exit"
    )
    
    Write-Host "======== $Title ========" -ForegroundColor Cyan
    $menuItems | ForEach-Object { Write-Host $_ }
    Write-Host "=============================================" -ForegroundColor Yellow
}

# Function to run the selected command
function Run-Command {
    param (
        [int]$Choice
    )
    
    switch ($Choice) {
        1 {
            Write-Host "=============================================" -ForegroundColor Green
            Write-Host "Running React Native app on Android..."
            npx react-native run-android
            Write-Host "=============================================" -ForegroundColor Green
        }
        2 {
            Write-Host "=============================================" -ForegroundColor Blue
            Write-Host "Resetting Metro cache and running app..."
            npm run start -- --reset-cache
            npx react-native run-android
            Write-Host "=============================================" -ForegroundColor Blue
        }
        3 {
            Write-Host "=============================================" -ForegroundColor DarkGreen
            Write-Host "Building the React Native app..."
            cd "$currentDir\android" &&
            .\gradlew assembleRelease &&
            cd ..
            Write-Host "=============================================" -ForegroundColor DarkGreen
        }
        4 {
            Write-Host "=============================================" -ForegroundColor Yellow
            Write-Host "Building APK for testing..."
            cd "$currentDir\android" && 
            .\gradlew assembleDebug && 
            cd ..
            Write-Host "=============================================" -ForegroundColor Yellow
        }
        5 {
            Write-Host "=============================================" -ForegroundColor Magenta
            Write-Host "Installing release app..."
            Install-App "release"
            Write-Host "=============================================" -ForegroundColor Magenta
        }
        6 {
            Write-Host "=============================================" -ForegroundColor White
            Write-Host "Installing debug app..."
            Install-App "debug"
            Write-Host "=============================================" -ForegroundColor White
        }
        7 {
            Write-Host "Open apk "
            Write-Host "=============================================" -ForegroundColor Cyan
            Show-OutputLocation
            Write-Host "=============================================" -ForegroundColor Cyan
        }
        8 {
            Write-Host "=============================================" -ForegroundColor Cyan
            Write-Host "Copying and renaming logo images..."
            Copy-Rename-Logo
            Write-Host "=============================================" -ForegroundColor Cyan
        }
        9 {
            Write-Host "=============================================" -ForegroundColor Red
            Write-Host "Exiting script."
            exit
            Write-Host "=============================================" -ForegroundColor Red
        }
        default {
            Write-Host "=============================================" -ForegroundColor Gray
            Write-Host "Invalid choice. Please select a valid option."
            Write-Host "=============================================" -ForegroundColor Gray
        }
    }
}

# Function to show the output location
function Show-OutputLocation {
    Write-Host "1. Release"
    Write-Host "2. Debug"

    $choice = Read-Host "Please select an option (1-2): "

    switch ($choice) {
        1 {
            $location = "release"
        }
        2 {
            $location = "debug"
        }
        default {
            Write-Host "Invalid choice. Please select either 1 or 2." -ForegroundColor Red
            return
        }
    }

    $fullPath = "$currentDir\android\app\build\outputs\apk\$location"
    Write-Host "=============================================" -ForegroundColor Magenta
    Write-Host "$location output location: $fullPath"
    Write-Host "=============================================" -ForegroundColor Magenta

    if (Test-Path $fullPath) {
        Invoke-Item $fullPath
    } else {
        Write-Host "Path not found: $fullPath"
    }
}

# Function to install the app
function Install-App {
    param (
        [string]$BuildType
    )

    $apkPath = "$currentDir\android\app\build\outputs\apk\$BuildType\app-$BuildType.apk"
    
    if (-Not (Test-Path $apkPath)) {
        Write-Error "APK not found at $apkPath"
        return
    }

    $devicesOutput = adb devices -l
    $devices = $devicesOutput | Select-String "device " | ForEach-Object { 
        $parts = $_.ToString().Split(" ")
        [pscustomobject]@{ ID = $parts[0]; Model = $parts[3].Split(":")[1] }
    }
    
    if ($devices.Count -eq 0) {
        Write-Error "No devices found."
        return
    }
    
    Write-Host "Connected devices:"
    for ($i = 0; $i -lt $devices.Count; $i++) {
        Write-Host "$($i + 1)) ID: $($devices[$i].ID), Model: $($devices[$i].Model)"
    }
    
    $deviceIndex = Read-Host "Select a device (1-$($devices.Count))"
    if ($deviceIndex -match '^\d+$' -and $deviceIndex -ge 1 -and $deviceIndex -le $devices.Count) {
        $selectedDevice = $devices[$deviceIndex - 1].ID
        Write-Host "Installing $BuildType app on device ID: $selectedDevice (Model: $($devices[$deviceIndex - 1].Model))..."
        adb -s $selectedDevice install -r $apkPath
    } else {
        Write-Host "Invalid device selection."
    }
}

# Function to copy and rename the logo images
function Copy-Rename-Logo {
    $sourceDir = "$currentDir\src\assets\img"
    $resPath = "$currentDir\android\app\src\main\res"
    $destinationFolders = @(
        "mipmap-hdpi",
        "mipmap-mdpi",
        "mipmap-xhdpi",
        "mipmap-xxhdpi",
        "mipmap-xxxhdpi"
    )
    $icons = @(
        "ic_launcher_round.png",
        "ic_launcher.png"
    )

    # Get list of .png files in source directory
    $pngFiles = Get-ChildItem -Path $sourceDir -Filter *.png | Select-Object -ExpandProperty Name
    if ($pngFiles.Count -eq 0) {
        Write-Host "No .png files found in $sourceDir" -ForegroundColor Red
        return
    }
    
    Write-Host "Select an image file from the following list:"
    for ($i = 0; $i -lt $pngFiles.Count; $i++) {
        Write-Host "$($i + 1)) $($pngFiles[$i])"
    }

    $fileChoice = Read-Host "Enter the number of the image to use (1-$($pngFiles.Count))"
    if ($fileChoice -match '^\d+$' -and $fileChoice -ge 1 -and $fileChoice -le $pngFiles.Count) {
        $selectedFile = $pngFiles[$fileChoice - 1]
        $sourcePath = "$sourceDir\$selectedFile"
        
        foreach ($folder in $destinationFolders) {
            foreach ($icon in $icons) {
                $destPath = "$resPath\$folder\$icon"
                Write-Host "Copying $sourcePath to $destPath..."
                Copy-Item -Path $sourcePath -Destination $destPath -Force
            }
        }
    } else {
        Write-Host "Invalid selection." -ForegroundColor Red
    }
}

# Get the current directory
$currentDir = Get-Location

# Ensure the current directory is correct
if (-Not (Test-Path "$currentDir\package.json")) {
    Write-Error "Not in a valid React Native project directory. Please run this script from the root of your React Native project."
    exit 1
}

# Main loop to display the menu and get user input
while ($true) {
    Show-Menu
    $choice = Read-Host "Please select an option (1-9)"
    if ($choice -match '^[1-9]$') {
        Run-Command -Choice $choice
    } else {
        Write-Host "Invalid input. Please enter a number between 1 and 9."
    }
}
