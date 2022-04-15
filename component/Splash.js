import React, { Component } from 'react';
import {
  View,FlatList,TouchableOpacity,StyleSheet,Text,Alert,Image,Button,ImageBackground 
} from 'react-native';
import auth from '../firebase/Auth'
import firestore from '../firebase/Firestore'
import {connect} from 'react-redux';
import {addUser} from '../actions/Users'

class Splash extends Component {
  constructor(props){
    super(props);
     this.state = {
        id:null,
    };
  }
  
  getUserSuccess=(data)=>{
    console.log(data)
    let item ={
        fullname: data.fullname,
        email: data.email,
        phone: data.phone,
        birthday: data.birthday,
        img: data.img,
        aboutme:data.aboutme,
        faculty:data.faculty,
        year:data.year,
        gender:data.gender,
        budget:data.budget,
        dorm:data.dorm,
        id:this.state.id
    }
    this.props.add(item)
    this.props.navigation.navigate('BottomTab')
  }

  getUserUnsuccess=(error)=>{
    console.log(error)
  }

  checkSignIn=()=>{
    const user = auth.getCurrentUser()
    console.log('Current : ', user)
    if(user!=null){
     let id = user.uid;
     this.setState({id:user.uid});
     firestore.getUser(id,this.getUserSuccess,this.getUserUnsuccess);
    }else{
      this.props.navigation.navigate('Login');
      this.props.navigation.reset({index:0,routes:[{name:'Login'}]});
    }
  }
  
  componentDidMount() {
        setTimeout(()=>{
          this.checkSignIn()
        },2000)
    }

  render(props) {
    const { navigation } = this.props;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#E6F6FD' }}>
           <Text style={{color:"#03A9F4", fontSize:60,fontWeight:'bold'}}>ROOMIE</Text>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  
});

const mapStateToProps = (state) => (
  {user:state.userReducer}
)


const mapDispatchToProps = (dispatch)=>(
  {add:(item)=>dispatch(addUser(item))}
)

export default connect(mapStateToProps,mapDispatchToProps)(Splash)

