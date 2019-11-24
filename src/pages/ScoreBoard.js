import React from 'react'
import {useSelector} from 'react-redux'

export const ScoreBoard = () => {
	const guesses = useSelector(state => state.guesses)
	const currentDucks = useSelector(state => state.currentDucks)

	return (
		<>
			<ul>
				{guesses.map(guess => (
					<li key={guess.id}>
						Score:{guess.score}, Guess: {guess.guess}, Actual:{' '}
						{guess.actual}, Time: {guess.time}
					</li>
				))}
			</ul>
			<p>There are currently {currentDucks} ducks.</p>
		</>
	)
}
