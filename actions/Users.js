import {ADD_USER,EDIT_USER} from './Types'

export const addUser=(item)=>(
  {
    type:ADD_USER,
    id:item.id,
    username:item.username,
    fullname:item.fullname,
    email:item.email,
    phone:item.phone,
    birthday:item.birthday,
    img:item.img,
    aboutme:item.aboutme,
    faculty:item.faculty,
    year:item.year,
    gender:item.gender,
    budget:item.budget,
    dorm:item.dorm,

  }
  
)

export const updateUser=(item)=>(
  {
    type:EDIT_USER,
    aboutme:item.aboutme,
    fullname:item.fullname,
    phone:item.phone,
    faculty:item.faculty,
    year:item.year,
    birthday:item.birthday,
    gender:item.gender,
    budget:item.budget,
    dorm:item.dorm,
  }
)