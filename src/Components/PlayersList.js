import React from 'react'
import { useContext } from 'react';
import { AddPlayer } from './AddPlayer';
import { PlayerContext, PlayerProvider } from './PlayersContext';

export const PlayersList = () => {
    const [players, setPlayers] = useContext(PlayerContext);
    
    return (
        <PlayerProvider>
            {players.map((player, index) => (
                <div>
                    {player.name && <h1>Player{index} <br /> Name: {player.name}</h1>}
                    {player.role && <h2>Role: {player.role}</h2>}
                    <br />
                </div>
            ))
            }
         </PlayerProvider>
    )
}


