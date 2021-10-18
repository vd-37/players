import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./Components/Home"
import { PlayerProvider } from './Components/PlayersContext'
import { PlayersList } from "./Components/PlayersList"


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PlayerProvider>
                    <Route path="/" exact component={Home} />
                    <Route path="/players" exact component={PlayersList} />
                </PlayerProvider>
            </Switch>
        </BrowserRouter>
    )
}
