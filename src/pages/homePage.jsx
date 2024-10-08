import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserPage from './userPage';
import UserListPage from './userListPage';

const ItemsPage = () => (
  <View style={styles.pageContainer}>
    <Text style={styles.pageText}>Items Page</Text>
  </View>
);

const LabsPage = () => (
  <View style={styles.pageContainer}>
    <Text style={styles.pageText}>Labs Page</Text>
  </View>
);



const HomePageComponent = ({ navigation }) =>  {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.statbox}>
          <Text style={styles.statText}>Item Count</Text>
          <Text style={styles.statValue}>+10</Text>
        </View>
        <View style={styles.statbox}>
          <Text style={styles.statText}>Lab Count</Text>
          <Text style={styles.statValue}>+10</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('UserListPage')}>
        <View style={styles.statboxMain}>
          <Text style={styles.statText}>
            Registered User Count <Text style={styles.statValueMain}>+10</Text>
          </Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.headerText}>Most Counted Items</Text>

      <ScrollView style={styles.itemList}>
        {Array.from({ length: 10 }).map((_, index) => (
          <View key={index} style={styles.itemBox}>
            <Text style={styles.itemName}>Item Name : Beaker</Text>
            <Text style={styles.itemCount}>Item Count : +12</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'HomePage') {
            iconName = 'home';
          } else if (route.name === 'ItemsPage') {
            iconName = 'box';
          } else if (route.name === 'LabsPage') {
            iconName = 'flask';
          } else if (route.name === 'UsersPage') {
            iconName = 'account';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'FFFFFF',
        tabBarStyle: {
            backgroundColor: '#065F9E', 
            
        },
      })}
    >
      <Tab.Screen name="HomePage" component={HomePageComponent} options={{ headerShown: false }} />
      <Tab.Screen name="ItemsPage" component={ItemsPage} />
      <Tab.Screen name="LabsPage" component={LabsPage} />
      <Tab.Screen name="UsersPage" component={UserPage} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default HomePage;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statbox: {
    backgroundColor: '#065F9E',
    borderRadius: 10,
    padding: 20,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
  },
  statText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statboxMain: {
    backgroundColor: '#065F9E',
    borderRadius: 10,
    padding: 20,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statValueMain: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerText: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemBox: {
    flexDirection: 'column',
    backgroundColor: '#065F9E',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemCount: {
    color: '#fff',
    fontSize: 14,
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
