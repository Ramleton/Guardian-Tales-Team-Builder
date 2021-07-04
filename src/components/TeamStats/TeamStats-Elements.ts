import styled from 'styled-components'

export const Container = styled.div`
	border: white solid 2px;
	grid-area: stats;
	padding: 8px;
	overflow-y: scroll;
`

export const Title = styled.h1`
	font-size: 2.5rem;
	text-align: center;
`

export const Stats = styled.span`
	white-space: pre-line;
`

export const StatName = styled.p`
	display: inline;
	font-size: 1.2rem;
`

export const StatValue = styled.p`
	display: inline;
	font-size: 1.4rem;
	color: lime;
`