import React from 'react'
import Navbar from "./Navbar";
import Slogan from "./Slogan"
import Card from "./Card";
import Vision from "./Vision";
import Footer from "./Footer"



export default function Home() {
    return (
        <div>
            <Slogan />
            <Navbar />
            <Vision />
            <Card />
            <Footer />
        </div>
    )
}
