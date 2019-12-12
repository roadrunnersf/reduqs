import React from 'react'
import {useSelector} from 'react-redux'

export const Result = () => {
	const mostRecentGuess = useSelector(state => state.guesses.slice(-1)[0])

	return (
		<>
			<p>This is the result page</p>
			<p>You guessed {mostRecentGuess.guess}</p>
			<p>There were actually {mostRecentGuess.actual} ducks.</p>
		</>
	)
}
