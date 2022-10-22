import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { employeeContext } from '../../App';

const UpdateEmp = () => {
    const { id } = useParams();

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [employee] = useContext(employeeContext);
    const upEm = employee.find(employee => employee.id.toString() === id);
    console.log(upEm);
    const onSubmit = handleSubmit(data => {
        employee.filter(employee => {
            if (employee.id.toString() === id) {
                employee.firstName = data.firstName;
                employee.lastName = data.lastName;
                employee.email = data.email;
            }
        });

        reset();
        navigate('/');
    });
    return (
        <div className="container py-5 my-5">
            <h1>Edit Employee</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label> <br />
                    <input defaultValue={upEm.firstName} {...register('firstName', { required: true })} className="form-control w-50" placeholder="Write here" />
                    {/* errors will return when field validation fails  */}
                </div>
                <br />
                <div>
                    <label htmlFor="lastName">Last Name</label> <br />
                    <input defaultValue={upEm.lastName} {...register('lastName', { required: true })} className="form-control w-50" placeholder="Write here" />
                    {/* errors will return when field validation fails  */}
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email Address</label> <br />
                    <input defaultValue={upEm.email} {...register('email', { required: true })} className="form-control w-50" placeholder="Write here" />
                    {/* errors will return when field validation fails  */}
                </div>
                <br />
                <button type="submit" className="btn btn-primary w-50">
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateEmp;
