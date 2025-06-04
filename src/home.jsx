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
          <Card 
            title="Card 1"
            text="LoremLorem ipsum dolor sit, amet consectetur adipisicing elit. Sit soluta quia laboriosam et fuga!"
            image="https://via.placeholder.com/150"
            button="Find out More!"
          />
          <Card 
            title="Card 2"
            text="LoremLorem ipsum dolor sit, amet consectetur adipisicing elit. Sit soluta quia laboriosam et fuga!"
            image="https://via.placeholder.com/150"
            button="Find out More!"
          />
          <Card 
            title="Card 3"
            text="LoremLorem ipsum dolor sit, amet consectetur adipisicing elit. Sit soluta quia laboriosam et fuga!"
            button="Find out More!"
          />
          <Card 
            title="Card 4"
            text="LoremLorem ipsum dolor sit, amet consectetur adipisicing elit. Sit soluta quia laboriosam et fuga!"
            image="https://via.placeholder.com/150"
            button="Find out More!"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
