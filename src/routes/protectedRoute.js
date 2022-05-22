import { Navigate, Route } from "react-router-dom"

export const ProtectedRoute = ({ element, path }) => {

    const token = sessionStorage.getItem('qqrv')

    return token ? <Route path={path} element={element} /> : <Navigate to="/" />
}