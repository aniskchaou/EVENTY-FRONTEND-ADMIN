import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './DashBoard.css';
//import { drawChart } from './../../../components/chart';
import Eventt from './../../event/Eventt/Eventt';
import { drawChart } from '../../../libraries/chart/chart';
import bookingHTTPService from '../../../main/services/bookingHTTPService';
import eventHTTPService from '../../../main/services/eventHTTPService';
import organiserHTTPService from '../../../main/services/organiserHTTPService';
import sponserHTTPService from '../../../main/services/sponserHTTPService';


const DashBoard = () => {

  const [bookings, setBookings] = useState([]);
  const [events, setEvents] = useState([]);
  const [organisers, setOrganisers] = useState([]);
  const [sponsers, setSponsers] = useState([]);

  useEffect(() => {
    // Runs ONCE after initial rendering
    drawChart()
    bookingHTTPService.getCount().then(data => {
      console.log(data.data)
      setBookings(data.data.booking)
    })

    eventHTTPService.getCount().then(data => {
      setEvents(data.data.event)
    })

    organiserHTTPService.getCount().then(data => {
      setOrganisers(data.data.organiser)
    })

    sponserHTTPService.getCount().then(data => {
      setSponsers(data.data.sponser)
    })
  }, []);



  return (
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="stat-widget-five">
              <div className="stat-icon dib flat-color-1">
                <i className="pe-7s-cash"></i>
              </div>
              <div className="stat-content">
                <div className="text-left dib">
                  <div className="stat-text">
                    <span className="count">{events}</span>
                  </div>
                  <div className="stat-heading">Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="stat-widget-five">
              <div className="stat-icon dib flat-color-2">
                <i className="pe-7s-cart"></i>
              </div>
              <div className="stat-content">
                <div className="text-left dib">
                  <div className="stat-text">
                    <span className="count">{organisers}</span>
                  </div>
                  <div className="stat-heading">Organisers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="stat-widget-five">
              <div className="stat-icon dib flat-color-3">
                <i className="pe-7s-browser"></i>
              </div>
              <div className="stat-content">
                <div className="text-left dib">
                  <div className="stat-text">
                    <span className="count">{bookings}</span>
                  </div>
                  <div className="stat-heading">Bookings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="stat-widget-five">
              <div className="stat-icon dib flat-color-4">
                <i className="pe-7s-users"></i>
              </div>
              <div className="stat-content">
                <div className="text-left dib">
                  <div className="stat-text">
                    <span className="count">{sponsers}</span>
                  </div>
                  <div className="stat-heading">Sponsors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/*       <div className="col-md-12">
        <div className="row">
          <div className="col-md-6"> <div className="card">
            <div className="card-body">

              <h4 className="mb-3">Evénements</h4>
              <canvas id="team-chart" height="225" width="450" className="event-chart chartjs-render-monitor"></canvas>
            </div>
          </div></div>
          <div className="col-md-6"> <div className="card">
            <div className="card-body">

              <h4 className="mb-3">Catégorie</h4>
              <canvas id="team-chart" height="225" width="450" className="category-chart chartjs-render-monitor"></canvas>
            </div>
          </div></div>


        </div>


      </div> */}
      <div className="col-md-12">

        <Eventt />
      </div>


    </div>

















  )
};

DashBoard.propTypes = {};

DashBoard.defaultProps = {};

export default DashBoard;
