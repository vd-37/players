import React, { useContext, useState } from 'react'
import { PlayerContext } from './PlayersContext'

export const AddPlayer = () => {

    const [name, setName] = useState();
    const [role, setRole] = useState();

    const [players, setPlayers] = useContext(PlayerContext);

    const handleClick = (event) => {
        event.preventDefault()
        setPlayers(prevPlayers =>
            [...prevPlayers, { role: role, name: name }]
        );
    }

    const updateRole = e => {
        const value = e.target.value;
        setRole(value);
    }

    const updateName = e => {
        const value = e.target.value;
        setName(value);
    }

    return (
        <form onSubmit={handleClick}>
            <input type="text" onChange={updateRole} value={role} placeholder="Role" />
            <input type="text" onChange={updateName} value={name} placeholder="Name" />
            <button type="submit">Add player</button>
        </form>
    )
}
