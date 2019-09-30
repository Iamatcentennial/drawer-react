import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import {withStyles} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const styles = {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    drawerPaper:{
        border:'2px solid red',
        position:'relative',
       
        
    }
  };

export class MainContent extends Component {
    state = {
        open:false
    };

    handleDrawerOpen = () => {
        this.setState({open:true})        };
    
    handleDrawerClose = () => {
        this.setState({open:false})
      };
    render() {
       const {classes} = this.props;
        console.log('State is :0', this.state.open);
         const {open} = this.state;
        return (
            <div style={{display:'flex',height:500, direction:'row', marginTop:50}}>
               <div style={{flexGrow:1,  border:'2px solid green'}}>Split Component</div>
               <div style={{minWidth:50, maxWidth:350, height:500,  border:'2px solid blue', 
               alignSelf:'flex-end'}}>

             { !open ? 
            <div style={{alignSelf:'flex-end'}}> 
               <IconButton onClick={this.handleDrawerOpen}>
               <ChevronLeftIcon /> 
             </IconButton>
             </div>
              : <Drawer style={{height:500}} variant="persistent"
               classes={{
                paper: classes.drawerPaper,
                root:classes.drawerRoot
              }}
               anchor="right"
               open={open}>
              
               <List>
               {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                 <ListItem button key={text}>
                   <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                   <ListItemText primary={text} />
                 </ListItem>
               ))}
             </List>
             <div >
             <IconButton onClick={this.handleDrawerClose}>
               <ChevronRightIcon /> 
             </IconButton>
           </div>
             </Drawer>
            } </div>
            </div>
        )
    }
}

export default withStyles(styles)(MainContent)