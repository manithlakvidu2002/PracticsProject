import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React from 'react'

const HomePage  = () => {
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
        
        <View style={styles.statboxMain}>
            <Text style={styles.statText}>Registered User Count  <Text style={styles.statValueMain}>+10</Text> </Text>
            
        </View>

        <Text style={styles.headerText}>Most Counted Items</Text>

        <ScrollView style={styles.itemList}>
            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

            <View style={styles.itemBox}>
                <Text style={styles.itemName}>Item Name : Beaker</Text>
                <Text style={styles.itemCount}>Item Count : +12</Text>
            </View>

        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        padding: 16,
    },
    topContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:20
    },
    statbox:{
        backgroundColor:"#065F9E",
        borderRadius:10,
        padding:20,
        margin:1,
        justifyContent:"center",
        alignItems:"center",
        width:"48%"
    },
    statText:{
        color:'#fff',
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    statValue:{
        color:'#fff',
        fontSize:16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    statboxMain:{
        backgroundColor:"#065F9E",
        borderRadius:10,
        padding:20,
        margin:1,
        justifyContent:"center",
        alignItems:"center",
        
    },
    statValueMain:{
        color:'#fff',
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerText:{
        paddingTop:10,
        fontSize:18,
        fontWeight:"bold",
        marginBottom:10
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

});

  
  

export default HomePage;