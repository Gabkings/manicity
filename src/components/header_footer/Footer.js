import React, { Component } from 'react'
import Icons from '../utils/Icons'

export default class componentName extends Component {
    render() {
        return (
            <footer className="bck_blue">
                <div className="footer_logo">
                    <Icons width="70px" height="70px" link={true} linkTo="/" />
                </div>
                <div className="footer_discl">
                    Manchester city 2018. All rights reserved
                </div>

            </footer>
        )
    }
}
