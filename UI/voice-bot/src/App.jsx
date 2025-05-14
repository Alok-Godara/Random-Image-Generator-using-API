import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardHolder from "./components/CardHolder";
import Picsum from "./components/Picsum";
// import Main from "./components/Main";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Picsum />
        <CardHolder />
        {/* <Main /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
