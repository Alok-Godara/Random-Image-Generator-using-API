import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardHolder from "../components/CardHolder";
import Picsum from "../components/Picsum";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Picsum />
        <CardHolder />
      </main>
      <Footer />
    </div>
  )
}

export default Home
