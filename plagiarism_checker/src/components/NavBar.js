import React from 'react'
import {AppBar} from '@material-ui/core'

const NavBar = () => {
    const headStyle ={
        display: 'flex',
        width:'100%',
        height:'10vh',
        backgroundColor:'#fff',
        color:'black',
    }
    const heading = {
        marginLeft:'auto',
        marginRight:'auto',
        alignItems:'center',
        marginTop:'15px',
        fontWeight:'800',
    }
    return (
        <AppBar position="static" style={headStyle}>
            <h2 style={heading}>UnMatched</h2>
        </AppBar>
    )
}

export default NavBar
