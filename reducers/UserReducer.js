import { ADD_USER,EDIT_USER } from '../actions/Types';
import { AccessibilityInfo } from 'react-native';
const intialState = {
  user :  {
    id: 1,
    fullname: 'test',
    email: 'test',
    phone: '12234',
    birthday: '01/01/0001',
    img: '',
    aboutme:'',
    faculty:'',
    year:'',
    gender:'',
    budget:0,
    dorm:'',
  },
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state
        ,{
          id: action.id,
          fullname: action.fullname,
          email: action.email,
          phone: action.phone,
          birthday: action.birthday,
          img: action.img,
          aboutme:action.aboutme,
          faculty:action.faculty,
          year:action.year,
          gender:action.gender,
          budget:action.budget,
          dorm:action.dorm,
        },
      ]
      case "EDIT_USER":
      return[
        ...state
        ,{
          id: state.id,
          fullname: action.fullname,
          email: state.email,
          phone: action.phone,
          birthday: action.birthday,
          img: action.img,
          aboutme:action.aboutme,
          faculty:action.faculty,
          year:action.year,
          gender:action.gender,
          budget:action.budget,
          dorm:action.dorm,
          
        }
      ]
    default:
      return state;
  }
};

export default userReducer;
