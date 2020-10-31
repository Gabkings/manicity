import React from 'react'

import Featured from './featured/index'
import Matches from './matches/index'
import MeetPlayer from '../home/meetPlayers/index'

function Home() {
    return (
        <div className="bck_blue">
            <Featured />
            <Matches />
            <MeetPlayer/>
        </div>
    )
}

export default Home
