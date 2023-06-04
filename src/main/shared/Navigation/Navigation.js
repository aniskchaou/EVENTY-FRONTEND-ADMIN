import React from 'react';
import { NavLink } from "react-router-dom"
import Constant from '../../configs/user';
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (


      <aside id="left-panel" className="left-panel" style={{ display: (Constant.CONNECTED_USER ? 'block' : 'none') }}>
        <nav className="navbar navbar-expand-sm navbar-default">

          <div id="main-menu" className="main-menu collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li >
                < NavLink activeClassName="activeLink" to="/dashboard"><i className="menu-icon fa fa-laptop"></i>Dashboard </ NavLink>
              </li>
              <li>
                < NavLink activeClassName="activeLink" to="/event"><i className="menu-icon fa fa-calendar-alt"></i>Events </ NavLink>
              </li>
              <li>
                < NavLink activeClassName="activeLink" to="/category"><i className="menu-icon fa fa-magic"></i>Categories </ NavLink>
              </li>
              <li>
                < NavLink activeClassName="activeLink" to="/reservation"><i className="menu-icon fa fa-map-pin"></i>Bookings </ NavLink>
              </li>
              <li>
                < NavLink activeClassName="activeLink" to="/user"><i className="menu-icon fa fa-users"></i>Users </ NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/sponsor"><i className="menu-icon fa fa-phone"></i>Sponsers </ NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeLink" to="/organiser"><i className="menu-icon fa fa-hand-rock-o"></i>Organizers </ NavLink>
              </li>
              <li>
                < NavLink activeClassName="activeLink" to="/message"><i className="menu-icon fa fa-comments"></i>Messages </ NavLink>
              </li>
              {/*   <li class="menu-item-has-children dropdown show">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> <i class="menu-icon fa fa-glass"></i>Setup</a>
                <ul class="sub-menu children dropdown-menu show">
                  <li><i class="menu-icon fa fa-sign-in"></i><a href="page-register.html">News</a></li>
                  <li><i class="menu-icon fa fa-sign-in"></i><a href="page-register.html">Team</a></li>
                </ul>
              </li> */}

              {/* <li class="menu-item-has-children dropdown show">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> <i class="menu-icon fa fa-edit"></i>CMS</a>
                <ul class="sub-menu children dropdown-menu show">
                  <li><i class="menu-icon fa fa-sign-in"></i><a href="page-register.html">Intro Section</a></li>
                  <li><i class="menu-icon fa fa-sign-in"></i><a href="page-register.html">News Section</a></li>
                  <li><i class="menu-icon fa fa-sign-in"></i><a href="page-register.html">Gallery Section</a></li>
                  <li><i class="menu-icon fa fa-sign-in"></i><a href="page-register.html">Team Section</a></li>
                  <li><i class="menu-icon fa fa-sign-in"></i><a href="page-register.html">Event Section</a></li>
                </ul>
              </li> */}
              <li>
                < NavLink activeClassName="activeLink" to="/configuration"><i className="menu-icon fa fa-cog"></i>Settings </ NavLink>
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
