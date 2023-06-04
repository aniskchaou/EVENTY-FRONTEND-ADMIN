import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages';
import CategoryTestService from '../../../main/mocks/CategoryTestService';
import categoryMessage from '../../../main/messages/categoryMessage';
import categoryValidation from '../../../main/validations/categoryValidation'
import categoryHTTPService from '../../../main/services/categoryHTTPService';

const ViewMessage = (props) => {
    const { register, handleSubmit, errors } = useForm() // initialise the hook
    const [message, setMessage] = useState(props.message);

    useEffect(() => {
        setMessage(props.message)
    }, [props.message]);


    const onSubmit = (data) => {

        categoryHTTPService.update(props.category.id, data).then(data => {
            showMessage('Confirmation', categoryMessage.edit, 'success')
            props.closeModal()
        })

    }



    return (
        <div className="AddCategory">
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <td>Email</td>
                        <td>Subject</td>
                        <td>Message</td>
                    </tr>
                    <tr>
                        <th scope="row">{message.name}</th>
                        <td>{message.email}</td>
                        <td>{message.subject}</td>
                        <td>{message.message}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

ViewMessage.propTypes = {};

ViewMessage.defaultProps = {};

export default ViewMessage;