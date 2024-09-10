import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { db } from '../firebaseConfig'; 
import { ref, onValue } from '@react-native-firebase/database';

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const usersRef = ref(db, 'users/');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersList = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setUsers(usersList);
      } else {
        setUsers([]); 
      }
    });
  }, []);

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index + 1}</Text>
      </View>
      <Image source={{ uri: item.imageUrl }} style={styles.userImage} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Name: {item.name}</Text>
        <Text style={styles.userRole}>Role: {item.role}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={30} color="#007BFF" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    fontSize: 18,
    color: '#007BFF',
    marginLeft: 8,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#065F9E',
    borderRadius: 10,
    padding: 16,
    marginBottom: 15,
  },
  indexContainer: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  index: {
    color: '#fff',
    fontWeight: 'bold',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  userRole: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
});

export default UserListPage;
