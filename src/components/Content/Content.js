import React from 'react';
import PropTypes from 'prop-types';
import './Content.css';
import Eventt from  '../Eventt/Eventt';
import Reservation from '../Reservation/Reservation';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Category from '../Category/Category';
import Sponsor from '../Sponsor/Sponsor';
import Configuration from '../Configuration/Configuration';
import Dashbord from '../DashBoard/DashBoard';
import User from '../User/User';
import Login from '../Login/Login';
const Content = () => (
  <div className="col-md-12">
    
        <div>
        <Route exact path="/" component={Dashbord} />
        <Route exact path="/dashboard" component={Dashbord} />
          <Route exact path="/event" component={Eventt} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/user" component={User} />
          <Route exact path="/sponsor" component={Sponsor} />
          <Route exact path="/configuration" component={Configuration} />
         
          
        </div>
      
   
</div>
);

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
