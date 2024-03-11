import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import bgImage from "../assets/images/bg-sidebar-desktop.svg";

export default function Layout({ setStep }) {
  return (
    <div className="layout">
      <nav style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="container">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
          >
            <button className="formButton" onClick={e => e.preventDefault()}>1</button>
          </NavLink>
          <div>
            <p className="step">STEP 1</p>
            <h4 className="description">YOUR INFO</h4>
          </div>
        </div>
        <div className="container">
          <NavLink
            to="/2"
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
          >
            <button className="formButton" onClick={e => e.preventDefault()}>2</button>
          </NavLink>
          <div>
            <p className="step">STEP 2</p>
            <h4 className="description">SELECT PLAN</h4>
          </div>
        </div>
        <div className="container">
          <NavLink
            to="/3"
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
          >
            <button className="formButton" onClick={e => e.preventDefault()}>3</button>
          </NavLink>

          <div>
            <p className="step">STEP 3</p>
            <h4 className="description">ADD-ONS</h4>
          </div>
        </div>
        <div className="container">
          <NavLink
            to="/4"
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
          >
            <button className="formButton" onClick={e => e.preventDefault()}>4</button>
          </NavLink>
          <div>
            <p className="step">STEP 4</p>
            <h4 className="description">SUMMARY</h4>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
