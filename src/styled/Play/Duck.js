import styled from 'styled-components'

export const Duck = styled.div`
	width: 10px;
	height: 10px;
	background-color: gold;
	position: absolute;
	left: ${props => props.left}px;
	top: ${props => props.top}px;
`
