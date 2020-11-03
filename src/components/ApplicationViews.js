import React from "react"
import { Route } from "react-router-dom"
import {GameProvider} from "./game/GameProvider"
import {EventProvider} from "./game/EventProvider"
import {GameList} from "./game/GameList"
import {EventList} from "./game/EventList"

export const ApplicationViews = () => {
    return <>
        <GameProvider>
            <Route exact path="/">
                <GameList />
            </Route>
        </GameProvider>
        <EventProvider>
            <Route exact path="/events">
                <EventList />
            </Route>
        </EventProvider>
    </>
}
