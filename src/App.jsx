import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'


const Home = lazy(() => import("./Pages/Home"));
const Lp = lazy(() => import("./Pages/Lp"));

const router = createBrowserRouter([
  {path: '/', element: <Lp />},
  {path: '/home', element: <Home />},
])


function App() {

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ textAlign: "center", margin: "2rem auto" }}>
            Loading...
          </h1>
        </div>
      }
    >
      <RouterProvider router={router} /> 
    </Suspense>
  )
}

export default App
