import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Network, Urls } from "../../config";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Link to="/modal/a">
        <Button className="btn btn-primary mr-3">Open modal A</Button>
      </Link>
      <Link to="/modal/b">
        <Button>Open modal B</Button>
      </Link>
    </div>
  );
};

export default Home;
