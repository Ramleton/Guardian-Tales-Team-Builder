import './App.css'

import GuardianSelector from 'components/GuardianSelector'
import TeamCombos from 'components/TeamCombos'
import TeamInfo from 'components/TeamInfo/TeamInfo'
import TeamStats from 'components/TeamStats'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: absolute;
	top: 8px;
	left: 8px;
	width: calc(100% - 16px);
	height: calc(100% - 16px);

	display: grid;
	gap: 16px;

	grid-template-columns: 2fr 1fr;
	grid-template-rows: 200px 100px 3fr;
	grid-template-areas: "selector stats" "info stats" "combo combo";
`

const App: React.FC = () => {
	return (
		<Container>
			<GuardianSelector />
			<TeamStats />
			<TeamInfo />
			<TeamCombos />
		</Container>
	)
}

export default App
