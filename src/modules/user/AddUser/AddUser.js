import React from 'react';
import PropTypes from 'prop-types';
import './AddUser.css';

const AddUser = () => (
  <div className="AddUser">

    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Nom d'utilisateur </font></font></label>
      <div class="col-sm-9">
        <input type="text" name="username" id="form-field-1" placeholder="Nom d'utilisateur" class=" form-control" />
      </div>
    </div>

    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Mot de passe</font></font></label>
      <div class="col-sm-9">
        <input type="text" name="password" id="form-field-1" placeholder="Mot de passe" class=" form-control" />
      </div>
    </div>


    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Email</font></font></label>
      <div class="col-sm-9">
        <input type="text" name="email" id="form-field-1" placeholder="Email Id" class=" form-control" />
      </div>
    </div>


    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Contact</font></font></label>
      <div class="col-sm-9">
        <input type="text" name="contact" id="form-field-1" placeholder="Numéro de contact" class=" form-control" />
      </div>
    </div>


    <div class="clearfix form-actions">
      <div class="col-md-offset-3 col-md-9">
        <button type="submit" name="submit" class="btn btn-info">
          <i class="ace-icon fa fa-check bigger-110"></i><font  ><font  > Sauvegarder
    </font></font></button>

      </div>
    </div>

    <div class="hr hr-24"></div>



  </div>
);

AddUser.propTypes = {};

AddUser.defaultProps = {};

export default AddUser;
