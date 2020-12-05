import React from 'react';

import './Eventt.css';

 const Eventt = () => (
  <div className="card">
  <div className="card-header">
    <strong className="card-title">Evenements</strong>
  </div>
  <div className="card-body">
    <table id="bootstrap-data-table" className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Categorie</th>
          <th>Auteur</th>
          <th>Nom</th>
          <th>Description</th>
          <th>statut</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>culture</td>
          <td>Anis</td>
          <td>reunion</td>
          <td>qdf</td>
          <td>ouvert</td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
);

Eventt.propTypes = {};

Eventt.defaultProps = {};

export default Eventt;
