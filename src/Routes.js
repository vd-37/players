import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./Components/Home"
import PlayersList from "./Components/PlayersList"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/players" exact component={PlayersList}/>
            </Switch>
        </BrowserRouter>
    )
}
