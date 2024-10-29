import React from 'react'

import "../styles/SkillCard.css"

function SkillBar({score}) {
    return (
        <div class="progress-container">
            <div class="progress" style={{"--p": `${100-score}%`}}/>
        </div>
    )
}

export default SkillBar