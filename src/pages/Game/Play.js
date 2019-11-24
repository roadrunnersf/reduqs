import React, {useState} from 'react'

import {View} from 'components/Game/Play/View'
import {Input} from 'components/Game/Play/Input'

export const Play = () => {
	// const [status, setStatus] = useState('view')
	const [status, setStatus] = useState('input')
	return (
		<>
			{status === 'view' && <View />}
			{status === 'input' && <Input />}
		</>
	)
}
