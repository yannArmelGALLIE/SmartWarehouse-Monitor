import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/authentication/login";

const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route path="/auth/login" element={ <Login /> } />
                <Route path="*" element={ <Navigate to="/auth/login" /> } />
            </Routes>
        </Router>
    )
}

export default AppRoutes;
