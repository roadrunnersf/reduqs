import React from 'react'
import random from 'lodash/random'
import {useSelector} from 'react-redux'

import {Canvas} from 'styled/Play/Canvas'
import {Duck} from 'styled/Play/Duck'

import {useNextPlayScreen} from 'hooks/useNextPlayScreen'

// this page is not hooked up to redux or being displayed yet

const createDucksArray = (
	numberOfDucks = 20,
	xMin = 0,
	xMax = 500,
	yMin = 0,
	yMax = 500
) => {
	let coords = []
	for (let i = 0; i < numberOfDucks; i++) {
		coords.push({xMin, xMax, yMin, yMax})
	}
	return coords
}

export const View = ({setStatus}) => {
	const currentDucks = useSelector(state => state.currentDucks)

	useNextPlayScreen({setStatus, nextView: 'input', timerMS: 2000})

	return (
		<>
			<p>This is the Play page</p>
			<Canvas>
				{createDucksArray(currentDucks).map((coord, index) => (
					<Duck
						left={random(coord.xMin, coord.xMax)}
						top={random(coord.yMin, coord.yMax)}
						key={index}
					/>
				))}
			</Canvas>
		</>
	)
}
