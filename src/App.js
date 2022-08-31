import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className=" bg-[#090E34]">
      <Header />
      <Dashboard />
      <Footer/>
    </div>
  );
}

export default App;
