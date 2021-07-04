import styled from 'styled-components'

export const Container = styled.div`
	border: white solid 2px;
	grid-area: selector;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`

interface icon {
	selected: boolean;
}

export const Icon = styled.img<icon>`
	height: 150px;
	width: 150px;
	border-radius: 50px;
	border: ${props => props.selected ? 'green' : 'gray'} solid 5px;
`