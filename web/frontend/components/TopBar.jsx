import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuthenticatedFetch } from "../hooks";

export function TopBar() {
  let store = useAuthenticatedFetch();
  useEffect(() => {
    const fetchStoreInfo = async () => {
      try {
        const shopOrigin = window.location.origin; 
        const shopUrl = new URL(window.location.href);
        const shopParam = shopUrl.searchParams.get("shop"); 
  
        const response = await fetch(`/api/store/info?shop=${shopParam}`, {
          method: "GET",
          headers: { "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*"
           },
        });
        console.log(response);
  
        const res = await response.json();
        console.log("store info -----------", res);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchStoreInfo();
  }, []);
  return (
    <div className="topbar-section">
      <div className="logo-block">
        <img className="logo" src="../assets/logo.png" alt="logo image" />
        <h1 className="text-bold h5"> Dashboard</h1>
        <NavLink to="/products"> Products </NavLink>
      </div>
    </div>
  );
}
