import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './Sidebar'
import Hidden from '@material-ui/core/Hidden';
import '../Styles/dashboard.css'
import Cards from './Cards'
import Chart from './Chart'
import Nav from './Nav'


const drawerWidth = 296;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar1: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton1: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  hide: {
    display: 'none',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
export default function Deashboard() {
  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(true);
  const [mobileOpenResponsive, setMobileOpenResponsive] = React.useState(false);
  const [counter,setCounter]=useState(0)
  const [responsive,setResponsive]=useState(false)

  // for responsiveness
  const resizeWindow=function(){
      if (window.innerWidth <= 600) {
       setResponsive(true)
      }
      else{
        setResponsive(false)
      }
  }
  window.addEventListener("resize", resizeWindow);

  // drwaer open / close
  const handleDrawerOpen = () => {
    setCounter(counter+1)
    setOpen(true);
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setCounter(counter+1)
  };


  const handleDrawerToggle1 = () => {
    setMobileOpenResponsive(!mobileOpenResponsive);
  };
  return (
    // dashboard appbar / sidebar handling
    <div className='dashboard-bilkul-main'>
     {!responsive ? <>
      <CssBaseline />
         
      <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open,})} >
        <Toolbar id='fix-outline'>
          <IconButton className='dashboard-toggle-button'
            color="inherit" aria-label="open drawer" onClick={counter%2===0 ? handleDrawerClose : handleDrawerOpen} edge="start" className={clsx(classes.menuButton)}>
            <MenuIcon className='dashboard-toggle-icon'/>
          </IconButton>
          {/* nav component */}
             <Nav/>
        </Toolbar>
      </AppBar>

       <Drawer xsDown variant="persistent" anchor={'left'} open={open} classes={{paper: classes.drawerPaper,}} ModalProps={{keepMounted: true, }}>
          <Sidebar/>
        </Drawer> 
        </>
        :
        
      <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar1}>
        <Toolbar id='fix-outline'>
          <IconButton
            color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle1} className={classes.menuButton1}>
            <MenuIcon className='dashboard-toggle-icon'/>
          </IconButton>
              {/* nav component */}
              <Nav/>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer variant="temporary" anchor={theme.direction === 'rtl' ? 'right' : 'left'} open={mobileOpenResponsive} onClose={handleDrawerToggle1} classes={{paper: classes.drawerPaper,}}
            ModalProps={{keepMounted: true}}>
              <Sidebar/>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer classes={{paper: classes.drawerPaper,}}variant="permanent" open>
            <Sidebar/>
          </Drawer>
        </Hidden>
      </nav>
        </>
        }

      {/* dashboard inner main body */}
     <main className={clsx(classes.content, {[classes.contentShift]: open,})}>
     <div className={classes.drawerHeader} />
        <Cards/>
        <Chart/>
     </main>
     
    </div>
  );
}
