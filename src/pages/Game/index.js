import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import random from 'lodash/random'

import {updateDucks} from 'redux/score'

export const Game = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(updateDucks(random(10, 30)))
	}, []) // eslint-disable-line

	return (
		<>
			<p>This is the game page</p>
			<p>
				Click here to <Link to="/game/play">play</Link>.
			</p>
		</>
	)
}
