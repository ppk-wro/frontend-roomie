import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  SafeAreaView
} from 'react-native';

import auth from '../firebase/Auth'
import firestore from '../firebase/Firestore'

import DatePicker from 'react-native-neat-date-picker'
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons'; 

class Registraion extends Component {
  constructor(props){
    super(props);
     this.state = {
       email:null,
       password:null,
       confirmpassword:null,
       username:null,
       fullname:null,
       birthday:'Birthday',
       phone:null,
       img:'',
       showDate:false,

       aboutme:'',
       faculty:'',
       year:'',
       gender:'',
       budget:null,
       dorm:'',
    };
  }

 pickImage=async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      quality:1
    });

    if(!result.cancelled){
      this.setState({img:result.uri});
    }
  }

  addSuccess=()=>{
    this.props.navigation.navigate('Login')
  }
  addUnsuccess=(error)=>{
    console.log(error)
  }

  registerSuccess =(user)=>{
    let item ={
      fullname:this.state.fullname,
      email:this.state.email,
      phone:this.state.phone,
      birthday:this.state.birthday,
      img:this.state.img,

      aboutme:this.state.aboutme,
      faculty:this.state.faculty,
      year:this.state.year,
      gender:this.state.gender,
      budget:this.state.budget,
      dorm:this.state.dorm,
    }
    firestore.addUser(user.uid,item,this.addSuccess,this.addUncsuccess)
  }

  

  registerUnsuccess =(error)=>{
    console.log(error)
  }
  
  onRegister=()=>{

    if(this.state.password!=null){
      if(this.state.password===this.state.confirmpassword){
        auth.createAccount(this.state.email,this.state.password,this.registerSuccess,this.registerUnsuccess)
      }
    }
  }

  onBack=()=>{
    this.props.navigation.navigate('Login')
  }

  openDatePicker = () => {
    this.setState({showDate:true})
  }

  onCancel = () => {
    // You should close the modal in here
    this.setState({showDate:false})
  }

  onConfirm = ( date ) => {
    // You should close the modal in here
    this.setState({showDate:false})
    let day = date.getDate()
    let month = date.getMonth()+1
    
    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date.getDate()+'/'+( date.getMonth()+ 1)+'/'+ date.getFullYear())
    this.setState({birthday:date.getDate()+'/'+( date.getMonth()+ 1)+'/'+ date.getFullYear()})
  }

 

  render(props) {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.scrollarea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
        <View style={{ flex: 1,backgroundColor:'#E6F6FD'}}>
        <View style={{ flex: 1,backgroundColor:'#E6F6FD'}}>
        
                <View style = {{flex: 0.9,flexDirection: 'row'}}>

                      <View style={{ flex: 0.3,padding:10}}>
                      
                            <TouchableOpacity onPress={this.onBack}>
                              <Ionicons name="md-arrow-back-circle" size={45} color="black" />
                            </TouchableOpacity>

                        </View>

                      
                      <View style={{ flex: 1, alignItems: 'center' ,backgroundColor:'#E6F6FD'}}>
                      
                          <Text style={styles.signUp}>Sign Up</Text>
                          <Text style={styles.pleasefill}>Please fill the details and create account.</Text>
                      </View>

                </View>

        </View>

        <View style={{ flex: 4,backgroundColor:'#FFFFFF',borderTopLeftRadius:50,borderTopRightRadius:50,borderTopWidth:3,borderColor:'#C4C4C4'}}>
            
                <View style={{ flex: 1, alignItems: 'center',marginTop:-40 }}>
                  <TouchableOpacity onPress={this.pickImage}>
                    <Image style={styles.image}
                      source={
                      this.state.img
                      }/>
                  </TouchableOpacity>
                  
                </View>
                
              

                <View style={{ flex: 0.5,}}>
                  <TextInput 
                    placeholder="Full Name" 
                    style={styles.textInput} 
                    onChangeText={txt=>{this.setState({fullname:txt})}}/>
                </View>

                <View style={{ flex: 0.5,}}>
                  <TextInput 
                    placeholder="Email" 
                    style={styles.textInput} 
                    onChangeText={txt=>{this.setState({email:txt})}}/>
                </View>

                <View style={{ flex: 0.5,}}>
                  <TextInput 
                    placeholder="Phone Number" 
                    style={styles.textInput} 
                    onChangeText={txt=>{this.setState({phone:txt})}}/>
                </View>

              <View style={{ flex: 0.5,}}>
                <TouchableOpacity 
                style={styles.date} 
                onPress = {this.openDatePicker}
                >
                  <View style ={{flexDirection:"row"}}>
                    <Text style={{fontSize:16,color:'gray',}}>{this.state.birthday}</Text>
                  </View>
              </TouchableOpacity>
            </View>
                <View style={{ flex: 0.5,}}>
                  <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.textInput} 
                    onChangeText={txt=>{this.setState({password:txt})}}/>
                </View>

                <View style={{ flex: 0.5,}}>
                  <TextInput 
                    placeholder="Confirm Password"
                    secureTextEntry={true} 
                    style={styles.textInput} 
                    onChangeText={txt=>{this.setState({confirmpassword:txt})}}/>
                </View>

                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity 
                    style={styles.button_login} 
                    onPress={this.onRegister}>
                      <Text style={{fontSize: 20,color:'white',fontWeight: 'bold', }}>SIGN UP</Text>
                  </TouchableOpacity>
                </View>       
                <DatePicker
                isVisible={this.state.showDate}
                mode={'single'}
                onCancel={this.onCancel}
                onConfirm={this.onConfirm}
              />



            </View>
          </View>
      </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollarea: {
    flex: 1,
    paddingTop:20,
    backgroundColor:'white'
  },

  buttonLogin: {
   justifyContent:"center",
    alignItems: "center",
    backgroundColor: "black",
    marginBottom:8,
    padding:8
  },

  image: {
    borderColor: '#C4C4C4',
    borderWidth: 1,
    width: 100,
    height: 100,
    marginBottom:8,
    borderRadius:50,
    backgroundColor:'#C4C4C4'

  },
   
  pleasefill: {
    color:'#ACACAC',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop:5,
    marginRight:80,
    

  },

  signUp: {
    color:'#03A9F4',
    fontSize: 35,
    fontWeight: 'bold',
    marginRight:100,
    justifyContent:'center'

  },


  textInput:{
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    
  },

  date:{
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    
  },
  text:{
  
    padding:8,
    fontSize:16,
    backgroundColor:'red'
    
  },

  button_login: {
    alignItems: "center",

    justifyContent:"center",
    backgroundColor: "#03A9F4",
    padding: 5,
    width: 300,
    height: 48,
    borderRadius:30,
    

    },

  container: {
    flex: 1
  },
  
});


export default Registraion;