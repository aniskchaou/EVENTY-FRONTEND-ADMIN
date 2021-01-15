import React from 'react';
import PropTypes from 'prop-types';
import './AddEvent.css';

const AddEvent = () => (
  <div className="AddEvent">

    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Nom de catégorie  </label>
      <div class="col-sm-9">
        <select name="category_name" class="col-xs-10 col-sm-5">
          <option value="8"> FÊTES AMUSANTES </option>
          <option value="10"> JEU JOUÉ </option>
          <option value="12"> TASSE DE CAFÉ </option>
          <option value="13"> FILMS REGARDÉS </option>
        </select>

      </div>
    </div>
    <br />
    <br />

    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Nom de l'événement  </label>
      <div class="col-sm-9">
        <input type="text" name="event_name" id="form-field-1" placeholder="Nom de l'événement" class="col-xs-10 col-sm-5" />
      </div>
    </div>
    <br /> <br />

    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  description de l'évenement </label>
      <div class="col-sm-9">
        <textarea type="text" name="event_description" id="form-field-1" placeholder="description de l'évenement" class="col-xs-10 col-sm-5"></textarea>
      </div>
    </div>


    <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Date de début de l'événement </label>
    <div class="col-sm-9">
      <input type="text" name="event_start_date" id="event_start_date" placeholder="Date de début de l'événement" class="col-xs-10 col-sm-5 hasDatepicker" />
    </div>


    <br />
    <br />
    <div class="clearfix form-actions">
      <div class="col-md-offset-3 col-md-9">
        <button type="submit" name="submit" class="btn btn-info">
          <i class="ace-icon fa fa-check bigger-110"></i> 
            Ajouter
											 </button>

      </div>
    </div>

    
  </div>
);

AddEvent.propTypes = {};

AddEvent.defaultProps = {};

export default AddEvent;
