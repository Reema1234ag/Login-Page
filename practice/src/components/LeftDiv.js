import React from 'react'
import img from '../images/kabadi bg.jpg'
const css={
    border:'1px solid black',
    width:'50%',
    height:'94vh',
    marginTop:'5px',
    marginLeft:'15px',
    float:'left',
}
const imgcss={
    width:'100%',
    height:'100%',
    overFlow:'hidden'
}

export default function LeftDiv() {
    return (
        <div>
        <div style={css}>
            <img src={img} style={imgcss}/>
        </div>
        </div>
    )
}
