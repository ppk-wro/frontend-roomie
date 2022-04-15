import React, { Component } from 'react'
import {View, StyleSheet, TextInput,Text,TouchableOpacity,ImageBackground,SafeAreaView } from "react-native";
import auth from '../firebase/Auth'
import firestore from '../firebase/Firestore'
import { connect } from 'react-redux';
import {addUser} from '../actions/Users'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const image = { uri: "https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.6435-9/s1080x2048/255887236_3078127879126714_4518126180298811392_n.jpg?_nc_cat=108&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGUGwCuBAugeElYJ9eXU93oPcLLhGFzJGs9wsuEYXMkax4mer4rWt1iOsYftxDxDQ9n1lNyVSAKo7yKMcVBNU7t&_nc_ohc=t3rzZJYEsCgAX8cUit6&tn=kyOVGSgzf8_ahJwr&_nc_ht=scontent.fbkk13-1.fna&oh=0abcb5276ed29ddba6064dacd2e9a79c&oe=61AFEB3E" };

class Login extends Component {
  constructor(props){
    super(props);
     this.state = {
       email:null,
       password:null,
       id:null
    };
  }

  getUserSuccess=(data)=>{
    console.log(data)
    let item ={
       email:data.email,
       fullname:data.fullname,
       birthday:data.birthday,
       phone:data.phone,
       img:data.img,
       id:this.state.id,
       aboutme:data.aboutme,
       faculty:data.faculty,
       year:data.year,
       gender:data.gender,
       budget:data.budget,
       dorm:data.dorm,
    }

    this.props.add(item)
    // this.props.navigation.navigate('DrawerTab')
    console.log(this.props.user.username)
    this.props.navigation.navigate('BottomTab')
  }

  getUserUnsuccess=(error)=>{
    console.log(error)
  }

  loginSuccess=(user)=>{
    let id = user.uid
    this.setState({id:user.uid})
    firestore.getUser(id,this.getUserSuccess,this.getUserUnsuccess)
  }

  loginUnsuccess=(error)=>{
    console.log(error)
  }
  
  onLogin=()=>{
    console.log(this.state.email)
    auth.signIn(this.state.email,this.state.password,this.loginSuccess,this.loginUnsuccess)
    
  }

  render(props) {
    const { navigation } = this.props;
    return (
     <SafeAreaView style={styles.scrollarea}>
        <View style={{flex:1,backgroundColor:'white'}}>
             
             <View style={{flex: 0.75 ,backgroundColor:'white',marginTop:10}}>
              
              <ImageBackground source={image} resizeMode="cover" style={styles.image}>
<Text style={{alignSelf:'center',justifyContent:'center',fontWeight:'bold',fontSize:50,paddingBottom:225,color:'#39C5F3',}}>ROOMIE</Text>
              </ImageBackground>
            
             </View> 
             
            <View style={{flex:0.2,padding:20,paddingBottom:10,backgroundColor:'white'}}>
            <Text style={{fontSize:35,fontWeight: 'bold',color:'#03A9F4'}}>Sign In</Text>
            <Text style={{fontSize:10,fontWeight: 'bold',color:'#969696'}}>Please sign in to continue using our app.</Text>
             </View>     

     
            <View style={{flex:0.25,alignItems:'center',padding:5,backgroundColor:'white'}}>
            <Text style={{fontSize:15,fontWeight: 'bold',paddingRight:250}}>E-mail</Text>
            
            <View style={styles.inputlock}>
            <Fontisto name="email" size={20} color="#DFDBDB" />
            <TextInput 
              placeholder="  E-mail" 
              style={{fontSize:15}} 
              onChangeText={txt=>{this.setState({email:txt})}}/>
            </View>
            </View>

            
            <View style={{flex:0.25,alignItems:'center',padding:5,paddingTop:2,backgroundColor:'white'}}>
            <Text style={{fontSize:15,fontWeight: 'bold',paddingRight:230}}>Password</Text>
            <View style={styles.inputlock}>
             <MaterialIcons name="vpn-key" size={20} color="#DFDBDB" />
            <TextInput 
              secureTextEntry={true}
              placeholder="Password" 
              style={{}} 
              onChangeText={txt=>{this.setState({password:txt})}}/>
            </View>           
          </View>           
                         
           <View style={{flex:0.1,paddingRight:30,backgroundColor:'white'}}>              
          <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',}}>
              <MaterialCommunityIcons name="lock" size={13} color="black" />
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('ForgetScreen')}>
                <Text style={{fontSize:13, color:'#03A9F4',marginRight:30,}}>Forgot password?</Text>
              </TouchableOpacity>
          </View>
           </View>

          <View style={{flex:0.20, justifyContent: 'center', alignItems: 'center',padding:5,backgroundColor:'white'}}>     
            <TouchableOpacity 
              style={styles.buttonLogin} 
              onPress={this.onLogin}>
                <Text style={{fontSize:20, color:'white',fontWeight: 'bold'}}>SIGN IN</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex:0.15,backgroundColor:'#FFFFFF',borderBottomRightRadius:50, justifyContent: 'center', alignItems: 'center',borderColor:'#C4C4C4',borderBottomWidth:3}}>
            <View style={{fontSize:13,fontWeight: 'bold',flexDirection:'row'}}>   
            <Text style={{fontSize:13,fontWeight: 'bold',color:'#969696'}}>Don’t have an accouunt?</Text>
            <TouchableOpacity 
              style={{alignItems:'center',justifyContent:'center'}} 
              onPress={()=>this.props.navigation.navigate('Registation')}>
                <Text style={{fontSize:13, color:'#03A9F4',fontWeight: 'bold'}}> Sign up</Text>
            </TouchableOpacity>
            </View>
            </View>
            
            <View style={{flex:0.05, alignItems: 'center'}}>
          </View>


      
        </View>
        </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  buttonLogin: {
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "#03A9F4",
    marginBottom:8,
    padding:8,
    borderRadius:20,
    width:275,
    height:58
  },

  inputlock:{
    flexDirection:'row',
    borderColor:'gray',
    borderWidth : 1,
    borderRadius:25,
    height:58,
    width:275,
    
    paddingLeft:20,
    margin:4,
    marginLeft:5,
    padding:20,
    alignItems:'center',
  },

    image: {
    flex: 1,
    justifyContent: "center",
    height:270,
    width:360,
    alignSelf:'center'
  },
  scrollarea: {
    flex: 1,
    paddingTop:20,
    backgroundColor:'white'
  },

});

const mapStateToProps = (state) => (
  {user:state.userReducer}
)

const mapDispatchToProps = (dispatch)=>(
  {add:(item)=>dispatch(addUser(item))}
)

export default connect(mapStateToProps,mapDispatchToProps)(Login);