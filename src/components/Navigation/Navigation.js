import React from 'react';
import Header from '../Header/Header';

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
              <a href="/dashboard"><i className="menu-icon fa fa-laptop"></i>Tableau de bord </a>
            </li>
            <li>
              <a href="/category"><i className="menu-icon fa fa-laptop"></i>Categories </a>
            </li>
            <li>
              <a href="/reservation"><i className="menu-icon fa fa-laptop"></i>Réservations </a>
            </li>
            <li>
              <a href="/user"><i className="menu-icon fa fa-laptop"></i>Utilisateurs </a>
            </li>
            <li>
              <a href="/sponsor"><i className="menu-icon fa fa-laptop"></i>Sponseurs </a>
            </li>
            <li>
              <a href="/configuration"><i className="menu-icon fa fa-laptop"></i>Paramètres </a>
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
