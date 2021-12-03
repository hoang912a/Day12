import React from 'react'
import "./NavbarPublic.css"
import mainLogo from "../Logomain.png"
import { SearchOutlined } from '@ant-design/icons';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

const NavbarPublic = () => {

    return (
        <div className="navbar">

            <div className="Nav1">
                <img src={mainLogo} alt="Post" class="img_1"></img>
            </div>

            <div className="Nav2">
                <ul className="Ul1">
                    <li className="Li1">
                        <Link className='linkOne' to = "/about">About
                        </Link></li>
                    <li className="Li1">
                    <Link className='linkOne' to = "/trynow">Try now
                        </Link>
                    </li>
                    <li className="Li1">
                    <Link className='linkOne' to = "/help">help
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="Nav3">
                <input placeholder='Start your search'></input>
                <button className="btn_form1"><SearchOutlined style={{ fontSize: '26px', color: '#08c', padding: "2px" }} /></button>
            </div>

            <div className="Nav4">
                <ul className="Ul2">
                    <li className="Li2">Tiếng Việt</li>
                    <li className="Li2">
                        <Link className='linkOne' to = "/register">
                        Register
                        </Link></li>

                    <button>Login</button>
                </ul>
            </div>

        </div>
    )
}

export default NavbarPublic

