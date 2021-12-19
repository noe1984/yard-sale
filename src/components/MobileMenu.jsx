import React from 'react';
import '../styles/MobileMenu.scss';

const MobileMenu = () => {
    return (
        <div className="mobile-menu">
            <ul>
                <li>
                    <p>CATEGORIES</p>
                </li>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Other</a>
                </li>
                </ul>

                <ul>
                <li>
                    <a href="/account">My account</a>
                </li>
                </ul>

                <ul>
                <li>
                    <a href="/account" className="email">platzi@example.com</a>
                </li>
                <li>
                    <a href="/signup" className="sign-out">Sign out</a>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;