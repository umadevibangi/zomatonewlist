import green from "@material-ui/core/colors/green";

const styles = (theme) => ({
  restaurentname:{
    position: "relative",
    background: "#ffffff 0% 0%",
    borderRadius: "4px",
    opacity: "1",
    marginTop: "8px",
    
   
    padding: "3px 14px",
    color: "#1daab1",
  },
  restaurentdetails:{
    position: "relative",
    background: "#ffffff 0% 0%",
    borderRadius: "4px",
    opacity: "1",
    marginTop: "8px",
    
   
    padding: "3px 14px",
    color: "black",
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
  logout: {
    float: "left"
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  TravelRequestGrid: {
    marginTop: theme.spacing.unit * 1,
    textalign: "left",
    marginRight: theme.spacing.unit * 1,
    color: "#1daab1",
    fontSize: "20px",
    fontWeight: "bold",
    opacity: "1",
  },
  Heading: {
    textalign: "left",
    marginRight: theme.spacing.unit * 1,
    color: "#1daab1",
    fontSize: "20px",
    fontWeight: "bold",
    opacity: "1",
  },
  selectEmpty: {
    position: "relative",
    background: "#ffffff 0% 0%",
    borderRadius: "4px",
    opacity: "1",
    marginTop: "8px",
    fontSize: "small",
    border: " 1px solid #ccc",
    padding: "3px 14px",
    color: "#a2a2a2",
  },
  OutPaper: {
    marginTop:"8%",
    width: "96%",
    marginLeft:"2%",
    borderRadius: "20px",
  },
  TablePaper: {
    marginTop: theme.spacing.unit * 1,
    borderRadius: "20px",
    width: "96%",
    marginLeft:"2%",
    boxShadow: "0px 3px 6px #AFB4C929",

    opacity: "1",
  },
  TablePaper1:{
    marginTop: theme.spacing.unit * 1,
    borderRadius: "20px",
    width: "96%",

    boxShadow: "0px 3px 6px #AFB4C929",

    opacity: "1",
  },
  tablehead: {
    color: "#242021",
    fontFamily: "Roboto,Medium",
    fontSize: "14px",
    fontWeight: "bold",
  },
  buttonprev: {
    marginTop:"1%",
    background: "#ffffff",
    borderRadius: "4px",
    opacity: "1",
    color: "black",
    fontSize: "small",
    textTransform: "none",
    margin: "0 0 0 10px",
  },
  space :{
    padding:"10px"
  },
  image:{
width:"50%",
marginLeft:"70px"
  },
  
});

export default styles;
