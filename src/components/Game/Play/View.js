import React from 'react'
import random from 'lodash/random'

import {Canvas} from 'styled/Play/Canvas'
import {Duck} from 'styled/Play/Duck'

// this page is not hooked up to redux or being displayed yet

const createDucks = (
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

export const View = () => {
	return (
		<>
			<p>This is the Play page</p>
			<Canvas>
				{createDucks(random(10, 30)).map((coord, index) => (
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
