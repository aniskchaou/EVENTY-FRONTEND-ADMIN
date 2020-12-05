import React from 'react';
import {  Link } from "react-router-dom"
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(

      
    <aside id="left-panel" className="left-panel">
      <nav className="navbar navbar-expand-sm navbar-default">

        <div id="main-menu" className="main-menu collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/dashboard"><i className="menu-icon fa fa-laptop"></i>Tableau de bord </Link>
            </li>
            <li>
              <Link to="/category"><i className="menu-icon fa fa-laptop"></i>Categories </Link>
            </li>
            <li>
              <Link to="/reservation"><i className="menu-icon fa fa-laptop"></i>Réservations </Link>
            </li>
            <li>
              <Link to="/user"><i className="menu-icon fa fa-laptop"></i>Utilisateurs </Link>
            </li>
            <li>
              <Link to="/sponsor"><i className="menu-icon fa fa-laptop"></i>Sponseurs </Link>
            </li>
            <li>
              <Link to="/configuration"><i className="menu-icon fa fa-laptop"></i>Paramètres </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>);

  }
}



Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
