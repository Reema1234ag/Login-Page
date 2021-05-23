import React from 'react'
import img from '../images/kabadi bg.jpg'
const css1={
    //border:'1px solid black',
    width:'50%',
    height:'94vh',
    marginTop:'5px',
    marginLeft:'15px',
    float:'left',
    position:'absolute',
    zIndex:'-1',
}
const imgcss={
    width:'100%',
    height:'100%',
    overFlow:'hidden'
}
const css2={
    // border:'1px solid black',
     width:'50%',
     height:'94vh',
     marginTop:'5px',
     marginLeft:'15px',
     float:'left',
     backgroundColor:'rgb(3,38,44,.7)',
     fontFamily:'Edwardian Script ITC',
     color:'white',
     fontSize:'55px',
     opacity:'.9',
     textAlign:'center',
     position:'absolute',
     zIndex:'1'
 }


export default function LeftDiv() {
    return (
        <div>
        <div style={css1}>
            <img src={img} style={imgcss}/>
        </div>
        <div style={css2}>
        <h2>"Be the part of solution not a part of pollution"</h2>  
      </div>
      </div>
  
        
    )
}

         