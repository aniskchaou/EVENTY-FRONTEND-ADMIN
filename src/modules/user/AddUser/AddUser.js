import React, { useState } from 'react';
import './AddUser.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import userMessage from '../../../main/messages/userMessage'
import userValidation from '../../../main/validations/userValidation'
import UserTestService from '../../../main/mocks/UserTestService';
import HTTPService from '../../../main/services/HTTPService';
import userHTTPService from '../../../main/services/userHTTPService';

const AddUser = (props) => {

  const initialState = {
    username: "",
    email: "",
    telephone: "",
    firstName: "",
    lastNme: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [user, setUser] = useState(initialState);

  const onSubmit = (data) => {
    //saveUser(data)
    userHTTPService.create(data)
      .then(response => {
        setUser(initialState)
        props.closeModal()
      })
      .catch(e => {
        console.log(e);
      });

  }

  const saveUser = (data) => {

    userHTTPService.create(data)
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
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Username </font></font></label>
          <div class="col-sm-12">
            <input onChange={handleInputChange} value={user.username} ref={register({ required: true })}
              type="text" name="username" id="form-field-1" placeholder="Username" class=" form-control" />
            <div className="error text-danger">
              {errors.username && userValidation.username}
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > FirstName</font></font></label>
          <div class="col-sm-12">
            <input onChange={handleInputChange} value={user.firstName} ref={register({ required: true })}
              type="text" name="firstName" id="form-field-1" placeholder="FirstName" class=" form-control" />
            <div className="error text-danger">
              {errors.password && userValidation.password}
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > LastNme</font></font></label>
          <div class="col-sm-12">
            <input onChange={handleInputChange} value={user.lastNme} ref={register({ required: true })}
              type="text" name="lastNme" id="form-field-1" placeholder="LastName" class=" form-control" />
            <div className="error text-danger">
              {errors.password && userValidation.password}
            </div>
          </div>
        </div>



        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Email</font></font></label>
          <div class="col-sm-12">
            <input onChange={handleInputChange} value={user.email} ref={register({ required: true })}
              type="text" name="email" id="form-field-1" placeholder="Email" class=" form-control" />
            <div className="error text-danger">
              {errors.email && userValidation.email}
            </div>

          </div>
        </div>


        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1"><font  ><font  > Telephone</font></font></label>
          <div class="col-sm-12">
            <input onChange={handleInputChange} value={user.telephone} ref={register({ required: true })}
              type="text" name="telephone" id="form-field-1" placeholder="Telephone" class=" form-control" />
            <div className="error text-danger">
              {errors.contact && userValidation.contact}
            </div>
          </div>
        </div>


        <div class="clearfix form-actions">
          <div class="col-md-offset-3 col-md-9">
            <button type="submit" name="submit" class="btn btn-info">
              <i class="ace-icon fa fa-check bigger-110"></i><font  ><font  > Save
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
