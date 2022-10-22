import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { employeeContext } from '../../App';

const AddEmployee = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [employee, setEmployee] = useContext(employeeContext);

    const onSubmit = handleSubmit(data => {
        // alert(JSON.stringify(data));
        const id = Date.now();
        data = { ...data, id: id };

        setEmployee([...employee, data]);
        reset();
        navigate('/');
    });
    return (
        <div className="container py-5 my-5">
            <h1>Add Employee</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label> <br />
                    <input {...register('firstName', { required: true })} className="form-control w-50" placeholder="Write here" />
                    {/* errors will return when field validation fails  */}
                </div>
                <br />
                <div>
                    <label htmlFor="lastName">Last Name</label> <br />
                    <input {...register('lastName', { required: true })} className="form-control w-50" placeholder="Write here" />
                    {/* errors will return when field validation fails  */}
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email Address</label> <br />
                    <input {...register('email', { required: true })} className="form-control w-50" placeholder="Write here" />
                    {/* errors will return when field validation fails  */}
                </div>
                <br />
                <button type="submit" className="btn btn-primary w-50">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddEmployee;
