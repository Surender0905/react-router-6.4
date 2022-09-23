import React from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An Error occured!</h1>
        <p>{error.message}</p>
      </main>
    </>
  );
};

export default Error;
