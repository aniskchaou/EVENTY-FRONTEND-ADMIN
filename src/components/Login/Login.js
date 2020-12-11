import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import {  Link } from "react-router-dom"

const Login = () => (
  <div className="login-content">
    <div className="login-logo">
      <a href="index.html">
        <img className="align-content" src="images/logo.png" alt="" />
      </a>
    </div>
    <div className="login-form">
      <label>login : admin  / mp : admin</label>
      <form action="/dashboard" method="get">
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" placeholder="Email" value="admin" />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input type="password" className="form-control" placeholder="Password" value="admin" />
        </div>
        <div className="checkbox">


        </div>
        <Link to="/dashboard" type="button" className="btn btn-success btn-flat m-b-30 m-t-30">Connexion</Link>


      </form>
    </div>
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
