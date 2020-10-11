import React, { Component } from 'react'

import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Icons from '../utils/Icons'
export default class Header extends Component {
    render() {
        return (
            <AppBar 
                position="fixed"
                style={{boxShadow:"none", padding: "10px 0", backgroundColor: "#98c5e9", borderBottom:"2px solid #00285e"}}
            >
                <ToolBar style={{display:"flex"}}>
                    <div style={{flexGrow: 1}}>
                        <div className="header_logo">
                            <Icons link="true" linkTo="/" width="70px" height="70px" />
                        </div>
                    </div>

                    <Link to="/the_team">
                        <Button color="inherit">Team</Button>
                    </Link>

                    <Link to="/the_matches">
                        <Button color="inherit">Matches</Button>
                    </Link>
                </ToolBar>
            </AppBar>
        )
    }
}
