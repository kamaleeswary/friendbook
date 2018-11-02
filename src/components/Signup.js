import React,{Component} from 'react';
import axios from 'axios';
import {
    Container
  } from 'reactstrap';
export default class Signup extends Component{
        constructor(props){
        super(props);
    this.state={
        userlist:[],
        Name:"",
        address:"",
        editIndex: -1,
        email: "",
        friends:[],
        contact:""
    }}
    handleNewNameChanged(event)
    {
        this.setState({
            name:event.target.value
        });
    }
    handleNewEmailChanged(event)
    {
         this.setState(
             {
               email:event.target.value
             }
         );
    }
    handleNewAddressChanged(event)
    {
         this.setState(
             {
               address:event.target.value
             }
         );
    }
    handleNewContactChanged(event)
    {
             event.preventDefault();
             this.setState(
                 {
                     contact:event.target.value
                 }
             )
    } 
    handleCreateNewUser(event)
    { event.preventDefault()
        const newrestro={
            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            contact:this.state.contact,
            friends:[]
        }
        axios.post('http://localhost:8080/api/v1/user/postAddUser',newrestro)
        .then(res=>{
        const list=this.state.userlist
        const newuserlist=[...list,res.data]
        alert("successfully Registered")
        this.setState({
            userlist:newuserlist,
            name:"",
            email:"",
            address:"",
            contact:"",
            friends:[]
        });
        }
        )
        .catch(err=>{
           console.log("Err in addding new user")
        });
    }
    render()
    {
        return(
            <Container className="App">
            <div class="signup">
            <form onSubmit={this.handleCreateNewUser.bind(this)}>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" onChange={this.handleNewEmailChanged.bind(this)} placeholder="Enter email" id="email" required/>
  </div>
  <div class="form-group">
   <label for="email">Name:</label>
  <input type="text" class="form-control" onChange={this.handleNewNameChanged.bind(this)} placeholder="Enter name" id="pwd" required/>
  </div>
  <div class="form-group">
    <label for="pwd">Address:</label>
    <input type="text" class="form-control" onChange={this.handleNewAddressChanged.bind(this)}  placeholder="Enter address" id="pwd" required/>
  </div>
  <div class="form-group">
    <label for="pwd">Contact:</label>
    <input type="text" class="form-control" id="phonenum" type="tel" pattern="^\d{10}$"  onChange={this.handleNewContactChanged.bind(this)}  placeholder="Enter contact number" id="pwd" required/>
  </div>
  <button type="submit" class="btn btn-default" >Submit</button>
</form>
</div>
</Container>
        )
    }
} 