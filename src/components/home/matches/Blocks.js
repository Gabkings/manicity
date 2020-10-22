import React, { Component } from 'react'

import {matches } from '../../../firebase'

import MatchesBlock from '../../utils/matches_block'

import {firebaseLooper, reverseArray} from '../../utils/minsc'

import Slide from 'react-reveal/Slide'

export default class HomeMatches extends Component {
    state = {
        matches : []
    }

    componentDidMount(){
        matches.limitToLast(6).once("value").then((snapshot) =>{
            const matches = firebaseLooper(snapshot)
            this.setState({
                matches: reverseArray(matches)
            })
        })
    }

    showMatches = (matches) =>(
        matches ? matches.map((match) =>(
            <Slide bottom key={match.id}>
                <div className="item">
                <div className="wrapper">
                    <MatchesBlock match={match} />
                </div>
            </div>
            </Slide>
        )):null
    )
    render() {
        console.log(this.state.matches)
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        )
    }
}
