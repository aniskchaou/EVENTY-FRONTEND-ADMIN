import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom"

import { useHistory } from "react-router"
import { Redirect } from 'react-router'
import { useForm } from 'react-hook-form';
import { LoadJS } from '../../libraries/datatables/datatables';
import User from '../user/User/User';
import Constant from '../../main/configs/user';
import showMessage from '../../libraries/messages/messages';
import userHTTPService from '../../main/services/userHTTPService';
import CurrentUser from '../../main/configs/user';



const Login = ({ handleClick }) => {
  let history = useHistory()
  var userInit = { username: "admin", password: "admin" }
  const { register, handleSubmit, errors } = useForm()
  const [user, setUser] = useState(userInit);

  useEffect(() => {
  }, []);

  const registerPage = () => {
    history.replace("/register")
  }


  const onSubmit = (data) => {
    userHTTPService.login({ username: user.username, password: user.password })
      .then(response => {
        setUser(userInit)
        if (Object.keys(response.data).length !== 0) {
          handleClick(true)
          CurrentUser.USER_DETAIL = response.data
          localStorage.setItem('connected', CurrentUser.CONNECTED_USER);
          history.push("/dashboard")
        } else {
          CurrentUser.CONNECTED_USER = false
          showMessage('Error', 'You have entered an invalid username or password', 'warning')
        }
      })
      .catch(e => {
        showMessage('Error', CurrentUser.ERR_MSG, 'warning')
        console.log(e)
      });


  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (

    <div className="login-content" style={{ display: (!Constant.CONNECTED_USER ? 'block' : 'none') }}>
      <div className="login-logo">
        <a href="index.html">
          <img className="align-content" src="images/logo.png" alt="" />
        </a>
      </div>
      <div className="login-form">

        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" className="form-control" placeholder="Email" onChange={handleInputChange} value={user.username} ref={register({ required: true })} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleInputChange} value={user.password} ref={register({ required: true })} />
          </div>
          <div className="checkbox">


          </div>
          <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>


        </form>
      </div>
    </div>

  )
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
