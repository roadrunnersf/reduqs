import {useEffect} from 'react'

export const useNextPlayScreen = ({setStatus, nextView, timerMS}) => {
	const timeOut = setTimeout(() => setStatus(nextView), timerMS)

	useEffect(() => () => clearTimeout(timeOut))
}
