import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import categoryMessage from '../../../main/messages/categoryMessage'
import categoryValidation from '../../../main/validations/categoryValidation'
import CategoryTestService from '../../../main/mocks/CategoryTestService';
import HTTPService from '../../../main/services/HTTPService';
import eventValidation from '../../../main/validations/eventValidation';
import bookingHTTPService from '../../../main/services/bookingHTTPService';
import eventHTTPService from '../../../main/services/eventHTTPService';
import userHTTPService from '../../../main/services/userHTTPService';


const AddReservation = (props) => {

    const initialState = {
        event: "",
        user: "",
        payment: ""

    };

    const { register, handleSubmit, errors } = useForm()
    const [category, setCategory] = useState(initialState);
    const [events, setEvents] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getEvents()
        getUsers()
    }, [])

    const onSubmit = (data) => {
        //saveCategory(data)
        /*  CategoryTestService.create(data)
         setCategory(initialState)
         showMessage('Confirmation', categoryMessage.add, 'success') */
        bookingHTTPService.create(data)
            .then(response => {
                setCategory(initialState)
                props.closeModal()
            })
            .catch(e => {
                console.log(e);
            });
    }


    const getEvents = () => {
        eventHTTPService.getAll().then(data => {
            setEvents(data.data)
        })
    }

    const getUsers = () => {
        userHTTPService.getAll().then(data => {
            setUsers(data.data)
        })
    }





    const handleInputChange = event => {
        const { name, value } = event.target;
        setCategory({ ...category, [name]: value });
    };

    return (
        <div className="AddCategory">
            <form onSubmit={handleSubmit(onSubmit)}>


                <div class="form-group">
                    <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  User  </label>
                    <div class="col-sm-12 ">
                        <select onChange={handleInputChange} value={category.user} ref={register({ required: true })}
                            name="user" class="form-control">
                            {users.map(data =>
                                <option value={data.username}> {data.username}</option>
                            )}
                        </select>
                        <div className="error text-danger">
                            {errors.category_name && eventValidation.category_name}
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Event  </label>
                    <div class="col-sm-12 ">
                        <select onChange={handleInputChange} value={category.event} ref={register({ required: true })}
                            name="event" class="form-control">
                            {events.map(data =>
                                <option value={data.name}> {data.name}</option>
                            )}
                        </select>
                        <div className="error text-danger">
                            {errors.category_name && eventValidation.category_name}
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Payment Status </label>
                    <div class="col-sm-12 ">
                        <select onChange={handleInputChange} value={category.payment} ref={register({ required: true })}
                            name="payment" class="form-control">
                            <option value="Succeed"> Succeed </option>
                            <option value="Failed"> Failed </option>
                            <option value="Pending"> Pending </option>
                        </select>
                        <div className="error text-danger">
                            {errors.category_name && eventValidation.category_name}
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

AddReservation.propTypes = {};

AddReservation.defaultProps = {};

export default AddReservation;