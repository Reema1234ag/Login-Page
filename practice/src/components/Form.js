import React, { Component } from 'react'
const css={
    borderRadius:'15px',
    color:'grey',
    width:'270px',
    height:'35px',
    fontSize:'15px',
    margin:'5px'
}
const btn={
    borderRadius:'22px',
    backgroundColor:'green',
    color:'white',
    width:'120px',
    height:'40px',
    fontSize:'20px',
}
const divcss={
    textAlign:"center",
    //border:'1px solid black',
    width:'47%',
    height:'94vh',
    marginTop:'5px',
    marginRight:'10px',
    float:'right',
}
class Form extends Component {
    render() {
        return (
            <div style={divcss}>
                <h2>Sign-In</h2>
              <form>
                    <div className='form'>
                        <input type='email' placeholder='Email-id' style={css}/>
                        <br></br>
                        <input type='password' placeholder='password' style={css}/>
                    </div>
                    <div>
                    <button type='submit'style={btn} >Sign-In</button>
                    </div>
            </form> 
                <br></br>
                <p>Forgotten password?</p> 
                <p>or connect with</p>
            </div>
        )
    }
}

export default Form
