import { Routes, Route } from "react-router-dom";

import Login from "../pages/admin/Login";

import Dashboard from "../pages/admin/Dashboard";


function RoutesIndex() {
    return (
        <Routes>
            {/* route "/admin/login" */}
            <Route path="/" element={<Login />} />

             {/* route "/admin/dashboard" */}
             <Route path="/dashboard" element={<Dashboard />} />


        </Routes>
    )
}

export default RoutesIndex;