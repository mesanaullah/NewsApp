import { useState } from 'react'
import Navbar from "./components/Navbar"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {

  return (
    <>
      <div className=" navbar px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
        <Navbar />
      </div>
    </>
  )
}

export default App
