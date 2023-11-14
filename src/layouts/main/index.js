import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/header";

function Main() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/drivers");
  }, []);

  return (
    <>
      <Header />
      <div className="mt-12 px-10">
        <Outlet />
      </div>
    </>
  );
}

export default Main;
