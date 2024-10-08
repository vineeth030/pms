import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import GuestLayout from './pages/layouts/GuestLayout'
import DashboardLayout from './pages/layouts/DashboardLayout'
import Patient from './pages/Patient'
import Patients from './pages/Patients'
import Reports from './pages/Reports'
import Appointments from './pages/Appointments'

const router = createBrowserRouter([
  {
    path:'/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/patients',
        element: <Patients />
      },
      {
        path: '/reports',
        element: <Reports />
      },
      {
        path: '/appointments',
        element: <Appointments />
      },
      {
        path: '/patient/:id',
        element: <Patient />
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
