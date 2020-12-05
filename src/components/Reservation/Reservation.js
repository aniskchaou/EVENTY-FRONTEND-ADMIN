import React from 'react';

import './Reservation.css';

const Reservation = () => (
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Résévations</strong>
    </div>
    <div className="card-body">
      <table id="bootstrap-data-table" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Utilisateur</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Message</th>
            <th>Nom evenement</th>
            <th>Date</th>
            <th>Nombre de membre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon</td>
            <td>tiger@gmail.com</td>
            <td>35353532</td>
            <td>hello</td>
            <td>match de foot</td>
            <td>12/12/2020</td>
            <td>4</td>

          </tr>

        </tbody>
      </table>
    </div>
  </div>
);

Reservation.propTypes = {};

Reservation.defaultProps = {};

export default Reservation;
