import {CONFIG} from './Config'
import firebase from 'firebase/compat';
import 'firebase/firestore';

class Firestore{
 constructor() {


  if(firebase.apps.length===0)
    firebase.initializeApp(CONFIG)

   this.db = firebase.firestore();
  }
  
  addUser=(id,item,success,unsuccess)=>{
    item.time = firebase.firestore.FieldValue.serverTimestamp();
    this.db
      .collection('users')
      .doc(id)
      .set(item)
      .then(success())
      .catch(function (error) {
        unsuccess(error);
      });
  }

  getUser=(id,success,unsuccess)=>{
    var docRef = this.db.collection('users').doc(id);
    docRef
    .get()
    .then((doc)=>{
      success(doc.data())
    })
    .catch((error)=>{
      unsuccess(error)
    })
  }

  updateUser=(id,data,success,unsuccess)=>{
    console.log(id)
    var ref = this.db.collection('users').doc(id);
    ref
    .update({
       fullname:data.fullname,
       birthday:data.birthday,
       phone:data.phone,
       img:data.img,
       aboutme:data.aboutme,
       faculty:data.faculty,
       year:data.year,
       gender:data.gender,
       budget:data.budget,
       dorm:data.dorm,
    })
    .then(()=>{
      success();
    })
    .catch((error)=>{
      unsuccess(error)
    });
  }

  

}

const firestore = new Firestore()
export default firestore
