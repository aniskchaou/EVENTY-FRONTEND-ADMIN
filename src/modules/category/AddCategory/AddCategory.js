import React, { useState } from 'react';
import './AddCategory.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import categoryMessage from '../../../main/messages/categoryMessage'
import categoryValidation from '../../../main/validations/categoryValidation'
import CategoryTestService from '../../../main/mocks/CategoryTestService';
import HTTPService from '../../../main/services/HTTPService';
import categoryHTTPService from '../../../main/services/categoryHTTPService';

const AddCategory = (props) => {

  const initialState = {
    name: "",
    description: ""

  };

  const { register, handleSubmit, errors } = useForm()
  const [category, setCategory] = useState(initialState);


  const onSubmit = (data) => {
    //saveCategory(data)
    /* CategoryTestService.create(data)
    setCategory(initialState)
    showMessage('Confirmation', categoryMessage.add, 'success') */

    categoryHTTPService.create(data)
      .then(response => {
        setCategory(initialState)
        props.closeModal()
      })
      .catch(e => {
        console.log(e);
      });
  }



  const saveCategory = (data) => {

    categoryHTTPService.create(data)
      .then(response => {
        setCategory(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  return (
    <div className="AddCategory">
      <form onSubmit={handleSubmit(onSubmit)}>


        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1">
            <font  ><font  > Name </font></font></label>
          <div class="col-sm-12">
            <input onChange={handleInputChange} value={category.name}
              ref={register({ required: true })}
              type="text" name="name" id="form-field-1" placeholder="Name"
              class="form-control" />
            <div className="error text-danger">
              {errors.category_name && categoryValidation.category_name}
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1-1"><font  ><font  > Description</font></font></label>
          <div class="form-group">
            <div class="col-sm-12">
              <input onChange={handleInputChange} value={category.description}
                ref={register({ required: false })}
                multiple="" type="text" class="form-control" name="description" id="id-input-file-3" />
              <div className="error text-danger">
                {errors.category_image && categoryValidation.category_image}
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
  )
};

AddCategory.propTypes = {};

AddCategory.defaultProps = {};

export default AddCategory;
