import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './DashBoard.css';
import { drawChart } from './../../../components/chart';
import * as Chart from 'chart.js';
import Eventt from './../../event/Eventt/Eventt';


const DashBoard = () => {
  useEffect(() => {
    // Runs ONCE after initial rendering
    drawChart()

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
                    <span className="count">2</span>
                  </div>
                  <div className="stat-heading">Résérvations</div>
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
                    <span className="count">2</span>
                  </div>
                  <div className="stat-heading">Catégories</div>
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
                    <span className="count">3</span>
                  </div>
                  <div className="stat-heading">Utilisateurs</div>
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
                    <span className="count">3</span>
                  </div>
                  <div className="stat-heading">Sponseurs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="col-md-12">
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


      </div>
      <div className="col-md-12">

        <Eventt/>
      </div>


    </div>

















  )
};

DashBoard.propTypes = {};

DashBoard.defaultProps = {};

export default DashBoard;
