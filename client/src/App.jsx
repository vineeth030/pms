import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import GuestLayout from './pages/layouts/GuestLayout'
import DashboardLayout from './pages/layouts/DashboardLayout'

const router = createBrowserRouter([
  {
    path:'/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
