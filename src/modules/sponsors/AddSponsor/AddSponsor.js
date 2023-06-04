import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddSponsor.css';
import HTTPService from '../../../main/services/HTTPService';
import { useForm } from 'react-hook-form';
import SponsorTestService from '../../../main/mocks/SponsorTestService';
import showMessage from '../../../libraries/messages/messages';
import sponsorMessage from '../../../main/messages/sponsorMessage';
import sponsorValidation from '../../../main/validations/categoryValidation';
import sponserHTTPService from '../../../main/services/sponserHTTPService';
const AddSponsor = (props) => {

  const initialState = {
    name: "",
    email: "",
    website: "",
    telephone: ""

  };

  const { register, handleSubmit, errors } = useForm()
  const [sponsor, setSponsor] = useState(initialState);

  const onSubmit = (data) => {
    //saveSponsor(data)
    /*  SponsorTestService.create(data)
     setSponsor(initialState)
     showMessage('Confirmation', sponsorMessage.add, 'success') */
    sponserHTTPService.create(data)
      .then(response => {
        setSponsor(initialState)
        props.closeModal()
      })
      .catch(e => {
        console.log(e);
      });

  }

  const saveSponsor = (data) => {

    sponserHTTPService.create(data)
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
              <font  ><font  > Name</font></font></label>
            <div class="col-sm-12">
              <input onChange={handleInputChange} value={sponsor.name}
                ref={register({ required: true })}
                type="text" name="name" id="form-field-1" placeholder="Name"
                class="form-control" />
              <div className="error text-danger">
                {errors.sponsor_name && sponsorValidation.sponsor_name}
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="col-sm-3 control-label no-padding-right" for="form-field-1-1"><font  ><font  > Email</font></font></label>
            <div class="form-group">
              <div class="col-sm-12">
                <input onChange={handleInputChange} value={sponsor.email}
                  ref={register({ required: false })} placeholder="Email"
                  multiple="" type="text" class="form-control" name="email" id="id-input-file-3" />
                <div className="error text-danger">
                  {errors.sponsor_image && sponsorValidation.sponsor_image}
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="col-sm-3 control-label no-padding-right" for="form-field-1-1"><font  ><font  > Website</font></font></label>
            <div class="form-group">
              <div class="col-sm-12">
                <input onChange={handleInputChange} value={sponsor.website}
                  ref={register({ required: false })} placeholder="Website"
                  multiple="" type="text" class="form-control" name="website" id="id-input-file-3" />
                <div className="error text-danger">
                  {errors.sponsor_image && sponsorValidation.sponsor_image}
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="col-sm-3 control-label no-padding-right" for="form-field-1-1"><font  ><font  > Telephone</font></font></label>
            <div class="form-group">
              <div class="col-sm-12">
                <input onChange={handleInputChange} value={sponsor.telephone}
                  ref={register({ required: false })} placeholder="Telephone"
                  multiple="" type="text" class="form-control" name="telephone" id="id-input-file-3" />
                <div className="error text-danger">
                  {errors.sponsor_image && sponsorValidation.sponsor_image}
                </div>
              </div>
            </div>
          </div>



          <div class="clearfix form-actions">
            <div class="col-md-offset-3 col-md-9">
              <button type="submit" name="submit" class="btn btn-info">
                <i class="ace-icon fa fa-check bigger-110"></i><font  ><font  >
                  Save
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
