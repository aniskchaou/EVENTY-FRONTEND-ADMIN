import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import organiserHTTPService from "../../../main/services/organiserHTTPService";
import categoryValidation from '../../../main/validations/categoryValidation'


const EditOrganiser = (props) => {

    const initialState = {
        name: "",
        phone: "",
        email: ""

    };

    const { register, handleSubmit, errors } = useForm()
    const [organiser, setOrganiser] = useState(props.organiser);

    useEffect(() => {
        setOrganiser(props.organiser)
    }, [props.organiser]);

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
                setOrganiser(initialState)
                props.closeModal()
            })
            .catch(e => {
                console.log(e);
            });

    };


    const handleInputChange = event => {
        const { name, value } = event.target;
        setOrganiser({ ...organiser, [name]: value });
    };

    return (
        <div className="AddCategory">
            <form onSubmit={handleSubmit(onSubmit)}>


                <div class="form-group">
                    <label class="col-sm-3 control-label no-padding-right" for="form-field-1">
                        <font  ><font  > Name </font></font></label>
                    <div class="col-sm-12">
                        <input onChange={handleInputChange} value={organiser.name}
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
                        <input onChange={handleInputChange} value={organiser.email}
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
                        <input onChange={handleInputChange} value={organiser.phone}
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

EditOrganiser.propTypes = {};

EditOrganiser.defaultProps = {};

export default EditOrganiser;