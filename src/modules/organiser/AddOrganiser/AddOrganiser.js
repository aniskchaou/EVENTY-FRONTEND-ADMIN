import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import categoryMessage from '../../../main/messages/categoryMessage'
import categoryValidation from '../../../main/validations/categoryValidation'
import CategoryTestService from '../../../main/mocks/CategoryTestService';
import HTTPService from '../../../main/services/HTTPService';
import organiserHTTPService from '../../../main/services/organiserHTTPService';


const AddOrganiser = (props) => {

    const initialState = {
        name: "",
        phone: "",
        email: ""

    };

    const { register, handleSubmit, errors } = useForm()
    const [category, setCategory] = useState(initialState);

    const onSubmit = (data) => {
        //saveCategory(data)
        /*   CategoryTestService.create(data)
          setCategory(initialState)
          showMessage('Confirmation', categoryMessage.add, 'success') */
        saveCategory(data)
    }

    const saveCategory = (data) => {

        organiserHTTPService.create(data)
            .then(response => {
                setCategory(initialState)
                props.closeModal()
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
                    <label class="col-sm-3 control-label no-padding-right" for="form-field-1">
                        <font  ><font  > Email </font></font></label>
                    <div class="col-sm-12">
                        <input onChange={handleInputChange} value={category.email}
                            ref={register({ required: true })}
                            type="text" name="email" id="form-field-1" placeholder="Email"
                            class="form-control" />
                        <div className="error text-danger">
                            {errors.category_name && categoryValidation.category_name}
                        </div>
                    </div>
                </div>


                <div class="form-group">
                    <label class="col-sm-3 control-label no-padding-right" for="form-field-1">
                        <font  ><font  > Telephone </font></font></label>
                    <div class="col-sm-12">
                        <input onChange={handleInputChange} value={category.phone}
                            ref={register({ required: true })}
                            type="text" name="phone" id="form-field-1" placeholder="Telephone"
                            class="form-control" />
                        <div className="error text-danger">
                            {errors.category_name && categoryValidation.category_name}
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

AddOrganiser.propTypes = {};

AddOrganiser.defaultProps = {};

export default AddOrganiser;
