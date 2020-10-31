import React, { Component } from 'react'

import Stripes from '../../../Resources/images/stripes.png'

import {Tag} from '../../utils/minsc'
import HomeCards from './cards'
import Reveal from 'react-reveal/Reveal'

export default class MeetPlayer extends Component {
    state = {
        showAnimation: false
    }
    render() {
        return (
            <Reveal
            fraction="0.7"
             onReveal={()=>{this.setState({showAnimation:true})}}
            >
            <div className="home_meetplayers"
                style={{background:`#ffffff url(${Stripes})`}}
            >
                <div className="container">
                    <div className="home_meetplayers_wrapper">
                        <div className="home_card_wrapper">
                            <HomeCards show={this.state.showAnimation} />
                        </div>
                        <div className="home_text_wrapper">
                            <Tag bck="#0e1731"
                                size="100px"
                                color="#ffffff"

                                add={{
                                    display:"inline-block",
                                    marginBottom: "20px"
                                }}
                            >
                                Meet
                            </Tag>
                            <Tag bck="#0e1731"
                                size="80px"
                                color="#ffffff"

                                add={{
                                    display:"inline-block",
                                    marginBottom: "20px"
                                }}
                            >
                                The
                            </Tag>
                            <Tag bck="#0e1731"
                                size="80px"
                                color="#ffffff"

                                add={{
                                    display:"inline-block",
                                    marginBottom: "20px"
                                }}
                            >
                                Players
                            </Tag>
                            <div>
                            <Tag bck="#ffffff"
                                size="20px"
                                color="#0e1731"
                                link={true}
                                linkto="the_team"
                                add={{
                                    display:"inline-block",
                                    marginBottom: "27px",
                                    border: "1px solid #0e1731"
                                }}
                            >
                                Players
                            </Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
        )
    }
}
