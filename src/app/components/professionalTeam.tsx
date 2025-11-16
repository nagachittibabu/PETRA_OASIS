import React from 'react'

const teamMembers=["/images/wrench.png","/images/wrench.png","/images/wrench.png","/images/wrench.png"]
const TeamSection = () => {
  return (
    <div>
    <div>
        <h1>OUR PROFESSIONAL TEAM</h1>
    </div>
        <div>
            {teamMembers.map(()=>(
                <div></div>
            ))}
        </div>
    </div>
  )
}

export default TeamSection