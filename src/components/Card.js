import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class Card extends Component {
constructor(props){
  super(props);
  this.state={loginUserFriendData:this.props.userFriendList};
  // this.handleAddUser=this.handleAddUser.bind(this);
}
//    handleAddUser(e){
//      console.log("event is ");
//       //  this.props.addFriend(this.props.friendId);
//   //     axios.post(`http://localhost:8080/api/v1/user/postIsUserExists`,this.props.email)
//   // .then(response => {
//   //   this.setState((state, props) => ({userData: response.data}));
//   //   // if(this.state.userData.email===user.email){
//   //     this.setState({isUserExists:true})
//   //     this.props.history.push({  pathname: '/next-page2',
//   //     state: { detail: this.state.userData}})
//   //   // }
//   //   // else{
//   //   // this.setState({isUserExists:false});
//   //   console.log("else")
//   //   alert("please Register your email")
//   //   // }

//   // })
// }
  
   render() {
    console.log("data",this.props.userFriendList);
    console.log('name', this.props.name);
    console.log('email', this.props.email);
    console.log('address', this.props.address);
    console.log('contactNo', this.props.contactNo);
       return (
         console.log("data inside retuen  ",this.props.userFriendList),
           <div className="card col-sm-12 mx-auto my-5 recommendation-card" >
               <img className="card-img-top" src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg
https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg
" alt="Profile Picture"></img>
               <div className="card-body text-center">
                   <h5 className="card-title">
                       <a href="#">{this.props.name}</a>
                   </h5>
                 <Link to="/next-page2"><button className="btn btn-info">View</button></Link>  
               </div>
           </div>

       );
   }

}
