import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AddPlayer } from './AddPlayer';
import { PlayerProvider } from './PlayersContext';
import { PlayersList } from './PlayersList';

const Home = () => {
    return (
        <PlayerProvider>
            <AddPlayer />
            <Link to="/players">View Players</Link>
            <PlayersList />
        </PlayerProvider>
    )
}

export default Home;
