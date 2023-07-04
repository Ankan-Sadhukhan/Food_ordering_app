import React from "react";
import ReactDOM from "react-dom/client";



const Heading = ()=>(
    <div className="nav">
        <a href="/">
            <img className="logo" alt="logo" src="https://www.f6s.com/content-resource/profiles/2214242_original.jpg"></img>
        </a>
        <div className="nav-items">
            <h4>Home</h4>
            <h4>About us</h4>
            <h4>contact</h4>
            <h4>Cart</h4>
        </div>

    </div>
);

const Body =()=>(
    <h2>body</h2>
)

const Footer =()=>(
    <h2>Footer</h2>
)

const Applayout=()=>(
    <>
        <Heading />
        <Body />
        <Footer />
    </>
)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);