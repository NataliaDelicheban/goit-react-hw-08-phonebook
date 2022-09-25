import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoute from "components/PublicRoute/PublicRoute";

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>....Load page</p>}>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<ContactsPage />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default UserRoutes;