import React, { useEffect, useInsertionEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Sponsor.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import SponsorTestService from '../../../main/mocks/SponsorTestService';
import HTTPService from '../../../main/services/HTTPService';
import sponsorMessage from '../../../main/messages/sponsorMessage';
import EditSponor from '../EditSponsor/EditSponsor'
import AddSponsor from '../AddSponsor/AddSponsor';
import sponserHTTPService from '../../../main/services/sponserHTTPService';

const Sponsor = () => {
  const [sponsors, setSponsors] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonAdd = useRef(null);
  const closeButtonEdit = useRef(null);

  useEffect(() => {
    LoadJS()
    // retrieveSponsors()
    getAll()
  }, []);

  const closeModalAdd = (data) => {
    getAll()
    closeButtonAdd.current.click()
  }

  const closeModalEdit = (data) => {
    getAll()
    closeButtonEdit.current.click()
  }


  const getAll = () => {
    sponserHTTPService.getAll()
      .then(response => {
        setSponsors(response.data);
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



  const retrieveSponsors = () => {
    var sponsors = SponsorTestService.getAll();
    setSponsors(sponsors);
  };

  const resfresh = () => {
    retrieveSponsors()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Are you sure you want to delete ?");
    if (r) {
      /* showMessage('Confirmation', sponsorMessage.delete, 'success')
      SponsorTestService.remove(data) */
      sponserHTTPService.remove(data.id).then(() => {
        showMessage('Confirmation', sponsorMessage.delete, 'success')
        getAll()
      })

    }

  }



  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
  }

  return (
    <div className="card">
      <div className="card-header">
        <strong className="card-title"><i class="menu-icon fa fa-phone"></i> Sponsors</strong>
      </div>
      <div className="card-body">
        <button data-toggle="modal" data-target="#addSponsor" type="button" className="btn btn-success btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Create</button>

        <table id="bootstrap-data-table" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Telephone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sponsors.map(item =>
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.website}</td>
                <td>{item.telephone}</td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#editSponsor" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, item)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>
              </tr>
            )}
          </tbody>
          <tfoot><tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>telephone</th>
            <th>Actions</th>
          </tr></tfoot>

        </table>

        <div class="modal fade" id="addSponsor" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddSponsor closeModal={closeModalAdd} />
              </div>
              <div class="modal-footer">
                <button ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="editSponsor" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <EditSponor sponsor={updatedItem} closeModal={closeModalEdit} />
              </div>
              <div class="modal-footer">
                <button ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="viewSponsor" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

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

Sponsor.propTypes = {};

Sponsor.defaultProps = {};

export default Sponsor;
