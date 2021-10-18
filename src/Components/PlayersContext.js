import React, { createContext, useState } from 'react'
import {AddPlayer} from './AddPlayer'
import {PlayersList} from './PlayersList'

export const PlayerContext = createContext();

export const PlayerProvider = props => {
    const [players, setPlayers] = useState([
        {
            role : "",
            name : ""
        },
    ])

    return (
        <PlayerContext.Provider value={[players, setPlayers]}>
           {props.children}
        </PlayerContext.Provider>
    )
}