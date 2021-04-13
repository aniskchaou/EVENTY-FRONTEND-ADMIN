import React, { useEffect, useState } from 'react';
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
const Sponsor = () => {
  const [sponsors, setSponsors] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveSponsors()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
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
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', sponsorMessage.delete, 'success')
      SponsorTestService.remove(data)
      resfresh()
    }

  }

  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
  }

  return (
    <div className="card">
      <div className="card-header">
        <strong className="card-title">Catégories</strong>
      </div>
      <div className="card-body">
        <table id="bootstrap-data-table" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sponsors.map(item =>
              <tr>
                <td>{item.sponsor_name}</td>
                <td><img src={item.sponsor_image} width="80" height="80" /></td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#editSponsor" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, sponsors.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>
              </tr>
            )}
          </tbody>
          <tfoot><tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Actions</th>
          </tr></tfoot>

        </table>
        <button data-toggle="modal" data-target="#addSponsor" type="button" className="btn btn-success btn-sm">Ajouter</button>

        <div class="modal fade" id="addSponsor" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddSponsor />
              </div>
              <div class="modal-footer">
                <button onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

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
                <EditSponor sponsor={updatedItem} />
              </div>
              <div class="modal-footer">
                <button onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

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
