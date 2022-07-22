import React from "react";
import TeamInfo from "./TeamInfo";
import './Team.css'

const Team = () => {
    return (
        <div className="team-div">
            <div className='heading'>
              <h1>Team</h1>
            </div>
            <div className="team">
                {TeamInfo.map((team) => (
                    <div className="team-info">
                        <img src={team.url} alt=""/>
                        <h4>{team.name}</h4>
                        <h6>{team.por}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team