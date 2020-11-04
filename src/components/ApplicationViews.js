import React from "react"
import { Route } from "react-router-dom"
import {GameProvider} from "./game/GameProvider"
import {EventProvider} from "./event/EventProvider"
import {GameList} from "./game/GameList"
import {GameForm} from "./game/GameForm"
import {EventList} from "./event/EventList"

export const ApplicationViews = (props) => {
    return <>
        <GameProvider>
            <Route exact path="/games">
                <GameList {...props} />
            </Route>
            <Route exact path="/games/new" render={props => <GameForm {...props} />} />
        </GameProvider>
        <EventProvider>
            <Route exact path="/events">
                <EventList />
            </Route>
        </EventProvider>
    </>
}
