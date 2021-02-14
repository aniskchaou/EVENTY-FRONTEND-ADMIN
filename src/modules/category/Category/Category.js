import React, { useEffect, useState } from 'react';
import './Category.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditCategory from '../EditCategory/EditCategory';
import AddCategory from '../AddCategory/AddCategory';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import categoryMessage from '../../../main/messages/categoryMessage';
import CategoryTestService from '../../../main/mocks/CategoryTestService';
import HTTPService from '../../../main/services/HTTPService';



const deleteTask = () => {
  return window.confirm("Êtes-vous sûr de vouloir supprimer cette tache ?")
}

const Category = () => {
  const [categorys, setCategorys] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveCategorys()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setCategorys(response.data);
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



  const retrieveCategorys = () => {
    var categorys = CategoryTestService.getAll();
    setCategorys(categorys);
  };

  const resfresh = () => {
    retrieveCategorys()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', categoryMessage.delete, 'success')
      CategoryTestService.remove(data)
      //removeOne(data)
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
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {categorys.map(item =>
              <tr>
                <td>{item.category_name}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#editCategory" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                  <button onClick={e => remove(e, categorys.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>
              </tr>
            )}

            <tr>
              <td>Séminaire</td>
              <td>Séminaire</td>
              <td><button type="button" data-toggle="modal" data-target="#viewCategory" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
                <button type="button" data-toggle="modal" data-target="#editCategory" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger btn-sm" onClick={deleteTask}><i class="fas fa-trash-alt"></i></button></td>
            </tr>
            <tr>
              <td>Conférence et congrès</td>
              <td>Conférence et congrès</td>
              <td><button type="button" data-toggle="modal" data-target="#viewCategory" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
                <button type="button" data-toggle="modal" data-target="#editCategory" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger btn-sm" onClick={deleteTask}><i class="fas fa-trash-alt"></i></button></td>
            </tr>

            <tr>
              <td>Lancement de produit</td>
              <td>Lancement de produit</td>
              <td><button type="button" data-toggle="modal" data-target="#viewCategory" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
                <button type="button" data-toggle="modal" data-target="#editCategory" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger btn-sm" onClick={deleteTask}><i class="fas fa-trash-alt"></i></button></td>
            </tr>

          </tbody>
          <tfoot><tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Actions</th>
          </tr></tfoot>

        </table>
        <button data-toggle="modal" data-target="#addCategory" type="button" className="btn btn-success btn-sm">Ajouter</button>

        <div class="modal fade" id="addCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddCategory />
              </div>
              <div class="modal-footer">
                <button onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="editCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <EditCategory />
              </div>
              <div class="modal-footer">
                <button onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="viewCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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

Category.propTypes = {};

Category.defaultProps = {};

export default Category;
