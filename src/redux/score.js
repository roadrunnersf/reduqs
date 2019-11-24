// Actions
const GUESS = 'GUESS'
const CURRENT_DUCKS = 'CURRENT_DUCKS'

// Reducer
const initialState = {
	guesses: [],
	currentDucks: 0,
}

export const rootReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case GUESS:
			return Object.assign({}, state, {
				guesses: state.guesses.concat(action.payload),
			})
		case CURRENT_DUCKS:
			return {...state, currentDucks: action.payload}

		default:
			return state
	}
}

// Action Creators
export const addGuess = payload => ({type: GUESS, payload})

export const updateDucks = payload => ({type: CURRENT_DUCKS, payload})
