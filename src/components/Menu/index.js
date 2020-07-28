import React from 'react';
import Logo from '../../assets/img/underflix.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Underflix"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Nova coisa
            </Button>            
        </nav>
    );
}

export default Menu;