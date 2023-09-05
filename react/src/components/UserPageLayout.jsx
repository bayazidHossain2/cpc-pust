import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/contextProvider'
import Header from './Common/Header';
import Footer from './Common/Footer';

export default function UserPageLayout() {

    const [box, setBox] = useState(false);

    const closeBox = () => {
        setBox(false);
    }

    //   const { token } = useStateContext()
    //   if (token) {
    //     return <Navigate to="/" />
    //   }

    // Burger menus
    document.addEventListener('DOMContentLoaded', function () {
        // open
        const burger = document.querySelectorAll('.navbar-burger');
        const menu = document.querySelectorAll('.navbar-menu');

        if (burger.length && menu.length) {
            for (var i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function () {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        // close
        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');

        if (close.length) {
            for (var i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function () {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        if (backdrop.length) {
            for (var i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function () {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
    });

    return (
        <div>
            {/* Heading Section */}
            
            <Header />

            {/* End Header Section */}
            <h2>This is user page</h2>

            <div className=" w-full md:w-1/2 mt-8">

                <Outlet />
            </div>

            {/* Footer SEction */}
            <Footer />

        </div>
    )
}
