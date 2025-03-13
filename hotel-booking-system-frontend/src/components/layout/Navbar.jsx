import React from "react";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={"navbar navbar-expand-lg bg-body-tertiary px-5 shadow mt-5 sticky-top"}>
            <div className={"container-fluid"}>
                <Link to={"/"}>
                    <span className={"hotel-color"}> Mount Hotel </span>
                </Link>
                <button
                    className={"navbar-toggler"}
                    type={"button"}
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls={"navbarScroll"}
                    aria-expanded={"false"}
                    aria-label={"Toggle navigation"}
                >
                    <span className={"navbar-toggler-icon"}></span>
                </button>
                <div className={"collapse navbar-collapse"} id={"navbarScroll"}>
                    <ul className={"navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"}>
                        <li className={"nav-item"}>
                            <NavLink className={"nav-link"}  to={"/browse-all-rooms"}>
                                Browse all rooms
                            </NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink to={"/manage-all-rooms"} className={"nav-link"} >
                                Manage rooms
                            </NavLink>
                        </li>
                    </ul>

                    <ul className={"d-flex navbar-nav"}>
                        <li className={"nav-item"}>
                            <NavLink className={"nav-link"} to={"/find-booking"}>
                                Find My Booking
                            </NavLink>
                        </li>

                        <li className={"nav-item dropdown"}>
                            <a className={"nav-link dropdown-toggle"} href={"#"} id={"navbarDropdown"} role={"button"} data-bs-toggle={"dropdown"} aria-expanded={"false"}>
                                Account
                            </a>
                            <ul className={"dropdown-menu"} aria-labelledby={"navbarDropdown"}>
                                <li>
                                    <Link to={"/login"} className={"dropdown-item"}>
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/profile"} className={"dropdown-item"}>
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/logout"} className={"dropdown-item"}>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
