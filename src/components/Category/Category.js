import React from 'react';
import PropTypes from 'prop-types';
import './Category.css';

const Category = () => (
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Catégories</strong>
    </div>
    <div className="card-body">
      <table id="bootstrap-data-table" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>culture</td>
            <td>musique</td>
          </tr>
          <tr>
            <td>sport</td>
            <td>match foot</td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
);

Category.propTypes = {};

Category.defaultProps = {};

export default Category;
