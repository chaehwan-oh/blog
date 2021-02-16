import React from 'react';
import CSS from 'csstype';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BlogDetail from '../BlogDetail/BlogDetail';
import {Menu} from "../../App";

export interface SideNavProps {
    menus: Menu[]
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


function SideNav(props: SideNavProps) {
    const publicUrl = process.env.PUBLIC_URL;

    return (
        <div className="SideNav" style={sideNavStyle}>
            <Router>
                <ul>
                    {props.menus.map((menu: Menu, idx: number) => {
                        return <li key={idx}><Link to={publicUrl + '/' + menu.path}>{menu.label}</Link> </li>
                    })}
                </ul>
                <div className="main"
                     style={mainStyle}>
                    <Switch>
                        {props.menus.map((route, index) => (
                            <Route
                                key={index}
                                path={publicUrl + route.path}
                                exact={route.exact}
                                children={<route.component/>}
                            />
                        ))}
                    </Switch>
                    무야호..
                </div>
            </Router>
        </div>);
}

export default SideNav;

