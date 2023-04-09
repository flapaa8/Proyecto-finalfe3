import React, { useContext, useEffect,useState } from 'react'
import axios from 'axios'
import { GlobalContext } from '../../context/GlobalContext'

const ProfessionalsContainer = () => {
  const {state,dispatch} = useContext(GlobalContext)
  
  useEffect(()=>{
      const getProfessionals= axios.get("https://jsonplaceholder.typicode.com/users")
      getProfessionals
      .then(res=>dispatch({type: "GET_USERS", payload:res.data}))
      .catch((err)=>console.log(err))
  },[])
  console.log(state.users)
  return (
    <div>Aca van los profesionales</div>
  )
}

export default ProfessionalsContainer