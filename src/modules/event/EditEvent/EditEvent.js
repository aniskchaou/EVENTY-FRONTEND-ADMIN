import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditEvent.css';
import { useForm } from 'react-hook-form';
import EventTestService from '../../../main/mocks/EventTestService';
import eventMessage from '../../../main/messages/eventMessage';
import eventValidation from '../../../main/validations/eventValidation';
import showMessage from '../../../libraries/messages/messages';

const EditEvent = (props) => {

  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [event, setEvent] = useState(props.event);

  useEffect(() => {
    setEvent(props.event)
  }, [props.event]);


  const onSubmit = (data) => {

    EventTestService.update(props.event, data)
    showMessage('Confirmation', eventMessage.edit, 'success')
  }

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
              <option value="FÊTES AMUSANTES"> FÊTES AMUSANTES </option>
              <option value="JEU JOUÉ"> JEU JOUÉ </option>
              <option value="TASSE DE CAFÉ"> TASSE DE CAFÉ </option>
              <option value="FILMS REGARDÉS"> FILMS REGARDÉS </option>
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

EditEvent.propTypes = {};

EditEvent.defaultProps = {};

export default EditEvent;
