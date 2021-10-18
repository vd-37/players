import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PlayerContext, PlayerProvider } from './PlayersContext';

export const PlayersList = () => {
    const [players, setPlayers] = useContext(PlayerContext);
    return (
        <div>
            <Link to="/">Home</Link>
            {players.map((player, index) => (
                <div>
                    {<h1>Player{index+1} <br /> Name: {player.name}</h1>}
                    {<h2>Role: {player.role}</h2>}
                    <br />
                </div>
            ))
            }
         </div>
    )
}


