import React from 'react';

const Header = (props)=> (
    <nav style={{background: "grey", color: "white"}} className={"navbar navbar-default sticky-top"}>
        <div className={"container"}>
            <div>score: {props.score}</div>
            <div>Top score: {props.topScore}</div>

        </div>
    </nav>
);

export default Header;