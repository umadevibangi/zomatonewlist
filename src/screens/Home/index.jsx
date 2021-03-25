import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { find } from "lodash";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios';
import Link from "@material-ui/core/Link";
import styles from "./styles";
import validator from "../../services/validator";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import CloseIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";
// import UltsLogo from "../../assets/images/ults-logo.png";
import appUrls from "../../config/appUrls";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import getUsertype from "../../services/getUsertype";
import LockIcon from '@material-ui/icons/Lock';
// import classNames from "classnames";
import CheckIcon from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import { Paper, Hidden } from "@material-ui/core";
import { Lock, Person, Email } from "@material-ui/icons";
// import Reaptcha from "reaptcha";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import food from "../../assets/images/food.jpg"
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import CssBaseline from "@material-ui/core/CssBaseline";

import FormHelperText from "@material-ui/core/FormHelperText";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import VisibilityIcon from "@material-ui/icons/Visibility";
import Geocode from "react-geocode";

import { GoogleComponent } from 'react-google-location'
import Navbar from "../../components/navbar";
import Restaurentdetails from "../Restaurentdetails";
const API_KEY = "AIzaSyBi8vkTHZA-xcVZeGP96uCj8138yaw4OPs";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray:[],
    };
  }
 
  handleClick = (item) => {
   // console.log(item.restaurant_id);
    let restaurant_id = item.restaurant_id;
    this.props.navigateTo(`/restaurentdetails/${restaurant_id}/`);
  };
  componentDidMount(){
   this.getRestuarentsList();
  }

  
 getRestuarentsList = async() => {

  try {
    const url = "https://api.documenu.com/v2/restaurants/search/geo";
    const axios = require('axios');
    const config = {
      method: 'get',
      url: url,
      headers: { 'x-api-key': 'cdf86a6a3095b103c216cb0d04814532' },
      params: { 
         'lat' : "40.688072",
         'lon': "-73.997385",
         'distance': "1",
         'fullmenu': true
     }
    }

    let res = await axios(config);
    console.log(" Response Success List === " + JSON.stringify(res));
    const dataObject = res.data.data;
    this.setState({dataArray: dataObject});
    
  } catch (error) {
   // console.log("APPLY LEAVE ERROR == " + error.name + "" + error.message);
    console.log("Response Error == " + JSON.stringify(error));
  }
}

  render() {

    console.warn("Selected Places == " + this.state.place);
    const { isloading, success, data, isOpen, errors } = this.state;
    const { classes } = this.props;
    // const buttonClassname = classNames({
    //   [classes.buttonSuccess]: success && data.hashcode,
    //   [classes.verifyButton]: !success,
    // });
    return (
      <div className={classes.root}>
        <Navbar />
        <div className={classes.OutPaper}>
          <CssBaseline />

          <div className={classes.searchBtnRight}>
            <Grid item xs={12}>
              <TextField
                InputProps={{ disableUnderline: true }}
                value={this.state.searchText}
                onKeyDown={this.keyDown}
                // id="outlined-full-width"
                style={{ margin: 20 }}
                placeholder="Search here"
                // fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.selectEmpty}
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </div>

          {this.state.dataArray.map((data,index) => (
              <Grid item xs={12} md={6} className = {classes.space} onClick={this.handleClick.bind(this,data)}>
              <Card variant="outlined" className={classes.CardStyle}>
                <CardContent className={classes.CardContent}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    
                  >
                    <Grid item xs={12} md={6}>
                      <Typography className={classes.Number} >
                        {data.restaurant_name}
                      </Typography>
                      <Typography className={classes.StatusText}>
                        {data.address.city + "  "+
                        data.address.state + "  "+
                        data.address.postal_code + "  "+
                        data.address.street +"  "+
                        data.address.formatted}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <img className={classes.image}
                       src={food}
                alt="food"></img>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            
          ))
          }
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    navigateTo: (url) => dispatch(push(url)),
  };
}

export const StyledHome = withStyles(styles)(Home);

export default connect(mapStateToProps, mapDispatchToProps)(StyledHome);
