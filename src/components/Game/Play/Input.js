import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {addGuess, updateDucks} from 'redux/score'

export const Input = () => {
	const [guess, setGuess] = useState('')
	const dispatch = useDispatch()

	const currentDucks = useSelector(state => state.currentDucks)

	const handleChange = event => {
		setGuess(event.target.value)
	}
	const handleSubmit = event => {
		dispatch(
			addGuess({
				score: Math.abs(guess - currentDucks),
				guess,
				actual: currentDucks,
				time: new Date().toLocaleTimeString(),
			})
		)
		dispatch(updateDucks(undefined))
		setGuess('')
		event.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="guess">Guess</label>
				<input
					type="text"
					id="guess"
					value={guess}
					onChange={handleChange}
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}
