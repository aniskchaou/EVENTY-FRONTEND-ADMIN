import React, { useState } from 'react';
import './AddUser.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import userMessage from '../../../main/messages/userMessage'
import userValidation from '../../../main/validations/userValidation'
import UserTestService from '../../../main/mocks/UserTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddUser = () => {

  const initialState = {
    post: "",
    description: "",
    start: "",
    end: "",
    location: "",
    requirement: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [user, setUser] = useState(initialState);

  const onSubmit = (data) => {
    //saveUser(data)
    UserTestService.create(data)
    setUser(initialState)
    showMessage('Confirmation', userMessage.add, 'success')
  }

  const saveUser = (data) => {

    HTTPService.create(data)
      .then(response => {
        setUser(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


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

AddUser.propTypes = {};

AddUser.defaultProps = {};

export default AddUser;
