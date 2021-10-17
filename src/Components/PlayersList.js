import React from 'react'

const PlayersList = ({items}) => {

    return (
        <div>
            {items.map((item, index) => (
                <div>
                    {item.name && <h1>Player{index} <br /> Name: {item.name}</h1>}
                    {item.role && <h2>Role: {item.role}</h2>}
                    <br />
                </div>
            ))
            }
        </div>
    )
}

export default PlayersList;