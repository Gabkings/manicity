import React from 'react'

import Featured from './featured/index'
import Matches from './matches/index'
import MeetPlayer from '../home/meetPlayers/index'
import Promation from './promotion/index'

function Home() {
    return (
        <div className="bck_blue">
            <Featured />
            <Matches />
            <MeetPlayer/>
            <Promation />
        </div>
    )
}

export default Home
