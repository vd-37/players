import React from 'react'
import { useContext } from 'react';
import { PlayerContext, PlayerProvider } from './PlayersContext';

export const PlayersList = () => {
    const [players, setPlayers] = useContext(PlayerContext);
    return (
        <PlayerProvider>
            {players.map((player, index) => (
                <div>
                    {<h1>Player{index} <br /> Name: {player.name}</h1>}
                    {<h2>Role: {player.role}</h2>}
                    <br />
                </div>
            ))
            }
         </PlayerProvider>
    )
}


