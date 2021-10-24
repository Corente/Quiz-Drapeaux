import React from 'react';
import  { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active" >
                Accueil
            </NavLink>
            <NavLink exact to="Classement" activeClassName="nav-active" >
                Classement
            </NavLink>
            <NavLink exact to="Quizz" activeClassName="nav-active" >
                Quizz
            </NavLink>
            <NavLink exact to="a-propos" activeClassName="nav-active" >
                A propos
            </NavLink>
        </div>
    );
};

export default Navigation;