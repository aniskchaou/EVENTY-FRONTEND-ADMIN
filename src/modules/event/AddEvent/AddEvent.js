import React, { useState } from 'react';
import './AddEvent.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import eventMessage from '../../../main/messages/eventMessage'
import eventValidation from '../../../main/validations/eventValidation'
import EventTestService from '../../../main/mocks/EventTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddEvent = () => {



  const initialState = {
    category_name: "",
    event_name: "",
    event_description: "",
    event_start_date: "",

  };

  const { register, handleSubmit, errors } = useForm()
  const [event, setEvent] = useState(initialState);

  const onSubmit = (data) => {
    //saveEvent(data)
    EventTestService.create(data)
    setEvent(initialState)
    showMessage('Confirmation', eventMessage.add, 'success')
  }

  const saveEvent = (data) => {

    HTTPService.create(data)
      .then(response => {
        setEvent(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setEvent({ ...event, [name]: value });
  };


  return (
    <div className="AddEvent">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Nom de catégorie  </label>
          <div class="col-sm-9 ">
            <select onChange={handleInputChange} value={event.category_name} ref={register({ required: true })}
              name="category_name" class="form-control">
              <option value="8"> FÊTES AMUSANTES </option>
              <option value="10"> JEU JOUÉ </option>
              <option value="12"> TASSE DE CAFÉ </option>
              <option value="13"> FILMS REGARDÉS </option>
            </select>
            <div className="error text-danger">
              {errors.category_name && eventValidation.category_name}
            </div>
          </div>
        </div>


        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Nom     </label>
          <div class="col-sm-9">
            <input onChange={handleInputChange} value={event.event_name} ref={register({ required: true })}
              type="text" name="event_name" id="form-field-1" placeholder="Nom   " class="form-control" />
            <div className="error text-danger">
              {errors.event_name && eventValidation.event_name}
            </div>

          </div>
        </div>


        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  description   </label>
          <div class="col-sm-9">
            <textarea onChange={handleInputChange} value={event.event_description} ref={register({ required: true })}
              type="text" name="event_description" id="form-field-1" placeholder="description  " class="form-control"></textarea>
            <div className="error text-danger">
              {errors.event_description && eventValidation.event_description}
            </div>
          </div>
        </div>


        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Date de début    </label>
        <div class="col-sm-9">
          <input onChange={handleInputChange} value={event.event_start_date} ref={register({ required: true })}
            type="date" name="event_start_date" id="event_start_date" placeholder="Date de début   " class="form-control" />
          <div className="error text-danger">
            {errors.event_start_date && eventValidation.event_start_date}
          </div>
        </div>

        <br /><br />

        <div class="clearfix form-actions">
          <div class="col-md-offset-3 col-md-9">
            <button type="submit" name="submit" class="btn btn-info">
              <i class="ace-icon fa fa-check bigger-110"></i>
            Sauvegarder
											 </button>

          </div>
        </div>

      </form>
    </div>
  )
};

AddEvent.propTypes = {};

AddEvent.defaultProps = {};

export default AddEvent;
