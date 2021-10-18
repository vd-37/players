import React, { createContext, useState } from 'react'
import {AddPlayer} from './AddPlayer'
import {PlayersList} from './PlayersList'

export const PlayerContext = createContext([]);

export const PlayerProvider = props => {
    const [players, setPlayers] = useState([
        {
            role : "Wicket Keeper",
            name : "MS Dhoni"
        },
    ])

    return (
        <PlayerContext.Provider value={[players, setPlayers]}>
           {props.children}
        </PlayerContext.Provider>
    )
}