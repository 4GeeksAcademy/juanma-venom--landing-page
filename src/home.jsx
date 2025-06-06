import React from "react";
import Navbar from "./component/navbar";
import Jumbotron from "./component/jumbotron";
import Card from "./component/card";
import Footer from "./component/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Jumbotron />
        <div className="row mt-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
