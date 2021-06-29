import styled from 'styled-components'

export const Container = styled.div`
	border: white solid 2px;
	grid-area: list;
`

export const ListContainer = styled.div`
	height: 100%;
	width: 100%;

	display: grid;
	grid-template-rows: repeat(6, '1fr');
	grid-template-columns: 100px auto;
`

interface listTitle {
	bgColor: [number, number, number];
}

export const ListTitle = styled.div<listTitle>`
	background-color: ${({ bgColor }) => `rgb(${bgColor})`};
	display: flex;
	align-items: center;
	justify-content: center;
`

interface titleText {
	color: string;
}

export const TitleText = styled.p<titleText>`
	color: ${props => props.color};
	font-size: 2rem;
`

export const IconWrapper = styled.div<listTitle>`
	display: flex;
	align-items: center;
	background-color: ${({ bgColor }) => `rgba(${bgColor}, 0.75)`};
`

export const GuardianWrapper = styled.div`
	position: relative;
`

export const GuardianIcon = styled.img`
	height: 70px;
	width: 70px;
	padding: 4px;
	opacity: 1 !important;
	border-radius: 50px;
`

export const GuardianLabel = styled.p`
	font-size: 0.8rem;
	white-space: pre-line;
	position: absolute;
	bottom: 2px;
	left: 6px;
	text-shadow:
		-1px -1px 0 #000,
		-1px 1px 0 #000,
		1px -1px 0 #000,
		1px 1px 0 #000;
`