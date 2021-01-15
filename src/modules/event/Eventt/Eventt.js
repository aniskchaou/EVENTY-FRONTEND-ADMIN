import React, { useEffect } from 'react';

import './Eventt.css';
import AddEvent from './../../../components/AddEvent/AddEvent';
import EditEvent from './../../../components/EditEvent/EditEvent';
import { LoadJS } from './../../../components/init';

const deleteTask=()=>{
  return  window.confirm("Êtes-vous sûr de vouloir supprimer cette tache ?")
}

const Eventt = () => {
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
   
  }, []);
  
  return(
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Evenements</strong>
    </div>
    <div className="card-body">
      <table id="bootstrap-data-table" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Categorie</th>
            <th>Auteur</th>
            <th>Nom</th>
            
            <th>statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Culture</td>
            <td>Nathalie David</td>
            <td>La Fête du Citron</td>
            
            <td className="badge badge-success">Ouvert</td>
            <td><button type="button" data-toggle="modal" data-target="#viewTask" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
              <button type="button" data-toggle="modal" data-target="#editTask"class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
              <button type="button" class="btn btn-danger btn-sm" onClick={deleteTask}><i class="fas fa-trash-alt"></i></button></td>
          </tr>

          <tr>
            <td>Culture</td>
            <td>Saville Bussière</td>
            <td>La Saint-Vincent Tournante</td>
            
            <td className="badge badge-danger">Fermé</td>
            <td><button type="button" data-toggle="modal" data-target="#viewTask" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
              <button type="button" data-toggle="modal" data-target="#editTask"class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
              <button type="button" class="btn btn-danger btn-sm" onClick={deleteTask}><i class="fas fa-trash-alt"></i></button></td>
          </tr>

        </tbody>
        <tfoot><tr>
            <th>Categorie</th>
            <th>Auteur</th>
            <th>Nom</th>
            <th>statut</th>
            <th>Actions</th>
          </tr></tfoot>
      </table>
      <button  type="button" data-toggle="modal" data-target="#addTask" className="btn btn-success btn-sm">Ajouter</button>

      <div class="modal fade" id="addTask" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <AddEvent/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="addTask" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <EditEvent/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="addTask" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
)};

Eventt.propTypes = {};

Eventt.defaultProps = {};

export default Eventt;
