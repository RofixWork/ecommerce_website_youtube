import React from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>NotFound (404)</title>
        <meta name="description" content="this page not found [404]..." />
      </Helmet>
      NotFound
    </div>
  );
};

export default NotFound;
