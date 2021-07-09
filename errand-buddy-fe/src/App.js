import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Shared Components
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";


//Buddy Components
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ShowErrands from "./components/pages/buddy/Show_errands";
import AcceptErrands from "./components/pages/buddy/Accept_errands";
import CompletedErrands from "./components/pages/buddy/Completed_errands";
import BuddyDashboard from "./components/pages/buddy/Buddy_dashboard";



class App extends React.Component {
  render() {
    return (
      
        <div className="app">

          <Router>
          <SiteHeader /> 
          
          <Switch>
            <Route path="/buddy/:id/completed-errands" component={CompletedErrands} exact/>
            <Route path="/buddy/:id/accept-errands" component={AcceptErrands} exact/>
            <Route path="/buddy/buddy-dashboard" component={BuddyDashboard} exact/>
            <Route path="/buddy/:id" component={ShowErrands} exact/>
            <Route path="/home" component={Home} exact />
            <Route path="/register" component={Register} exact/>
            <Route path="/login" component={Login} exact/>
            <Home />
            
          </Switch>
        

          <SiteFooter />

          </Router>


        </div>
      
    );
  }
}

export default App;
