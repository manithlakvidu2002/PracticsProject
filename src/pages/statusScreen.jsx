import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const StatusScreen = () => {
  return (
    <View style={styles.container}>
  
      <Text style={styles.backText}>Back</Text>

      
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/device.png')} 
          style={styles.deviceImage}
          resizeMode="contain"
        />
      </View>

     
      {/* <Text style={styles.statusText}>Active ✅</Text> */}

      
      <Text style={styles.liveInfoTitle}>Live Information</Text>
        <View  style={styles.infoBoxMain}>
            <View style={styles.infoBox}>
                <Text style={styles.infoText}>No Data</Text>
            </View>
        </View>

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:"100%",
    // flex: 1,
    backgroundColor: '#E0F5F5', 
    // padding: 20,
  },
  backText: {
    padding:10,
    // color:"white",
    zIndex:10,
    position:"absolute",
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 0,
    marginBottom: 20,
    alignItems: 'center',
    flex:1,
    height:"30%"
  },
  deviceImage: {
    resizeMode:'cover',
    // width: "100%", 
    // height: 150,
  },
  statusText: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  liveInfoTitle: {
    marginTop: 30,
    marginBottom:10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoBoxMain:{
    paddingLeft:10,
    paddingRight:10
  },
  infoBox: {
    marginTop: 10,
    height:"60%",
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  infoText: {
    fontSize: 16,
    color: '#888',
  },
});

export default StatusScreen;
