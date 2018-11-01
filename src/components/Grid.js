import React from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';

export default class Grid extends React.Component{

    constructor(props){
        super(props)
        this.state={userFriendListData:[],userData1:[],value:''};
        this.handleSearch=this.handleSearch.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleSearch(event){
        event.preventDefault();
        console.log("from grid value ",this.state.value);
         let user = {
          'email': this.state.value
        }
      
        axios.post(`http://localhost:8080/api/v1/user/postIsUserExists`,user)
        .then(response => {
          this.setState((state, props) => ({userData1: response.data}))
        })}
handleChange(event) {
    this.setState({value: event.target.value})
  }
    render(){
       
        return(
            console.log("navpage to grid ",this.props.userFriendListData),
            console.log("user data",this.state.userData1),
            console.log("user data name ",this.state.userData1.name),
            console.log("user data length ",this.state.userData1.length),
            <fragment>
          <form onSubmit={this.handleSearch}>
      <table><tr><td>
      <input  type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search"/></td><td>
      <button ><i className="fa fa-search"></i></button>
      </td></tr></table>
       </form>
 { (this.state.userData1)?(
  <div className="card col-sm-12 mx-auto my-5 recommendation-card" >
  {(this.state.userData1.userProfileImageUrl )?
  (<img className="card-img-top" src={this.state.userData1.userProfileImageUrl} alt="" style={{ width: "100%" }}></img>):(<img src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt="" style={{ width: "100%" }} />)}
               <div className="card-body text-center">
                   <h5 className="card-title">
                       <a href="#">{this.state.userData1.name}</a>
                   </h5>
                 <Link to="/next-page2"><button className="btn btn-info">View</button></Link>  
               </div>
           </div>):(<h4>hi</h4>)
 }

            </fragment>
        )
    }
}