import React from 'react';
import PropTypes from 'prop-types';
import './AddEvent.css';

const AddEvent = () => (
  <div className="AddEvent">

    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Nom de catégorie </font></font></label>
      <div class="col-sm-9">
        <select name="category_name" class="col-xs-10 col-sm-5">
          <option value="8"><font  ><font  >FÊTES AMUSANTES</font></font></option>
          <option value="10"><font  ><font  >JEU JOUÉ</font></font></option>
          <option value="12"><font  ><font  >TASSE DE CAFÉ</font></font></option>
          <option value="13"><font  ><font  >FILMS REGARDÉS</font></font></option>
        </select>

      </div>
    </div>
    <br />
    <br />

    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Nom de l'événement </font></font></label>
      <div class="col-sm-9">
        <input type="text" name="event_name" id="form-field-1" placeholder="Nom de l'événement" class="col-xs-10 col-sm-5" />
      </div>
    </div>
    <br /> <br />

    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > description de l'évenement</font></font></label>
      <div class="col-sm-9">
        <textarea type="text" name="event_description" id="form-field-1" placeholder="description de l'évenement" class="col-xs-10 col-sm-5"></textarea>
      </div>
    </div>


    <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Date de début de l'événement</font></font></label>
    <div class="col-sm-9">
      <input type="text" name="event_start_date" id="event_start_date" placeholder="Date de début de l'événement" class="col-xs-10 col-sm-5 hasDatepicker" />
    </div>


    <br />
    <br />
    <div class="clearfix form-actions">
      <div class="col-md-offset-3 col-md-9">
        <button type="submit" name="submit" class="btn btn-info">
          <i class="ace-icon fa fa-check bigger-110"></i><font  ><font  >
            Ajouter
											</font></font></button>

      </div>
    </div>

    
  </div>
);

AddEvent.propTypes = {};

AddEvent.defaultProps = {};

export default AddEvent;
