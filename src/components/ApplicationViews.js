import React from "react"
import { Route } from "react-router-dom"
import {GameProvider} from "./game/GameProvider"
import {GameList} from "./game/GameList"

export const ApplicationViews = () => {
    return <>
        <GameProvider>
            <Route exact path="/">
                <GameList />
            </Route>
        </GameProvider>
    </>
}
