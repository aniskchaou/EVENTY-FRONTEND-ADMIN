import React, { useState } from 'react';
import './AddCategory.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import categoryMessage from '../../../main/messages/categoryMessage'
import categoryValidation from '../../../main/validations/categoryValidation'
import CategoryTestService from '../../../main/mocks/CategoryTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddCategory = () => {

  const initialState = {
    category_name: "",
    category_image: "",

  };

  const { register, handleSubmit, errors } = useForm()
  const [category, setCategory] = useState(initialState);

  const onSubmit = (data) => {
    //saveCategory(data)
    CategoryTestService.create(data)
    setCategory(initialState)
    showMessage('Confirmation', categoryMessage.add, 'success')
  }

  const saveCategory = (data) => {

    HTTPService.create(data)
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
            <font  ><font  > Nom de catégorie </font></font></label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={category.category_name}
              ref={register({ required: true })}
              type="text" name="category_name" id="form-field-1" placeholder="Nom de catégorie"
              class="form-control" />
            <div className="error text-danger">
              {errors.category_name && categoryValidation.category_name}
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1-1"><font  ><font  > Image de la catégorie </font></font></label>
          <div class="form-group">
            <div class="col-sm-9">
              <input onChange={handleInputChange} value={category.category_image}
                ref={register({ required: false })}
                multiple="" type="file" class="form-control" name="category_image" id="id-input-file-3" />
              <div className="error text-danger">
                {errors.category_image && categoryValidation.category_image}
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

AddCategory.propTypes = {};

AddCategory.defaultProps = {};

export default AddCategory;
