import { faPenToSquare, faSquarePollHorizontal, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { employeeContext } from '../../App';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EmployeeList = () => {
    const [employee] = useContext(employeeContext);
    const [isDelete, setIsDelete] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [employeeId, setEmployeeId] = useState(null);

    const handleShow = id => {
        // if (isDelete) deleteEmployee(id);
        setEmployeeId(id);
        setShow(true);
        // console.log(employeeId);
    };
    const handleDelete = () => {
        setIsDelete(true);
        setShow(false);
        for (let i = 0; i < employee.length; i++) {
            if (employee[i].id === employeeId) {
                employee.splice(i, 1);
            }
        }
    };

    useEffect(() => {}, [employee, show, isDelete]);
    return (
        <div className="py-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                            <td className="">
                                <Link to={`/update/${emp.id}`}>
                                    <button type="button" className="btn btn-primary mx-2">
                                        Edit
                                        <FontAwesomeIcon icon={faPenToSquare} className="mx-2" />
                                    </button>
                                </Link>
                                <Link to={`/details/${emp.id}`}>
                                    <button type="button" className="btn btn-primary mx-2">
                                        Details
                                        <FontAwesomeIcon icon={faSquarePollHorizontal} className="mx-2" />
                                    </button>
                                </Link>
                                <button type="button" className="btn btn-dark mx-2" onClick={() => handleShow(emp.id)}>
                                    Delete
                                    <FontAwesomeIcon icon={faTrashCan} className="mx-2" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* modal */}
            <Modal show={show} onHide={handleClose} className="d-flex justify-content-center align-items-center">
                <Modal.Body className="text-center">Are you sure ,you want delete this employee</Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <div className="w-100 d-flex justify-content-center" onClick={() => setIsDelete(true)}>
                        <Button variant="primary" onClick={handleDelete} className="w-50">
                            Yes
                        </Button>
                    </div>

                    <Button variant="secondary" onClick={handleClose} className="w-50">
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EmployeeList;
