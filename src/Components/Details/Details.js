import React, { useContext } from 'react';
import { faBook, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, useParams } from 'react-router-dom';
import { employeeContext } from '../../App';

const Details = () => {
    const { DetailsId } = useParams();

    const [employee] = useContext(employeeContext);

    const detailsEmp = employee.filter(employee => employee.id.toString() === DetailsId);

    return (
        <div className="py-5 my-5">
            <div>
                <h1>Employee Details</h1>
            </div>
            <div className="d-flex justify-content-between mt-4">
                <Link to="/add">
                    <button type="button" className="btn btn-outline-primary px-5 ">
                        <FontAwesomeIcon icon={faPlus} className="mx-1" />
                        Add new employee
                    </button>
                </Link>
                <Link to="/">
                    <button type="button" className="btn btn-primary px-5">
                        List of employees
                        <FontAwesomeIcon icon={faBook} className="mx-1" />
                    </button>
                </Link>
            </div>
            <div>
                <div className="mt-5 pt-4">
                    <p>
                        <span className="text-muted"> Full Name</span>
                        <p style={{ borderBottom: '1px solid black', width: '150px' }}>{detailsEmp[0].firstName + ' ' + detailsEmp[0].lastName}</p>
                    </p>

                    <p>
                        <span className="text-muted"> Email</span>
                        <p style={{ borderBottom: '1px solid black', width: '150px' }}>{detailsEmp[0].email}</p>
                    </p>
                    <br />
                    <br />
                </div>
                <Link to="/">
                    <button type="button" className="btn btn-primary px-5">
                        Edit Employee
                        <FontAwesomeIcon icon={faPenToSquare} className="mx-2" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Details;
