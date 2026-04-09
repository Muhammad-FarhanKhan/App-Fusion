import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Service from "../components/Service";
import Aboutus from "../components/Aboutus";
import Project from "../components/Projects";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Service />
      <Aboutus />
      <Project />
      <Footer />
    </>
  );
};

export default Dashboard;
