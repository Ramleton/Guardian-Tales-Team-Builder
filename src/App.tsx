import './App.css'

import GuardianLis from 'components/GuardianList/GuardianList'
import GuardianSelector from 'components/GuardianSelector'
import TeamCombos from 'components/TeamCombos'
import TeamInfo from 'components/TeamInfo/TeamInfo'
import TeamStats from 'components/TeamStats'
import data, { guardianData } from 'data/guardians'
import React, { useState } from 'react'
import styled from 'styled-components'

interface container {
	area: string;
}

const Container = styled.div<container>`
	position: absolute;
	top: 8px;
	left: 8px;
	width: calc(100% - 16px);
	height: calc(100% - 16px);

	display: grid;
	gap: 8px;

	grid-template-columns: 2fr 1fr;
	grid-template-rows: 200px 100px 3fr;
	grid-template-areas: ${props => props.area};
`

const App: React.FC = () => {

	const [guardians, setGuardians] = useState<Array<guardianData | null>>([
		{
			name: 'Alef',
			element: 'Earth',
			tier: 3,
			atk: 834,
			hp: 32945,
			def: 201,
			dr: 10,
			crit: 0,
			heal: 0,
			chain: 'Airborne to Downed',
			partyBuff: ['Range DEF', 80]
		}, {
			name: 'Android Mk. 99',
			element: 'Light',
			tier: 3,
			atk: 971,
			hp: 30267,
			def: 169,
			dr: 18,
			crit: 0,
			heal: 0,
			chain: 'Downed to Injured',
			partyBuff: ['Range ATK', 50]
		}, {
			name: 'Arabelle',
			element: 'Dark',
			tier: 3,
			atk: 1014,
			hp: 30535,
			def: 135,
			dr: 16,
			crit: 0,
			heal: 0,
			chain: 'Injured to Downed',
			partyBuff: ['Dark ATK', 50]
		}, {
			name: 'Bari',
			element: 'Earth',
			tier: 3,
			atk: 1239,
			hp: 29084,
			def: 196,
			dr: 22,
			crit: 4,
			heal: 0,
			chain: 'Injured to Downed',
			partyBuff: ['Skill ATK', 80]
		}
	])

	const [toggleList, setToggleList] = useState(false);

	return (
		<Container area={toggleList ? '"selector stats" "list stats" "list stats"' : '"selector stats" "info stats" "combo combo"'}>
			<GuardianSelector guardians={guardians} setGuardians={setGuardians} setToggleList={setToggleList} />
			<TeamStats />
			{ toggleList ? <GuardianLis /> : <TeamInfo />}
			{ !toggleList && <TeamCombos />}
		</Container>
	)
}

export default App
