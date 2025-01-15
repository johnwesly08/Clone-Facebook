import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "../components/Dashboard";
import Register from "../components/Register";

const AppRouter = () => {

    const routes = [
        {path: '/', element: <DashBoard />},
        {path: '/dashboard', element: <DashBoard />},
        {path: '/register', element: <Register/>},
    ]
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;