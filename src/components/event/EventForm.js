import React, { useContext, useState, useEffect } from "react"
import { EventContext } from "./EventProvider.js";
import { GameContext } from "./GameProvider.js";


export const EventForm = props => {
    const { games, getGames } = useContext(GameContext)
    const { events, getEvents, createEvent } = useContext(EventContext)
    
    const [currentEvent, setEvent] = useState({
        skillLevel: 1,
        numberOfPlayers: 0,
        title: "",
        gameTypeId: 0
    })

    useEffect(() => {
        getGames()
        getEvents()
    }, [])

    const handleControlledInputChange = (event) => {
        const newEventState = Object.assign({}, currentEvent)
        newEventState[event.target.name] = event.target.value
        setEvent(newEventState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        value={currentEvent.gameId}
                        onChange={handleControlledInputChange}>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option></option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>

            {/* Create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const event = {
                        title: currentGame.title,
                        numberOfPlayers: parseInt(currentGame.numberOfPlayers),
                        skillLevel: parseInt(currentGame.skillLevel),
                        gameTypeId: parseInt(currentGame.gameTypeId)
                    }
                    createEvent(event)
                        .then(props.history.push("/events"))
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}