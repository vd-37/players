import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AddPlayer } from './AddPlayer';
import { PlayerProvider } from './PlayersContext';
import { PlayersList } from './PlayersList';

const Home = () => {
    return (
        <div>
            <AddPlayer />
            <Link to="/players">View Players</Link>
        </div>
    )
}

export default Home;
