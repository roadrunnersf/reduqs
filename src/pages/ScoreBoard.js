import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {updateDucks} from 'redux/score'

export const ScoreBoard = () => {
	const dispatch = useDispatch()

	const guesses = useSelector(state => state.guesses)
	const currentDucks = useSelector(state => state.currentDucks)

	useEffect(() => () => {
		dispatch(updateDucks(undefined))
	})

	return (
		<>
			<h1>Score Board</h1>
			<p>There are currently {currentDucks} ducks.</p>
			<ul>
				{guesses.map(guess => (
					<li key={guess.id}>
						Score: {guess.score}, Guess: {guess.guess}, Actual:
						{guess.actual}, Time: {guess.time}
					</li>
				))}
			</ul>
		</>
	)
}
