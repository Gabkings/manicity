import React from 'react'
import HomeMatches from './Blocks'
import { Tag } from '../../utils/minsc'
function MatchesHome() {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag 
                bck="#0e1731"
                color="#ffffff"
                size="50px"
                >
                    Matches
                    </Tag>

                <HomeMatches/>

                <Tag 
                bck="#ffffff"
                color="#0e1731"
                size="22px"
                link={true}
                linkto="/the_team"
                >
                    See more matches
                    </Tag>
            </div>
        </div>
    )
}

export default MatchesHome
