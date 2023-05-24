import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

const Home = lazy(() => import("./Pages/Home"));
const Lp = lazy(() => import("./Pages/Lp"));

const router = createBrowserRouter([
  {path: '/home', element: <Home />},
  {path: '/lp', element: <Lp />},
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
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          <h1 style={{ textAlign: "center", margin: "2rem auto" }}>
            Loading...
          </h1>
        </svg>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
