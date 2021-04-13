import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditUser.css';
import { useForm } from 'react-hook-form';
import UserTestService from '../../../main/mocks/UserTestService';
import userMessage from '../../../main/messages/userMessage';
import userValidation from '../../../main/validations/userValidation';
import showMessage from '../../../libraries/messages/messages';

const EditUser = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    setUser(props.user)
  }, [props.user]);


  const onSubmit = (data) => {

    UserTestService.update(props.user, data)
    showMessage('Confirmation', userMessage.edit, 'success')
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="AddUser">
      <form onSubmit={handleSubmit(onSubmit)}>


        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Nom d'utilisateur </font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={user.username} ref={register({ required: true })}
              type="text" name="username" id="form-field-1" placeholder="Nom d'utilisateur" class=" form-control" />
            <div className="error text-danger">
              {errors.username && userValidation.username}
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Mot de passe</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={user.password} ref={register({ required: true })}
              type="text" name="password" id="form-field-1" placeholder="Mot de passe" class=" form-control" />
            <div className="error text-danger">
              {errors.password && userValidation.password}
            </div>
          </div>
        </div>


        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Email</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={user.email} ref={register({ required: true })}
              type="text" name="email" id="form-field-1" placeholder="Email Id" class=" form-control" />
            <div className="error text-danger">
              {errors.email && userValidation.email}
            </div>

          </div>
        </div>


        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Contact</font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={user.contact} ref={register({ required: true })}
              type="text" name="contact" id="form-field-1" placeholder="Numéro de contact" class=" form-control" />
            <div className="error text-danger">
              {errors.contact && userValidation.contact}
            </div>
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

      </form>

    </div>
  )
};

EditUser.propTypes = {};

EditUser.defaultProps = {};

export default EditUser;
