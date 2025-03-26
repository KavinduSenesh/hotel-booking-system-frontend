import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import AddRoom from './components/room/AddRoom';
import ExistingRooms from './components/room/ExistingRooms';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import EditRoom from "./components/room/EditRoom.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createPopper } from "@popperjs/core";
import Footer from "./components/layout/Footer.jsx";
window.Popper = { createPopper };
import "./index.css"
import RoomListing from "./components/room/RoomListing.jsx";
import Admin from "./components/admin/Admin.jsx";
import Checkout from "./components/bookings/Checkout.jsx";
import BookingSuccess from "./components/bookings/BookingSuccess.jsx";
import Bookings from "./components/bookings/Bookings.jsx";


function App() {

  return (
    <>
      <main>
          <Router>
              <Navbar/>
              <Routes>
                  <Route path={"/"} element={<Home />} />
                  <Route path={"/edit-rooms/:roomId"} element={<EditRoom />} />
                  <Route path={"/existing-rooms"} element={<ExistingRooms />} />
                  <Route path={"/add-room"} element={<AddRoom />} />
                  <Route path={"/book-room/:roomId"} element={<Checkout/>} />
                  <Route path={"/browse-all-rooms"} element={<RoomListing />} />
                  <Route path={"/admin"} element={<Admin />} />
                  <Route path={"/booking-success"} element={<BookingSuccess/>} />
                  <Route path={"/existing-bookings"} element={<Bookings/>} />
              </Routes>
          </Router>
          <Footer/>
      </main>
    </>
  )
}

export default App
