import React from 'react';
import CSS from 'csstype';
import BlogDetail from '../BlogDetail/BlogDetail';

export interface SideNavProps {
    children?: JSX.Element[] | JSX.Element
}

const sideNavStyle: CSS.Properties = {
    height: '100%',
    width: '200px',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: '#111',
    overflowX: 'hidden',
    paddingTop: '20px',
};

const linkStyle = {
    padding: '6px 6px 6px 32px',
    textDecoration: 'none',
    fontSize: '25px',
    color: '#818181',
    display: 'block',
};

const mainStyle = {
    marginLeft: '200px', /* Same as the width of the sidenav */
};


function SideNav() {
    return (
        <div
            className="SideNav"
            style={sideNavStyle}
        >
            <a href="#"
               style={linkStyle}
            >
                Profile
            </a>
            <a
                href="#"
                style={linkStyle}
            >
                Posts
            </a>
            <a
                href="#"
                style={linkStyle}
            >
                Contact
            </a>
            <div
                className="main"
                style={mainStyle}
            >
                <h2>블로그</h2>
                <BlogDetail></BlogDetail>
            </div>
        </div>
    );
}

export default SideNav;

