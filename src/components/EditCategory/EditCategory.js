import React from 'react';
import PropTypes from 'prop-types';
import './EditCategory.css';

const EditCategory = () => (
  <div className="EditCategory">
    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Nom de catégorie </font></font></label>

      <div class="col-sm-9">
        <input type="text" name="category_name" id="form-field-1" placeholder="Nom de catégorie" class="col-xs-10 col-sm-5" />
      </div>
    </div>

    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Icône de catégorie </font></font></label>

      <div class="col-sm-9">
        <textarea name="category_icon" id="form-field-1" placeholder="Icône de catégorie" class="col-xs-10 col-sm-5"></textarea>
      </div>
    </div>

    <div class="form-group">
      <label class="col-sm-3 control-label no-padding-right" for="form-field-1-1"><font  ><font  > Image de la catégorie </font></font></label>
      <div class="form-group">
        <div class="col-sm-9">
          <input multiple="" type="file" name="category_image" id="id-input-file-3" />
        </div>
      </div>
    </div>

    <br />
    <br />
    <div class="clearfix form-actions">
      <div class="col-md-offset-3 col-md-9">
        <button type="submit" name="submit" class="btn btn-info">
          <i class="ace-icon fa fa-check bigger-110"></i><font  ><font  >
            Editer
											</font></font></button>

      </div>
    </div>


  </div>
);

EditCategory.propTypes = {};

EditCategory.defaultProps = {};

export default EditCategory;
