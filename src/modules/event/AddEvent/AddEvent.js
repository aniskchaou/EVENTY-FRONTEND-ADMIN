import React, { useEffect, useState } from 'react';
import './AddEvent.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import eventMessage from '../../../main/messages/eventMessage'
import eventValidation from '../../../main/validations/eventValidation'
import EventTestService from '../../../main/mocks/EventTestService';
import HTTPService from '../../../main/services/HTTPService';
import eventHTTPService from '../../../main/services/eventHTTPService';
import categoryHTTPService from '../../../main/services/categoryHTTPService';
import sponserHTTPService from '../../../main/services/sponserHTTPService';
import organiserHTTPService from '../../../main/services/organiserHTTPService';

const AddEvent = (props) => {



  const initialState = {
    name: "",
    category: "",
    organiser: "",
    date: "",
    start: "",
    end: "",
    sponsor: "",
    price: "",
    max: "",
    description: "",
    status: ""

  };

  const { register, handleSubmit, errors } = useForm()
  const [event, setEvent] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [organisers, setOrganisers] = useState([]);
  const [sponsers, setSponsers] = useState([]);

  const onSubmit = (data) => {
    //saveEvent(data)
    /*  EventTestService.create(data)
     setEvent(initialState)
     showMessage('Confirmation', eventMessage.add, 'success') */
    eventHTTPService.create(data)
      .then(response => {
        setEvent(initialState)
        props.closeModal()
      })
      .catch(e => {
        console.log(e);
      });
  }


  useEffect(() => {
    getCategories()
    getOrganisers()
    getSponsors()

  }, [])


  const getCategories = () => {
    categoryHTTPService.getAll().then(res => {
      setCategories(res.data)
    }).catch(e => {
      showMessage('Error', e, 'warning')
    });
  }

  const getSponsors = () => {
    sponserHTTPService.getAll().then(data => {
      setSponsers(data.data)
    })
  }

  const getOrganisers = () => {
    organiserHTTPService.getAll().then(data => {
      setOrganisers(data.data)
    })
  }

  const saveEvent = (data) => {

    eventHTTPService.create(data)
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
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Category  </label>
          <div class="col-sm-12 ">
            <select required="" onChange={handleInputChange} autocomplete="off" id="search-box" value={event.category} data-toggle="tooltip" ref={register({ required: true })}
              name="category" class="form-control">

              {categories.map(cat =>
                <option value={cat.id}> {cat.name} </option>
              )}
            </select>
            <div className="error text-danger">
              {errors.category_name && eventValidation.category_name}
            </div>
          </div>
        </div>


        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Name     </label>
          <div class="col-sm-12">
            <input onChange={handleInputChange} value={event.name} ref={register({ required: true })}
              type="text" name="name" id="form-field-1" placeholder="Name" class="form-control" />
            <div className="error text-danger">
              {errors.event_name && eventValidation.event_name}
            </div>

          </div>
        </div>


        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Description   </label>
          <div class="col-sm-12">
            <textarea onChange={handleInputChange} value={event.description} ref={register({ required: true })}
              type="text" name="description" id="form-field-1" placeholder="description  " class="form-control"></textarea>
            <div className="error text-danger">
              {errors.event_description && eventValidation.event_description}
            </div>
          </div>
        </div>


        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Date  </label>
        <div class="col-sm-12">
          <input onChange={handleInputChange} value={event.date} ref={register({ required: true })}
            type="date" name="date" id="event_start_date" placeholder="Date" class="form-control" />
          <div className="error text-danger">
            {errors.event_start_date && eventValidation.event_start_date}
          </div>
        </div>

        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Start  </label>
        <div class="col-sm-12">
          <input onChange={handleInputChange} value={event.start} ref={register({ required: true })}
            type="time" name="start" id="event_start_date" placeholder="Date" class="form-control" />
          <div className="error text-danger">
            {errors.event_start_date && eventValidation.event_start_date}
          </div>
        </div>


        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  End  </label>
        <div class="col-sm-12">
          <input onChange={handleInputChange} value={event.end} ref={register({ required: true })}
            type="time" name="end" id="event_start_date" placeholder="Date" class="form-control" />
          <div className="error text-danger">
            {errors.event_start_date && eventValidation.event_start_date}
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Sponsor  </label>
          <div class="col-sm-12 ">
            <select onChange={handleInputChange} value={event.sponsor} ref={register({ required: true })}
              name="sponsor" class="form-control">
              {sponsers.map(spon =>
                <option value={spon.name}> {spon.name} </option>
              )}
            </select>
            <div className="error text-danger">
              {errors.category_name && eventValidation.category_name}
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Price     </label>
          <div class="col-sm-12">
            <input onChange={handleInputChange} value={event.price} ref={register({ required: true })}
              type="text" name="price" id="form-field-1" placeholder="Name" class="form-control" />
            <div className="error text-danger">

            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Max Members     </label>
          <div class="col-sm-12">
            <input onChange={handleInputChange} value={event.max} ref={register({ required: true })}
              type="text" name="max" id="form-field-1" placeholder="Max Members" class="form-control" />
            <div className="error text-danger">

            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label no-padding-right" for="form-field-1">  Organiser  </label>
          <div class="col-sm-12 ">
            <select onChange={handleInputChange} value={event.category} ref={register({ required: true })}
              name="organiser" class="form-control">
              {organisers.map(org =>
                <option value={org.name}> {org.name} </option>
              )}
            </select>
            <div className="error text-danger">
              {errors.category_name && eventValidation.category_name}
            </div>
          </div>
        </div>







        <div class="clearfix form-actions">
          <div class="col-md-offset-3 col-md-9">
            <button type="submit" name="submit" class="btn btn-info">
              <i class="ace-icon fa fa-check bigger-110"></i>
              Save
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
