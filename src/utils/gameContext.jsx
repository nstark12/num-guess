import { createContext, useContext, useReducer } from 'react'

const randomNumber = () => Math.floor(Math.random() * 2)

const defaultContext = {
    lives: 3,
    answer: randomNumber()

}

const GameContext = createContext(defaultContext)

const reducer = (state, action) => {
    switch(action.type) {

        default:
            return state
    }
}

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultContext)

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}

export const useGameContext = () => useContext(GameContext)