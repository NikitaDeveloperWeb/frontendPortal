import { makeStyles } from '@material-ui/core';
import Background from './assets/images/backgroundMainPage.jpg';
import BackgroundignUp from './assets/images/RegisterBgPage.jpg'
import BackgroundRestore from './assets/images/restorepassword.jpg'
import BackgroundHome from './assets/images/ProfileBg.jpg'

const useStyles = makeStyles((theme) => ({
  //FormEditor
  formEditor:{},
  //FormRegister
  formRegister:{
    height:500,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  //SignUpPage
  wrapperSignUp: {
    width: '100%',
    height: '100vh',
    display:'flex',
    background:`url(${BackgroundignUp})100% 100% no-repeat`,
    backgroundSize:'cover',
    justifyContent:'center',
  },
  registerSection:{
    flex:'0 0 40%',
    height:'100vh',
    backgroundColor:'#fff',
    boxShadow: '2px -2px 5px 4px rgba(0, 0, 0, 0.5)',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    
  },

  //MainTextField
  fieldStyle: {
    width: 320,
    height: 40,
    borderRadius: 5,
    paddingLeft: 20,
    fontFamily: 'Sansation',
    letterSpacing: '0.2rem',
    border: '1px solid #000',
    '&::-webkit-input-placeholder': {
      fontSize: 13,
      color: '#C2BABA',
    },
    '&:focus': {
      outline: 'none',
      visibility: 'visable',
      fontSize: 13,
      border: '1px solid #74A6D4',
      color: '#959090',
      transition:'0.7s',
      '&::-webkit-input-placeholder': {
        fontSize: 0,
      },
    },
  },
  //FormLogin
  formStyles: {
    width: 'auto',
    height: '200px',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    paddingTop: 10,
  },
  //ButtonStart
  buttonLoginPageStart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    heigth: 50,
    border: '2px solid rgba(0,0,0,0.9)',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 24,
    borderRadius: 10,

    cursor: 'pointer',
    letterSpacing: 10,
    '&:focus': {
      visibility: 'hidden',
    },
  },
  buttonLoginPageStartHover: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    heigth: 50,
    border: '2px solid rgba(255,255,255,0.9)',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 24,
    borderRadius: 10,
    cursor: 'pointer',
    letterSpacing: 10,
    transition:'0.7s',
    '&:focus': {
      visibility: 'hidden',
      transition:'0.7s',
    },
    '&:active': {
      color: '#fff',
      border: '2px solid rgba(255,255,255,0.9)',
    },
  },
  //ButtonMain
  buttonStyle: {
    width: 320,
    height: 25,
    cursor: 'pointer',
    backgroundColor: '#74A6D4',
    color: '#211A1A',
    borderRadius: 5,
    letterSpacing: 5,
    border: 'none',
    '&:focus': {
      outline: 'none',
      visibility: 'visable',
      border: '1px solid #74A6D4',
      
    },
    '&:hover': {
      backgroundColor: '#418ED6',
      transition:'0.7s',
    },
  },
  //LoginPage
  wrapperLoginPage: {
    display: 'flex',
    width: '100%',
    height: '100vh',
  },
  loginSideWrapper: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    flex: '0 0 40%',
    marginLeft: '60%',
    boxShadow: '-5px 0px 4px rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkStyle: {
    width: '320px',
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'space-between',
    fontFamily: 'Sansation',
  },
  listStyle: {
    color: 'rgba(25, 137, 240, 0.84);',
    fontSize: 10,
    '&:hover': {
      color: 'rgba(8, 72, 132, 0.84)',
      transition:'0.5s',
    },
  },
  bottomLine: {
    width: '80%',
    border: '0.3 solid #000',
    marginTop: 300,
  },

  //PageStart
  wrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    background: `url(${Background})100% 100% no-repeat`,
    backgroundSize: 'cover',
    opacity: '95%',
  },
  startPageFontTitle: {
    color: '#000',
    opacity: '1',
    fontFamily: 'Sansation',
    fontSize: 48,
    paddingBottom: 20,
  },
  startPageFontSubtitle: {
    color: '#000',
    opacity: '90%',
    fontFamily: 'Sansation',
    fontSize: 18,
    letterSpacing: 10,
  },
  introBlock: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //RestorePasswordPage
  wrapperRestorePass:{
    width:'100%',
    height:'100vh',
    background:`url(${BackgroundRestore})100% 100% no-repeat`,
    backgroundSize:'cover',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  resetSection:{
    fontFamily:'Sansation',
    backgroundColor:'#fff',
    flex:'0 0 40%',
    height:'100vh',
    boxShadow: '5px 1px 4px 2px rgba(0, 0, 0, 0.4)',
    letterSpacing:4,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',

  },
  //ResetForm
  resetFormStyle:{
    width:'auto',
    height:150,
    display:'flex',
    justifyContent:'space-evenly',
    flexDirection:'column',
  },
  //HomePage
  wrapperHome:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'100vh',
    background:`url(${BackgroundHome})100% 100% no-repeat`,
    backgroundSize:'cover',
    overflow:'hidden',

  },
  sectionUserInterface:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'100vh',
  },
  workspace:{
    display:'flex',
    flexDirection:'row',
    flex:'0 0 100%',
    heigth:'100vh',
    backgroundColor:'#fff',
    boxShadow: '3px 1px 4px 2px rgba(0, 0, 0, 0.2)',
    
  },
  content:{
    width:'100%',
    overflowY:'scroll',
    height:'auto',
    overflowX:'hidden',
  },
  //NavigationPanel
  navStyle:{
    padding:'0% 1% 1% 1%',
    width:'auto',
    heigth:'100vh',
    backgroundColor:'#fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'',
    borderRight:'0.1px solid rgba(0,0,1,0.1)',
    boxShadow: '1px 1px 2px 2px rgba(0, 0, 0, 0.3)',
    zIndex:2,   
  },
  listNav:{
    display:'flex',
    flexDirection:'column',
    marginTop:5,
    listStyle:'none',
    color:'#538EB4',
    textDecoration:'none',
    // padding:10,

    alignItems:'center',
  },

  noAciveItem:{

    color:'#538EB4',
    cursor: 'pointer',
  },

  activeItem:{
    color:'#1d4b69',
    cursor: 'pointer',
  },

  //InterfaceUser
  wrapperMain:{    
    backgroundColor:'#fff',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    heightMax:'auto',
    heightMin:'100vh',

  },
  avatar:{
    width:100,
    height:150,
    borderRadius:100,
    marginLeft:'14%',
  },
  sectionIntroProfile:{
    // marginLeft:'-20%',
  },
  profileIntroStyles:{
    paddingTop:10,
    alignItems:'center',
    justifyContent:'center',
    display:'flex',
    width:'50%',
    borderBottom:'0.2px solid rgba(0,0,0,0.7)',
    paddingBottom:15,
    color:'#3D3E3F',
  },
  //HeaderHOme
  headerHomeStyle:{
   textAlign:'center',
   fontFamily:'Sansation',
   paddingBottom:15,
   borderBottom:'0.2px solid rgba(0,0,0,0.7)',
   width:'50%',
   
  },
  homePageTitle:{
    letterSpacing:5,
  },
  homePagePodTitle:{
    fontSize:15,
    color:'#74A6D4',
    letterSpacing:5,
  },
  //AboutMe
  categoriesInfo:{
    display:'flex',
    listStyle:'none',
    flexDirection:'row',
    width:550,
    justifyContent:'space-between',
    textAlign:'center',
    marginLeft:'8.5%',
  },
  wrapperAboutMe:{
    fontFamily:'Sansation',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    width:'50%',
    paddingBottom:50,
  },
  

}));

export default useStyles;
