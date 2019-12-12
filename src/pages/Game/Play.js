import React, {useState} from 'react'

import {View} from 'components/Game/Play/View'
import {Input} from 'components/Game/Play/Input'
import {Result} from 'components/Game/Play/Result'

export const Play = () => {
	const [status, setStatus] = useState('view')

	return (
		<>
			{status === 'view' && <View setStatus={setStatus} />}
			{status === 'input' && <Input setStatus={setStatus} />}
			{status === 'result' && <Result />}
		</>
	)
}
