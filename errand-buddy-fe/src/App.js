import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

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
          
          <BrowserRouter>
          <SiteHeader />
            <Switch>
            
              <Route
                path="/buddy/:id/completed-errands"
                exact
                component={CompletedErrands}
              />
              <Route
                path="/buddy/:id/accept-errands"
                exact
                component={AcceptErrands}
              />
              <Route
                path="/buddy/buddy-dashboard"
                exact
                component={BuddyDashboard}
              />
              <Route path="/buddy/:id" exact component={ShowErrands} />
              <Route path="/home" exact component={Home}  />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <Home />
            </Switch>
          </BrowserRouter>

          <SiteFooter />
        </Router>
      </div>
    );
  }
}

export default App;
