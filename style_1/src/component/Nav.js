import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux'

const linkStyle = {
    color:'white',
    margin: '0.2em'

}
  

function Nav(props) {

    const menuClick = () => {
        console.log("menu Click ......")
        props.dispatch({type:'LEFTMENU'})
    }

    return(
        <div>
        <AppBar position="sticky">
            <Toolbar>
                <MenuIcon onClick={menuClick}/>
                <Typography title="title">
                    <Link to="/" style = {linkStyle}>Main</Link>
                </Typography>
                <Typography title="title">
                <Link to="/mypage" style = {linkStyle}>MyPage</Link>
                </Typography>
                <Typography title="title">
                <Link to="/posts" style = {linkStyle}>Posts</Link>
                </Typography>
                <Typography title="title">
                <Link to="/signin" style = {linkStyle}>Login</Link>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default connect()(Nav)