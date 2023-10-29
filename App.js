import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (<h1 id="heading" className="heading" >
    I learn Namaste React
    </h1>);

// React Component

const HeaderLogo = () => (
    <div className="logo">
        <img src="/images/logo.png"></img>
    </div>
)

const UserIcon = () => (
    <div className="user-icon">
        <img src="/images/user-icon.png" />
    </div>
)

const HeaderSearchBar = () => (
    <div className="searchbar">
        <label className="searchbar"></label>
        <input type="text"></input>
    </div>
)

const HeadingComponent = () => (
    <div className="header">
        <HeaderLogo />
        <HeaderSearchBar />
        <UserIcon />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);