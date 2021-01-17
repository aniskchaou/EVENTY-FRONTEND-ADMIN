import React from 'react';
import PropTypes from 'prop-types';
import './EditEvent.css';

const EditEvent = () => (
  <div className="EditEvent">
    
    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Nom de catégorie  </label>
      <div class="col-sm-9 ">
        <select name="category_name" class="form-control">
          <option value="8"> FÊTES AMUSANTES </option>
          <option value="10"> JEU JOUÉ </option>
          <option value="12"> TASSE DE CAFÉ </option>
          <option value="13"> FILMS REGARDÉS </option>
        </select>

      </div>
    </div>


    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Nom     </label>
      <div class="col-sm-9">
        <input type="text" name="event_name" id="form-field-1" placeholder="Nom   " class="form-control" />
      </div>
    </div>


    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  description   </label>
      <div class="col-sm-9">
        <textarea type="text" name="event_description" id="form-field-1" placeholder="description  " class="form-control"></textarea>
      </div>
    </div>


    <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Date de début    </label>
    <div class="col-sm-9">
      <input type="date" name="event_start_date" id="event_start_date" placeholder="Date de début   " class="form-control" />
    </div>


    <div class="clearfix form-actions">
      <div class="col-md-offset-3 col-md-9">
        <button type="submit" name="submit" class="btn btn-info">
          <i class="ace-icon fa fa-check bigger-110"></i>
            Sauvegarder
											 </button>

      </div>
    </div>


  </div>
);

EditEvent.propTypes = {};

EditEvent.defaultProps = {};

export default EditEvent;
