import PropTypes from 'prop-types';
import './EditLocalisationSettings.css';
import { useForm } from 'react-hook-form';
import settingsHTTPService from '../../../main/services/settingsHTTPService';
import showMessage from '../../../libraries/messages/messages';
import React, { useEffect, useState } from 'react';
import CurrentUser from '../../../main/configs/user';


const EditLocalisationSettings = () => {
  const { register, handleSubmit, errors } = useForm()
  const [localisationSettings, setLocalisationSettings] = useState();

  useEffect(() => {
    getDLocalisationSettings()
  }, [])
  const handleInputChange = event => {
    const { name, value } = event.target;
    setLocalisationSettings({ ...localisationSettings, [name]: value });
  };

  const getDLocalisationSettings = () => {
    settingsHTTPService.getLocalisationSettings().then(data => {
      setLocalisationSettings(data.data[0])

    })
  }

  const onSubmit = (data) => {
    console.log(localisationSettings.id)
    settingsHTTPService.editLocalisationSettings(localisationSettings.id, data).then(data => {
      console.log(data)
      showMessage('Confirmation', CurrentUser.UPDATE_MSG, 'success')
    })
  }
  return (
    <div className="EditDashboardSettings">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group row">
          <label for="select2" class="col-4 col-form-label">Language</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={localisationSettings?.language} ref={register({ required: true })}
              id="select2" name="language" class="custom-select">

              <option value="English">English</option>

            </select>
          </div>
        </div>

        <div class="form-group row">
          <label for="select2" class="col-4 col-form-label">Currency</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={localisationSettings?.showCalendar} ref={register({ required: true })}
              id="select2" name="showCalendar" class="custom-select">

              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
        </div>

        <div class="form-group row">
          <label for="select2" class="col-4 col-form-label">Currency Symbol</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={localisationSettings?.currencySymbol} ref={register({ required: true })}
              id="select2" name="currencySymbol" class="custom-select">

              <option value="$">USD</option>

            </select>
          </div>
        </div>

        <div class="form-group row">
          <label for="select2" class="col-4 col-form-label">Date format</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={localisationSettings?.dateFormat} ref={register({ required: true })}
              id="select2" name="dateFormat" class="custom-select">

              <option value="dd/mm/yyyy">dd/mm/yyyy</option>

            </select>
          </div>
        </div>

        <div class="form-group row">
          <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary"><i class="far fa-save"></i>
              Save</button>
          </div>
        </div>


      </form>
    </div>
  )
}
EditLocalisationSettings.propTypes = {};

EditLocalisationSettings.defaultProps = {};

export default EditLocalisationSettings;
