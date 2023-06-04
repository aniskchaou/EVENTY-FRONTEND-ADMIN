import React, { useEffect, useRef, useState } from 'react';
import './Eventt.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditEvent from '../EditEvent/EditEvent';
import AddEvent from '../AddEvent/AddEvent';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import eventMessage from '../../../main/messages/eventMessage';
import EventTestService from '../../../main/mocks/EventTestService';
import HTTPService from '../../../main/services/HTTPService';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import eventHTTPService from '../../../main/services/eventHTTPService';
const deleteTask = () => {
  return window.confirm("Êtes-vous sûr de vouloir supprimer cette tache ?")
}
const Eventt = () => {
  const [events, setEvents] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonAdd = useRef(null);
  const closeButtonEdit = useRef(null);

  useEffect(() => {
    LoadJS()
    //retrieveEvents()
    getAll()
  }, []);


  const getAll = () => {
    eventHTTPService.getAll()
      .then(response => {
        setEvents(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeOne = (data) => {
    HTTPService.remove(data)
      .then(response => {

      })
      .catch(e => {

      });
  }



  const retrieveEvents = () => {
    var events = EventTestService.getAll();
    setEvents(events);
  };

  const resfresh = () => {
    retrieveEvents()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Are you sure ?");
    if (r) {
      showMessage('Confirmation', eventMessage.delete, 'success')
      eventHTTPService.remove(data.id).then(() => {
        getAll()
      })
      //removeOne(data)

    }

  }

  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
  }

  const closeModalAdd = (data) => {
    getAll()
    closeButtonAdd.current.click()
  }

  const closeModalEdit = (data) => {
    getAll()
    closeButtonEdit.current.click()
  }

  return (
    <div className="card">
      <div className="card-header">
        <strong className="card-title"><i class="menu-icon fa fa-calendar-alt"></i> Events</strong>
      </div>
      <div className="card-body">
        <button type="button" data-toggle="modal" data-target="#addTask" className="btn btn-success btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Create</button>

        <table id="bootstrap-data-table" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Organiser</th>
              <th>Event Name</th>
              <th>Date</th>
              <th>Start</th>
              <th>End</th>
              <th>Sponsor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {events.map(item =>
              <tr>
                <td>{item.organiser}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td><span className="badge badge-info">{item.sponsor}</span></td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#editEvent" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, item)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>
              </tr>
            )}


          </tbody>
          <tfoot><tr>
            <th>Organiser</th>
            <th>Event Name</th>
            <th>Date</th>
            <th>Start</th>
            <th>End</th>
            <th>Sponsor</th>
            <th>Actions</th>
          </tr></tfoot>
        </table>

        <div class="modal fade" id="addTask" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddEvent closeModal={closeModalAdd} />
              </div>
              <div class="modal-footer">
                <button ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="editEvent" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <EditEvent event={updatedItem} closeModal={closeModalEdit} />
              </div>
              <div class="modal-footer">
                <button ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="addTask" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">View</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <EditEvent event={updatedItem} />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

Eventt.propTypes = {};

Eventt.defaultProps = {};

export default Eventt;
