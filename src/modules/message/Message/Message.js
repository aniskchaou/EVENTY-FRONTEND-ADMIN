import React, { useEffect, useState } from 'react';

import { LoadJS } from '../../../libraries/datatables/datatables';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import categoryMessage from '../../../main/messages/categoryMessage';
import CategoryTestService from '../../../main/mocks/CategoryTestService';
import HTTPService from '../../../main/services/HTTPService';
import messageHTTPService from '../../../main/services/messageHTTPService';
import ViewMessage from '../ViewMessage/ViewMessage';



const deleteTask = () => {
    return window.confirm("Êtes-vous sûr de vouloir supprimer cette tache ?")
}

const Message = () => {
    const [messages, setMessages] = useState([]);
    const [updatedItem, setUpdatedItem] = useState({});
    const forceUpdate = useForceUpdate();


    useEffect(() => {
        LoadJS()
        //retrieveCategorys()
        getAll()
    }, []);


    const getAll = () => {
        messageHTTPService.getAll()
            .then(response => {
                setMessages(response.data);
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
        setMessages(categorys);
    };

    const resfresh = () => {
        retrieveCategorys()
        forceUpdate()
    }

    const remove = (e, data) => {
        e.preventDefault();
        var r = window.confirm("Are you sure you want to delete ?");
        if (r) {
            /*   showMessage('Confirmation', categoryMessage.delete, 'success')
              CategoryTestService.remove(data)
              //removeOne(data)
              resfresh() */
            messageHTTPService.remove(data.id).then(() => {
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
                <strong className="card-title"><i class="menu-icon fa fa-comments"></i> Messages</strong>
            </div>
            <div className="card-body">
                <table id="bootstrap-data-table" className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map(item =>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.subject}</td>
                                <td>
                                    <button onClick={e => update(e, item)} data-toggle="modal" data-target="#view" type="button" class="btn btn-info btn-sm"><i class="fas fa-eye"></i></button>
                                    <button onClick={e => remove(e, item)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>

                                </td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot><tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Actions</th>
                    </tr></tfoot>

                </table>

                <div class="modal fade" id="view" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">View</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <ViewMessage message={updatedItem} />
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

Message.propTypes = {};

Message.defaultProps = {};

export default Message;
