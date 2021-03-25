import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { find } from "lodash";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import Link from "@material-ui/core/Link";
import styles from "./styles";
import validator from "../../services/validator";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import CloseIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import food from "../../assets/images/food.jpg"

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
import Navbar from "../../components/navbar"
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';

class Restaurentdetails extends Component {
  constructor(props) {
    super(props);
    console.log("constructor" + props);
    this.state = {
      result:{},
      menuItemsList: [],
      rows: [{}],
     
     
    };
  }

  componentDidMount() {
    console.log("detils")
    if (this.props.match.params.restaurant_id) {

      console.log(this.props.match.params.restaurant_id);
      this.getDetails(this.props.match.params.restaurant_id);

    }
  }


  getDetails = async (restaurant_id) => {

    try {
      const url = "https://api.documenu.com/v2/restaurant/" + restaurant_id;
      const axios = require('axios');
      const config = {
        method: 'get',
        url: url,
        params: { 'key': 'cdf86a6a3095b103c216cb0d04814532' },
      }

      let res = await axios(config);
      console.log(" Response Success List === " + JSON.stringify(res.data.result.menus));
      const dataObject = res.data.result.menus;
      this.setState({result:res.data.result});
      console.log(this.state.result.restaurant_name);
      this.setState({ menuItemsList: dataObject });

    } catch (error) {
      // console.log("APPLY LEAVE ERROR == " + error.name + "" + error.message);
      console.log("Response Error == " + JSON.stringify(error));
    }
  }
  
  
  render() {
    const { isloading, success, data, isOpen, errors } = this.state;
    const { classes } = this.props;
    // const buttonClassname = classNames({
    //   [classes.buttonSuccess]: success && data.hashcode,
    //   [classes.verifyButton]: !success,
    // });
    return (
      <div className={classes.root}>
        <Navbar />

        <div className={classes.root}>
          <CssBaseline />
         

          <Paper className={classes.OutPaper}>
            <div className={classes.searchBtnRight}>
              <Grid item xs={12}>
                <h1 className={classes.restaurentname}>{this.state.result.restaurant_name}</h1>

              </Grid>
              <span className={classes.restaurentdetails}>


              {this.state.result.restaurant_phone}
</span>
<span className={classes.restaurentdetails}>


              {this.state.result.restaurant_website}
</span>
              <br></br>
              <span className={classes.restaurentdetails}>               {this.state.result.price_range}
</span>
              <br></br>
              <span className={classes.restaurentdetails}> 
              
              {this.state.result.hours}
</span>
              <br />
              <Button variant="contained" className={classes.buttonprev}>Add Review </Button>
              <Button variant="contained" className={classes.buttonprev}>Direction</Button>

              <Button variant="contained" className={classes.buttonprev}>Book marks</Button>
              <Button variant="contained" className={classes.buttonprev}>Share</Button>

            </div>
            {
              this.state.menuItemsList.map(item => {
                return item.menu_sections.map(item2 => {
                  return item2.menu_items.map(item3 => {
                    return (
                     
                      <Grid item xs={12} md={6} className = {classes.space}>
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
                                {item3.name}
                              </Typography>
                              <Typography className={classes.StatusText}>
                                {item3.description}
                              </Typography>
                              <Typography className={classes.StatusText}>
                                {item3.price}
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
                    );
                  
                  })
                })
              })
            }
          </Paper>
          
        </div>
      </div >
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

export const StyledRestaurentdetails = withStyles(styles)(Restaurentdetails);

export default connect(mapStateToProps, mapDispatchToProps)(StyledRestaurentdetails);
