import React, { Component, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import {
  View,FlatList,TouchableOpacity,StyleSheet,Text,Alert,Image,Button , TextInput,Picker, StatusBar,SafeAreaView
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { RadioButton, } from 'react-native-paper';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 


const  Mapk=()=>{
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

  
   
    return (
     <View style = {styles.container} >
      <View style={{flex:0.12,paddingLeft:12,justifyContent:"center",marginr:50}}>  
        <View style={{flexDirection:"row",alignItems:'center',}}>  
          <Searchbar style={{borderRadius:30,width:200,borderWidth:1,borderColor:'#C4C4C4',}}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <View style={{marginLeft:5}}></View>  
          <Searchbar style={{borderRadius:30,width:150,borderWidth:1,borderColor:'#C4C4C4'}}
            placeholder="Distance"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        
        </View>     
      </View>


    <View style={{flex:0.88,justifyContent:'center',alignItems:'center',padding:30,}}>
      <FontAwesome5 name="search" size={50} color='#C4C4C4' />
      <Text style={{fontSize:16, color:'#C4C4C4'}}>Search the name of the university to display a list of dormitories within a certain distance.</Text>
    </View>
    </View>
    
    );
  
}
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

});


    


export default Mapk;