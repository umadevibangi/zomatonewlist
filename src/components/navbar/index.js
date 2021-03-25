import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import LockIcon from '@material-ui/icons/Lock';
import Button from "@material-ui/core/Button";

import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import GetAppIcon from '@material-ui/icons/GetApp';
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import Tooltip from '@material-ui/core/Tooltip';
import { createBrowserHistory } from "history";
import DashboardIcon from '@material-ui/icons/Dashboard';
// import dashboard from "../../screens/dashboard"
import { useHistory } from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginTop:"1.3%"
  },
  root: {
    minWidth: 300,
    marginRight: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 2,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title1: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
     color:"#692495",
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    color:"#692495",
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  tooltipsize:{
    maxWidth:" 100%"
  },
  Iconcolor:{
  
   
    "&:active": {
        backgroundColor: "#692495",
        color: "#ffffff",
      },
      "&:hover": {
        backgroundColor: "#692495",
        color: "#ffffff",
      },
  },
  Appbarcolor:{
    background: "#1daab1",
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const history = useHistory();

  const [data, setData] = React.useState({
    
    value: -1,
   
  });
// const dashboardIcon = () => {
//    console.log("dashboard")
//    history.push("/dashboard");
//   };
  const handleDashboard = () =>{
    history.push("/dashboard");
  }
  const handleSurveyor= () =>{
    history.push("/addsurveyor");
  }
  const handleDatadownload = () =>{
    history.push("/datadownload");
  }
  const handleReport = () =>{
    history.push("/table");
  }
  const  handleLogout= event => {
    history.push("/login");
  };
  return (
    <div className={classes.root}>
              <AppBar position="fixed" className={classes.Appbarcolor}>
          <Toolbar>

            <Typography variant="h6" className={classes.title}>
              welcome to zomato umadevi
          </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="find the location…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            < LockIcon/>
            <Button color="inherit" className={classes.logout}>Logout</Button>
          </Toolbar>
        </AppBar>
    </div>
    
  );
}
