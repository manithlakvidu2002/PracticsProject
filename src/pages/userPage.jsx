import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import firebase from '../firebaseConfig';  

const UserPage = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [roleOpen, setRoleOpen] = useState(false);
  const [roleValue, setRoleValue] = useState(null);
  const [roleItems, setRoleItems] = useState([
    { label: 'Admin', value: 'admin' },
    { label: 'Lab Assistance', value: 'lab_assistance' },
    { label: 'Teacher', value: 'teacher' },
  ]);
  const [locationOpen, setLocationOpen] = useState(false);
  const [locationValue, setLocationValue] = useState(null);
  const [locationItem, setLocationItem] = useState([
    { label: 'Location_A', value: 'location_A' },
    { label: 'Location_B', value: 'location_B' },
    { label: 'Location_C', value: 'location_C' },
    { label: 'Location_D', value: 'location_D' },
    { label: 'Location_E', value: 'location_E' },
  ]);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };


  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.error('Image picker error:', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setImageUri(uri);
      }
    });
  };

  
  const uploadImage = async () => {
    if (!imageUri) return null;
    const filename = imageUri.substring(imageUri.lastIndexOf('/') + 1);
    const storageRef = firebase.storage().ref(`images/${filename}`);
    const response = await fetch(imageUri);
    const blob = await response.blob();

    await storageRef.put(blob);
    const downloadUrl = await storageRef.getDownloadURL();
    return downloadUrl;
  };

  
  const addUserToDatabase = async () => {
    try {
      if (userName && userEmail && roleValue && locationValue) {
        const imageUrl = await uploadImage();  

        firebase.database().ref('users/').push({
          name: userName,
          email: userEmail,
          role: roleValue,
          location: locationValue,
          joinDate: date.toISOString().split('T')[0],
          imageUrl: imageUrl,  
        })
        .then(() => {
          Alert.alert('User added successfully!');
          setUserName('');
          setUserEmail('');
          setRoleValue(null);
          setLocationValue(null);
          setDate(new Date());
          setImageUri(null);
        });
      } else {
        Alert.alert('Please fill all the fields');
      }
    } catch (error) {
      console.log(error.message);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add User</Text>

      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.imagePreview} />
        ) : (
          <TouchableOpacity onPress={selectImage}>
            <Icon name="image-plus" size={60} color="#000" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.formRow}>
        <Text style={styles.label}>Register Number: <Text style={styles.value}>0001</Text></Text>
      </View>

      <View style={styles.formRow}>
        <Text style={styles.label}>Enter the User Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the Name"
          value={userName}
          onChangeText={setUserName}
        />
      </View>

      <View style={styles.formRow}>
        <Text style={styles.label}>Enter the User Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the Email"
          value={userEmail}
          onChangeText={setUserEmail}
        />
      </View>

      <View style={styles.formRow2}>
        <View style={[styles.halfInputContainer, { flex: 1, marginRight: 8 }]}>
          <Text style={styles.label}>Add User Role</Text>
          <DropDownPicker
            open={roleOpen}
            value={roleValue}
            items={roleItems}
            setOpen={setRoleOpen}
            setValue={setRoleValue}
            setItems={setRoleItems}
            placeholder="Select Role"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
          />
        </View>

        <View style={[styles.halfInputContainer, { flex: 1 }]}>
          <Text style={styles.label}>Add the Location</Text>
          <DropDownPicker
            open={locationOpen}
            value={locationValue}
            items={locationItem}
            setOpen={setLocationOpen}
            setValue={setLocationValue}
            setItems={setLocationItem}
            placeholder="Select Location"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
          />
        </View>
      </View>

      <View style={styles.formRow}>
        <Text style={styles.label}>Join Date:</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
          <Text>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</Text>
          <Icon name="calendar" size={20} />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={addUserToDatabase}>
        <Text style={styles.addButtonText}>Add User</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  formRow: {
    width: '100%',
    marginBottom: 20,
  },
  formRow2: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  halfInputContainer: {
    width: '48%',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  dropdownContainer: {
    borderColor: '#ddd',
  },
  datePicker: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#065F9E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserPage;
