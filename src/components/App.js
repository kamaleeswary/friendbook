import React, { Component} from 'react';
import "./../style/index.scss"
import axios from 'axios';
import {Link } from 'react-router-dom'
// import Map from './Map';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
//  import 'bootstrap/dist/css/bootstrap.min.css';
// import Nextpage from './Nextpage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:'',
      name:'',
      address:'',
      contactNo:'',
      userData:[],
      isUserExists:false,
      detail:""};
        // this.rowCallback = this.rowCallback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleCreate=this.handleCreate.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // handleCreate(event){
  //   event.preventDefault();
  //   let user = {
  //     'email': this.state.value,
  //     'friends':[]
  //   };
  //   axios.post(`http://localhost:8080/api/v1/user/postAddUser`,user)
  //   .then(response => {
  //     this.setState((state, props) => ({userData:response.data}));
  //     console.log(" hi ",this.state.userData)
  //     alert(" Registered Succesfully ")
  //   })
  // }
handleSubmit(event) {
  event.preventDefault();
  console.log(this.state.value);
  let user = {
    'email': this.state.value
  };

  axios.post(`http://localhost:8080/api/v1/user/postIsUserExists`,user)
  .then(response => {
    this.setState((state, props) => ({userData: response.data}));
    if(this.state.userData.email===user.email){
      this.setState({isUserExists:true})
      this.props.history.push({  pathname: '/next-page',
      state: { detail: this.state.userData}})
    }
    else{
    this.setState({isUserExists:false});
    console.log("else")
    alert("please Register your email")
    }

  })}


  render() {
    return (
      <Container className="App">
        <h2 style={{color:'black'}} id="welcome">Welcome To FriendsBook !</h2>
        <div id="main">
        <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup id="formGroup">
           <Label><i className="fa fa-user-circle" aria-hidden="true"></i> </Label> 
           <hr/>
           {/* <Label id="iconLabel"> <i className="fa fa-font" aria-hidden="true"></i></Label>
           <Label id="nameLabel">Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleName"
                placeholder="Enter Your name "
              /> */}
             <Label id="iconLabel"> <i className="fa fa-envelope" aria-hidden="true"></i></Label>
              <Label id="emailLabel">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={this.state.value}
                onChange={this.handleChange}
              />
               {/* <Label id="iconLabel"> <i className="fa fa-address-card" aria-hidden="true"></i></Label>
               <Label id="addressLabel">Address</Label>
              <Input
                type="text"
                name="name"
                id="exampleName"
                placeholder="Enter Your Address "
              />
              <Label><i className="fa fa-mobile" aria-hidden="true"></i></Label>
               <Label id="contactLabel">Contact No</Label>
              <Input
                type="text"
                name="name"
                id="exampleName"
                placeholder="Enter Your contact No "
              /> */}
            </FormGroup>
          </Col>
        <Button className="btn btn-primary"  id="btn">Login</Button>
      <Link to="/signup"  ><Button  className="btn btn-primary" id="btn2"  >SignUp</Button></Link>
        </Form>
       
        </div>
        {/* <Nextpage org={this.state.user}/> */}
      </Container>
      
    );
 
  }
}

export default App;
