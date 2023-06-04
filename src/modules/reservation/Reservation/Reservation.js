import React, { useEffect, useInsertionEffect, useRef, useState } from 'react';
import { LoadJS } from '../../../libraries/datatables/datatables';

import './Reservation.css';
import AddReservation from '../AddReservation/AddReservation';
import bookingHTTPService from '../../../main/services/bookingHTTPService';
import showMessage from '../../../libraries/messages/messages';
import eventMessage from '../../../main/messages/eventMessage';
import eventHTTPService from '../../../main/services/eventHTTPService';



const Reservation = () => {

  const [bookings, setbookings] = useState([]);
  const [events, setEvents] = useState([]);
  const closeButtonAdd = useRef(null);

  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
    getAll()

  }, []);

  const getAll = () => {
    bookingHTTPService.getAll().then(data => {
      setbookings(data.data)
    })
  }

  const closeModalAdd = (data) => {
    //getAll()
    bookingHTTPService.getAll().then(data => {
      setbookings(data.data)
    })
    closeButtonAdd.current.click()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Are you sure ?");
    if (r) {

      bookingHTTPService.remove(data.id).then(() => {
        showMessage('Confirmation', eventMessage.delete, 'success')
        getAll()
      })
      //removeOne(data)

    }

  }

  return (
    <div className="card">
      <div className="card-header">
        <strong className="card-title"><i class="menu-icon fa fa-map-pin"></i> Bookings</strong>
      </div>
      <div className="card-body">
        <button data-toggle="modal" data-target="#addReservation" type="button" className="btn btn-success btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Create</button>

        <table id="bootstrap-data-table" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>User</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(item =>
              <tr>
                <td>{item.event}</td>
                <td>{item.user}</td>
                <td><span className="badge badge-info">{item.payment}</span></td>
                <td>
                  {/* <button type="button" data-toggle="modal" data-target="#editEvent" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button> */}
                  <button onClick={e => remove(e, item)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>
              </tr>
            )}


          </tbody>
          <tfoot>
            <tr>
              <th>Event</th>
              <th>Users</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>

        <div class="modal fade" id="addReservation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddReservation closeModal={closeModalAdd} />
              </div>
              <div class="modal-footer">
                <button ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
  )
};

Reservation.propTypes = {};

Reservation.defaultProps = {};

export default Reservation;
