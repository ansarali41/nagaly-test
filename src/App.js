import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployee from './Components/AddEmployee/AddEmployee';
import { createContext, useState } from 'react';
import UpdateEmp from './Components/UpdateEmp/UpdateEmp';
import Details from './Components/Details/Details';
export const employeeContext = createContext();

function App() {
    const [employee, setEmployee] = useState([
        {
            id: 1,
            firstName: 'john',
            lastName: 'N',
            email: 'john@example.com',
        },
    ]);

    return (
        <employeeContext.Provider className="container" value={[employee, setEmployee]}>
            <div className="container">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/add" element={<AddEmployee />} />
                        <Route exact path="/update/:id" element={<UpdateEmp />} />
                        <Route exact path="/details/:DetailsId" element={<Details />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </employeeContext.Provider>
    );
}

export default App;
