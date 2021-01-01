import React from 'react';
import PropTypes from 'prop-types';
import './Content.css';

import { BrowserRouter as Router, Route } from "react-router-dom"

import Configuration from '../../modules/shared/Configuration/Configuration';
import Dashbord from '../../modules/shared/DashBoard/DashBoard';
import Eventt from './../../modules/event/Eventt/Eventt';
import Reservation from './../../modules/reservation/Reservation/Reservation';
import Category from './../../modules/category/Category/Category';
import User from './../../modules/user/User/User';
import Sponsor from './../../modules/Sponsor/Sponsor';


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
