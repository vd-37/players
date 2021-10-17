import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PlayersList from './PlayersList';

const Home = () => {

    const [player, setPlayer] = useState({
        role : "",
        name : ""
    })

    const [items, setItems] = useState([{}]);

    const handleClick = (event) => {
        event.preventDefault()
        setItems(prevValue => {
            return [...prevValue, player]
        });
        setPlayer({role: "", name: ""})
    }
        
    const handleChange = name => event => {
        const {value} = event.target
        setPlayer(prevValue => {
            return{
                ...prevValue,
                [name] : value
            }
        })
    }

    return (
        <div>
        <form onSubmit={handleClick}>
            <input type="text" onChange={handleChange("role")} value={player.role} placeholder="Role" />
            <input type="text" onChange={handleChange("name")} value={player.name} placeholder="Name" />
            <button type="submit">Add player</button>
        </form>
        <Link to="/players">View Players</Link>
        <PlayersList items={items} />
    </div>
    )
}

export default Home;
