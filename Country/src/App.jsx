import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { About } from './pages/About';
import { Country } from './pages/Country';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { AppLayout } from './components/Layout/AppLayout';
import { ErrorPage } from './pages/ErrorPage';
import { CountryDetails } from './components/Layout/CountryDetails';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>  
        },{
          path:"About",
          element:<About/>  
        },
        {
          path:"Country",
          element:<Country/>  
        },
        {
          path: "country/:id",
          element: <CountryDetails />,
        },
        {
          path:"Contact",
          element:<Contact/>  
        }
      ]
    }

  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
