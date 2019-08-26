import React,{Component} from 'react'

import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import {connect} from 'react-redux'

class LeftDrawer extends Component {
    constructor(props){
        super(props)
    }

    changeMenu = () => {
        this.props.dispatch({type:'LEFTMENU'})
    }

    render(){
        return(
            <Drawer open={this.props.open}  variant="persistent">
                 <div>
                    <IconButton >
                        <ChevronLeftIcon onClick={this.changeMenu}/>
                    </IconButton>
                </div>
                <Divider />
                <List>
                {['aaaa','bbbb','ccccc'].map((text, index) => (
                    <ListItem button key={text} >
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            </Drawer>
        )
    }

}

const mapStateToProps = ( {menuReducer} ) => {

    console.log("leftDrawer mapStateToProps..." , menuReducer)
    
    return {open:!menuReducer.open}
}

export default connect(mapStateToProps)(LeftDrawer)