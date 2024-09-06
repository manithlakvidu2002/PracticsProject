import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// Import local images
import profileImage from '../assets/manith.jpg'; 
import deviceImage from '../assets/device.png';  


const DeviceInfoScreen = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.profileSection}>
        <Image style={styles.profileImage} source={profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileTitle}>Software Engineer</Text>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuDots}>⋮</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>

        <View style={styles.deviceSection}>
         
          <Image style={styles.deviceImage} source={deviceImage} />
          <View style={styles.deviceDetails}>
            <View style={styles.historySection}>
              <Text style={styles.statusActive}>● Active</Text>
              <Text>Data: Data info</Text>
              <Text>Health: Good</Text>
              <Text>Error: None</Text>
            </View>
            <View style={styles.modelSection}>
              <Text>Model Name: X1242</Text>
              <Text>Unit Id: 0084891E</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.buttonText}>Live Information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.buttonText}>Device Information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.buttonText}>Health Information</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText} >Home🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText} >Profile👤</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Settings⚙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF4F7',
    paddingHorizontal: 20,
  },
  profileSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileDetails: {
    flex: 1,
    marginLeft: 10,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  profileTitle: {
    color: '#7D8C93',
  },
  menuButton: {
    paddingHorizontal: 10,
  },
  menuDots: {
    fontSize: 24,
  },
  deviceSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  deviceImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  deviceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  historySection: {
    flex: 1,
    
  },
  statusActive: {
    color: 'green',
    fontWeight: 'bold',
  },
  modelSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  buttonSection: {
    marginTop: 20,
  },
  infoButton: {
    backgroundColor: '#1A6E94',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#1A6E94',
    
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 0,
    backgroundColor: '#404040',
    borderRadius: 25,
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignSelf: 'center',
  },
  navButton: {
    padding: 10,
  },
  navButtonText:{
    color:"#FFFFFF",
    backgroundColor: '#1A6E94',
    borderRadius: 25,
    padding: 7,
  }
});

export default DeviceInfoScreen;
