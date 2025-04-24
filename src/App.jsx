
import { Provider } from 'react-redux'
import Body from './components/Body'
import appStore from './utils/appStore'
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from './components/Login';
import Browse from './components/Browse'
import Error from './components/Error';



function App() {


  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children:[
      {    
        path: '/',
        element: <Login />},
      {
        path: '/browse',
        element: <Browse />
      }
    ]
  },
  ,
  {
    path: '/error',
    element: <Error />
  }
  ])


export default App
