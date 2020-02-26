import React from 'react';

const Header = (props)=> (
    <nav style={{background: "blue", color: "yellow"}} className={"navbar navbar-default sticky-top"}>
        <div className={"container"}>
            <div>X-Men Clickly Game!</div>
            <div>score: {props.score}</div>
            <div>Top score: {props.topScore}</div>

        </div>
    </nav>
);

export default Header;