import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import EmployeeList from '../EmployeeList/EmployeeList';

const Home = () => {
    return (
        <div className="py-5 my-5">
            <div>
                <h1>Employee List</h1>
            </div>
            <Link to="/add">
                <button type="button" className="btn btn-outline-primary">
                    <FontAwesomeIcon icon={faPlus} className="mx-1" />
                    Add new employee
                </button>
            </Link>
            <EmployeeList />
        </div>
    );
};

export default Home;
