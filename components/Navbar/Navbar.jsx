import React, { useContext } from 'react'
import {Outlet} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { Switch } from '@mui/material'
const Navbar = () => {
    const {state,dispatch}= useContext(GlobalContext)

    const handleChange = ()=>{
        dispatch({type: "SWITCH_MODE"})
    }
  return (
    <div>
        <h2>Este es el navbar</h2>
        
            {/*<button onClick={()=>dispatch({type:"SWITCH_MODE"})} >
                {state.isDark ? "cambiar a dark" : "cambiar a light"}
  </button> */}
            <Switch
            checked={state.isDark}
            onChange={handleChange}
            inputProps={{'aria-label':'controlled'}}
            />
        
        <div style={{minHeight:"80vh"}}></div>
    <Outlet/>    
    
    
    </div>
  )
}

export default Navbar