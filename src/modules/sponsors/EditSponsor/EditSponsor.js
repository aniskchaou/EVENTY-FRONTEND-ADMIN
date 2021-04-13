import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditSponsor.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages';
import sponsorMessage from '../../../main/messages/sponsorMessage';
import SponsorTestService from '../../../main/mocks/SponsorTestService';
import sponsorValidation from '../../../main/validations/categoryValidation';

const EditSponsor = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [sponsor, setSponsor] = useState(props.sponsor);

  useEffect(() => {
    setSponsor(props.sponsor)
  }, [props.sponsor]);


  const onSubmit = (data) => {

    SponsorTestService.update(props.sponsor, data)
    showMessage('Confirmation', sponsorMessage.edit, 'success')
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSponsor({ ...sponsor, [name]: value });
  };
  return (
    <div className="AddCategory">
      <form onSubmit={handleSubmit(onSubmit)}>


        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1">
            <font  ><font  > Nom de catégorie </font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={sponsor.sponso_name}
              ref={register({ required: true })}
              type="text" name="sponsor_name" id="form-field-1" placeholder="Nom de catégorie"
              class="form-control" />
            <div className="error text-danger">
              {errors.sponsor_name && sponsorValidation.sponsor_name}
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1-1"><font  ><font  > Image de la catégorie </font></font></label>
          <div class="form-group">
            <div class="col-sm-9">
              <input onChange={handleInputChange}
                ref={register({ required: false })}
                multiple="" type="file" class="form-control" name="sponsor_image" id="id-input-file-3" />
              <div className="error text-danger">
                {errors.sponsor_image && sponsorValidation.sponsor_image}
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div class="clearfix form-actions">
          <div class="col-md-offset-3 col-md-9">
            <button type="submit" name="submit" class="btn btn-info">
              <i class="ace-icon fa fa-check bigger-110"></i><font  ><font  >
                Sauvegarder
											</font></font></button>
          </div>
        </div>

      </form>
    </div>
  )
};

EditSponsor.propTypes = {};

EditSponsor.defaultProps = {};

export default EditSponsor;
