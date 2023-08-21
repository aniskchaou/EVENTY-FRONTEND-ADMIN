import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Content from '../Content/Content';

import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from '../Footer/Footer';

import { useLocation } from 'react-router-dom'
import User from '../../../modules/user/User/User';
import Login from '../../../modules/Login/Login';

const Root = () => {




  const [connected, setConnected] = useState(false);


  const handleClick = num => {
    setConnected(num)
  };





  return (
    <div>
      <Router>
        {connected === true ?
          <div> <Navigation handleClick={handleClick} />
            <Header handleClick={handleClick} />


            <div id="right-panel" className="right-panel">


              <div className="content">
                <div className="animated fadeIn">
                  <div className="row">

                    <Content handleClick={handleClick} />


                  </div>
                </div>
              </div>

              <div className="clearfix"></div>
              <Footer handleClick={handleClick} /></div></div> :

          <Login handleClick={handleClick} />}


      </Router>
    </div>
  );

}



Root.propTypes = {};

Root.defaultProps = {};

export default Root;
