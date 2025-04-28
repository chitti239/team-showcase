import React from 'react'
import data from "../data.json"
const TeamMemberCard = ({name,job}) => {
  return (
    <div>
        {
            data.map((e)=>(
                <div>
                    <p>Name : {e.name}</p>
                    <p>Job : {e.job}</p>
                </div>
            ))
        }
    </div>
  )
}

export default TeamMemberCard
