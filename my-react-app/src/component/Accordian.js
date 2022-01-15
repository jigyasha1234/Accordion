import React from 'react'
import "./Style.css";
import Menu from "./menuApi.js"
import Accordionlist from './Accordionlist';


const Accordian = () => {
    return (
        <div className='main-div'>
            {Menu.map((curr)=>{ return <Accordionlist key={curr.id} {...curr}/>})}
        </div>
    )
}

export default Accordian
