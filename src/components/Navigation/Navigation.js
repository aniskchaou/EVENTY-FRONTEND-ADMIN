import React from 'react';
import {   NavLink } from "react-router-dom"
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
            <li >
              < NavLink activeClassName="activeLink" to="/dashboard"><i className="menu-icon fa fa-laptop"></i>Tableau de bord </ NavLink>
            </li>
            <li>
              < NavLink activeClassName="activeLink" to="/event"><i className="menu-icon fa fa-calendar-alt"></i>Evenement </ NavLink>
            </li>
            <li>
              < NavLink activeClassName="activeLink" to="/category"><i className="menu-icon fa fa-bars"></i>Categories </ NavLink>
            </li>
            <li>
              < NavLink activeClassName="activeLink" to="/reservation"><i className="menu-icon fa fa-check"></i>Réservations </ NavLink>
            </li>
            <li>
              < NavLink activeClassName="activeLink" to="/user"><i className="menu-icon fa fa-users"></i>Utilisateurs </ NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" to="/configuration"><i className="menu-icon fa fa-crown"></i>Sponseurs </ NavLink>
            </li>
            <li>
              < NavLink activeClassName="activeLink" to="/configuration"><i className="menu-icon fa fa-cog"></i>Paramètres </ NavLink>
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
