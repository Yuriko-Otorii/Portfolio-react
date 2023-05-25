import { createContext, lazy, Suspense, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

const Home = lazy(() => import("./Pages/Home"));
const Lp = lazy(() => import("./Pages/Lp"));

export const TransitionState = createContext()

const router = createBrowserRouter([
  {path: '/', element: <Lp />},
  {path: '/home', element: <Home />},
])

function App() {
const [isTransition, setIsTransition] = useState(false)
const transitionValue = { isTransition, setIsTransition }

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
      <TransitionState.Provider value={transitionValue}>
        <RouterProvider router={router} />
      </TransitionState.Provider>
    </Suspense>
  )
}

export default App
