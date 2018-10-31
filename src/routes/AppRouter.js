import React from "react";
import {BrowserRouter , Route,Switch ,Link} from  "react-router-dom";
import NextPage from "../components/Nextpage";
import NextPage2 from "../components/nextpage2"
import App from "../components/App";
class AppRouter extends React.Component 
{
    render  ()
    {
        return (
            <div>
              
 <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
<a className="navbar-brand" id="atag" href="#">FriendsBook</a>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <BrowserRouter>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"><Link to="/">Level 1</Link></a>
    <a class="dropdown-item" href="#"><Link to="/next-page">Level 2</Link></a>
    <a class="dropdown-item" href="#"><Link to="/next-page2">Level 3</Link></a>
  </div></BrowserRouter>
</div>
</nav> 

            <BrowserRouter>
            <Switch>
                <Route path = "/" component ={App} exact = {true}/>
                <Route path = "/next-page" component = {NextPage}/>
                <Route path = "/next-page2" component = {NextPage2}/>
            </Switch>
                 
            </BrowserRouter>
            </div>
        );
    }
}
export default AppRouter;