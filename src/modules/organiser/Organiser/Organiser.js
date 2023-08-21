import React, { useEffect, useInsertionEffect, useRef, useState } from 'react';

import { LoadJS } from '../../../libraries/datatables/datatables';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import categoryMessage from '../../../main/messages/categoryMessage';
import CategoryTestService from '../../../main/mocks/CategoryTestService';
import HTTPService from '../../../main/services/HTTPService';
import AddOrganiser from '../AddOrganiser/AddOrganiser';
import organiserHTTPService from '../../../main/services/organiserHTTPService';
import EditOrganiser from '../EditOrganiser/EditOrganiser';


const deleteTask = () => {
    return window.confirm("Êtes-vous sûr de vouloir supprimer cette tache ?")
}

const Organiser = () => {
    const [categorys, setCategorys] = useState([]);
    const [updatedItem, setUpdatedItem] = useState({});
    const forceUpdate = useForceUpdate();
    const closeButtonAdd = useRef(null);
    const closeButtonEdit = useRef(null);

    useEffect(() => {
        LoadJS()
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
        organiserHTTPService.getAll()
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



    const remove = (e, data) => {
        e.preventDefault();
        var r = window.confirm("Are you sure you want to delete ?");
        if (r) {
            /* showMessage('Confirmation', categoryMessage.delete, 'success')
            CategoryTestService.remove(data)
            //removeOne(data)
            resfresh() */
            organiserHTTPService.remove(data.id).then(() => {
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
                <strong className="card-title"><i class="menu-icon fa fa-hand-rock-o"></i> Organisers</strong>
            </div>
            <div className="card-body">
                <button data-toggle="modal" data-target="#addCategory" type="button" className="btn btn-success btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Create</button>

                <table id="bootstrap-data-table" className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorys.map(item =>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#editCategory" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                                    <button onClick={e => remove(e, item)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot><tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Telephone</th>
                        <th>Actions</th>
                    </tr></tfoot>

                </table>

                <div class="modal fade" id="addCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <AddOrganiser closeModal={closeModalAdd} />
                            </div>
                            <div class="modal-footer">
                                <button ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

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
                                <EditOrganiser organiser={updatedItem} closeModal={closeModalEdit} />
                            </div>
                            <div class="modal-footer">
                                <button ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

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

Organiser.propTypes = {};

Organiser.defaultProps = {};

export default Organiser;
