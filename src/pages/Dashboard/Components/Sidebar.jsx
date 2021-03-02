import React,{useState} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '../../../assets/grid.png'
import ReviewIcon from '../../../assets/reviewIcon.png'
import SettingsIcon from '../../../assets/settings.png'
import TrendingIcon from '../../../assets/trending-up.png'
import AnalysisIcon from '../../../assets/Analysis-icon.png'
import DownArrow from '../../../assets/DownArrow.png'
import { withStyles } from "@material-ui/core/styles";

import '../Styles/Sidebar.css'

const drawerWidth = 296;
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(8),
  },
}));

function Sidebar() {

  const classes = useStyles();
  const [open, setOpen] =useState(true);
  const [open1, setOpen1] =useState(true);
  const [open2, setOpen2] =useState(true);

    return(
      <div>
        
        <h1 className='sidebar-head'>Double Cars</h1>
        
        <List>

        <ListItem button onClick={()=>setOpen(!open)}>
            <ListItemIcon style={{ paddingLeft: '10px'}}><img src={DashboardIcon}/></ListItemIcon>
            <ListItemText primary="Dashboard" className='main-list-items' />{open ? <ExpandMore /> : <ExpandLess />}
          </ListItem>
          <Collapse in={!open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}><ListItemText primary="Connection Summary" className='nested-list-items'/></ListItem>
              <ListItem button className={classes.nested}><ListItemText primary="Vehicle Detail" className='nested-list-items'/></ListItem>
              <ListItem button className={classes.nested}><ListItemText primary="Search Statistics" className='nested-list-items'/></ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={()=>setOpen1(!open1)}>
            <ListItemIcon style={{ paddingLeft: '10px'}}><img src={AnalysisIcon}/></ListItemIcon>
            <ListItemText primary="Market Analysis" className='main-list-items'/>{open1 ? <ExpandMore /> : <ExpandLess />}
          </ListItem>
          <Collapse in={!open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}><ListItemText primary="Car Analyzing" className='nested-list-items'/></ListItem>
            </List>
          </Collapse>

          <ListItem button>
            <ListItemIcon style={{ paddingLeft: '10px'}}><img src={ReviewIcon}/></ListItemIcon>
            <ListItemText primary="Reviews" className='main-list-items'/>
          </ListItem>

          <ListItem button onClick={()=>setOpen2(!open2)}>
            <ListItemIcon style={{ paddingLeft: '10px'}}><img src={TrendingIcon}/></ListItemIcon>
            <ListItemText primary="Leads" className='main-list-items'/>{open2 ? <ExpandMore /> : <ExpandLess />}
          </ListItem>
          <Collapse in={!open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}><ListItemText primary="Trending Up" className='nested-list-items'/></ListItem>
            </List>
          </Collapse>

          <ListItem button>
            <ListItemIcon style={{ paddingLeft: '10px'}}><img src={SettingsIcon}/></ListItemIcon>
            <ListItemText primary="Account Settings" className='main-list-items'/>
          </ListItem>
          
        </List>
        {/*  <div>
         {list.map(list => {
             return (
                <List className='sidebar-list'>
                  {list.items.map(item => {
                      return (
                        <div key={item.id}>
                            {item.subitems != null ? (
                              <div key={item.id}>
                                <ListItem button onClick={(e)=>handleClick(item.name)}>
                                   <ListItemIcon><img src={item.image}/></ListItemIcon>
                                   <ListItemText primary={item.name} className='sidebar-item'/>
                                   {
                                     sliderState[item.name] ?
                                         (<ExpandLess />) : 
                                         (<ExpandMore />)
                                   }
                                      
                                </ListItem>
                                                
                                <Collapse component="li" in={sliderState[item.name]} timeout="auto" unmountOnExit>
                                    <List disablePadding>
                                        {item.subitems.map(
                                          sitem => {
                                            return (
                                              <ListItem button className={classes.nested}>
                                                <ListItemText primary={sitem.name} className='sidebar-item-dropdown'/>
                                              </ListItem>)})}
                                    </List>
                                    </Collapse>{" "}
                                    
                                    </div>) : (
                                        <ListItem button onClick={(e)=>handleClick(item.name)}>
                                          <ListItemText primary={item.name}/>
                                        </ListItem>
                                        )}
                                    </div>
                                )})}
                        </List> 
                    );
                })}
            </div> */}

    </div>
    )
}

export default Sidebar;

