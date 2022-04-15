import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView
} from 'react-native';

import auth from '../firebase/Auth'
import { Ionicons } from '@expo/vector-icons'; 

const image = { uri: "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.6435-9/255828946_3077783705827798_3866911179248504743_n.jpg?_nc_cat=104&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFdohVXkMvQK3pu3LlUDpFyIGUymhMDQe8gZTKaEwNB7869ylibV9ptJycvfYofj-rU1jHPMEuactc2JCxWRc5c&_nc_ohc=sSU5Ts_FK0AAX_sqjLS&_nc_ht=scontent.fbkk12-2.fna&oh=301255ba974e5fbb1ab293e8c671373d&oe=61B1FCD0" };

class ForgetPassword extends Component {
  constructor(props){
    super(props);
     this.state = {
       email:null,
    };
  }
  
  componentDidMount() {

  }

  unsuccess=(error)=>{
    console.log(error)
  }

  success=()=>{
    console.log('Email was sent')
  }

  onBack=()=>{
    this.props.navigation.navigate('Login')
  }


  onRecover=()=>{
    auth.sendPassword(this.state.email,this.success,this.unsuccess)
    this.props.navigation.navigate('Login')
  }

  render(props) {
    const { navigation } = this.props;
    return (

      <SafeAreaView style={styles.scrollarea}>
        <View style={{ flex: 1,backgroundColor:'white'}}>
            
            <View style={{ flex: 0.80,padding:10, borderColor:'#C4C4C4',borderBottomWidth:3 ,borderBottomRightRadius:50,borderRightWidt:2
   }}>
                <TouchableOpacity onPress={this.onBack} >
                <Ionicons name="md-arrow-back-circle" size={45} color="black" />
                </TouchableOpacity>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
              
                </ImageBackground>
              
            </View>

            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'white'}}>
                <Text style={styles.myprofile}>Forgot Password</Text>
                <Text style={styles.setting}>Please enter your email address you’d like your password 
reset information sent to.
</Text>
            </View>

            <View style={{ flex: 0.1, backgroundColor:'white',marginLeft:40,paddingTop:20}}>
                <Text style={styles.mail}>E-mail address</Text>
            </View>


            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' ,backgroundColor:''}}>
            <TextInput 
                    placeholder="E-mail" 
                    style={styles.textInput} 
                    onChangeText={txt=>{this.setState({email:txt})}}/>
            </View>

            <View style={{ flex: 0.40, alignItems: 'center' ,backgroundColor:'',marginTop:10}}>
                  <TouchableOpacity 
                    style={styles.buttonLogin} 
                    onPress={this.onRecover}>
                      <Text style={{fontSize:16, color:'white',fontWeight: 'bold',}}>CONTINUE</Text>
                  </TouchableOpacity>

                  <Text style={{fontSize:12, color:'#A0A0A0',fontWeight: 'bold',}}>Please check your password via email.</Text>
            </View>

            


        </View>
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
    backgroundColor: "#03A9F4",
    marginBottom:8,
    padding:8,
    width:300,
    height:50,
    borderRadius:30,

  },

  textInput:{
    borderColor: '#ACACAC',
    borderWidth: 1,
    paddingStart:20,
    marginBottom:8,
    padding:8,
    fontSize:16,
    width:300,
    height:50,
    color:'#DFDBDB',
    borderRadius:30,
  },

  setting: {
    color:'#ACACAC',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop:5,
    marginLeft:20,
    justifyContent:'center'

  },

    mail: {
    color:'#3F3D56',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:5,
    justifyContent:'center'

  },

  myprofile: {
    color:'#03A9F4',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight:60,
    justifyContent:'center'

  },
    image: {
    flex: 1,
    justifyContent: "center",
   height:260,


  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
  
});


export default ForgetPassword;