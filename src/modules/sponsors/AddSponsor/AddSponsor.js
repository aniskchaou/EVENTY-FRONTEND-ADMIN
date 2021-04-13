import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddSponsor.css';
import HTTPService from '../../../main/services/HTTPService';
import { useForm } from 'react-hook-form';
import SponsorTestService from '../../../main/mocks/SponsorTestService';
import showMessage from '../../../libraries/messages/messages';
import sponsorMessage from '../../../main/messages/sponsorMessage';
import sponsorValidation from '../../../main/validations/categoryValidation';

const AddSponsor = () => {

  const initialState = {
    sponsor_name: "",
    sponsor_image: "",

  };

  const { register, handleSubmit, errors } = useForm()
  const [sponsor, setSponsor] = useState(initialState);

  const onSubmit = (data) => {
    //saveSponsor(data)
    SponsorTestService.create(data)
    setSponsor(initialState)
    showMessage('Confirmation', sponsorMessage.add, 'success')
  }

  const saveSponsor = (data) => {

    HTTPService.create(data)
      .then(response => {
        setSponsor(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setSponsor({ ...sponsor, [name]: value });
  };

  return (
    <div className="AddSponsor">
      <div className="AddSponsor">
        <form onSubmit={handleSubmit(onSubmit)}>


          <div class="form-group">
            <label class="col-sm-3 control-label no-padding-right" for="form-field-1">
              <font  ><font  > Nom de sponseur </font></font></label>
            <div class="col-sm-9">
              <input onChange={handleInputChange} value={sponsor.sponsor_name}
                ref={register({ required: true })}
                type="text" name="sponsor_name" id="form-field-1" placeholder="Nom de sponseur"
                class="form-control" />
              <div className="error text-danger">
                {errors.sponsor_name && sponsorValidation.sponsor_name}
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="col-sm-3 control-label no-padding-right" for="form-field-1-1"><font  ><font  > Image de la sponseur </font></font></label>
            <div class="form-group">
              <div class="col-sm-9">
                <input onChange={handleInputChange} value={sponsor.sponsor_image}
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
    </div>
  )
};

AddSponsor.propTypes = {};

AddSponsor.defaultProps = {};

export default AddSponsor;
