import './App.css'

import GuardianList from 'components/GuardianList'
import GuardianSelector from 'components/GuardianSelector'
import TeamCombos from 'components/TeamCombos'
import TeamInfo from 'components/TeamInfo'
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

	const [guardians, setGuardians] = useState<Array<guardianData | null>>([null, null, null, null])

	const [toggleList, setToggleList] = useState(false);

	const [selectedSlot, setSelectedSlot] = useState<number>(-1)

	const setGuardian = (slot: number, guardian: guardianData | null) => {
		if (guardian && guardians.filter(g => g?.name === guardian?.name).length) {
			setGuardian(slot, null)
			return
		}
		setGuardians([...guardians].map((g, i) => slot === i ? guardian : g))
	}

	return (
		<Container area={toggleList ? '"selector stats" "list stats" "list stats"' : '"selector stats" "info stats" "combo combo"'}>
			<GuardianSelector guardians={guardians} selectedGuardian={selectedSlot} setSelectedGuardian={setSelectedSlot} setGuardians={setGuardians} setToggleList={setToggleList} />
			<TeamStats guardians={guardians} />
			{ toggleList ? <GuardianList slot={selectedSlot} setGuardian={setGuardian} /> : <TeamInfo />}
			{ !toggleList && <TeamCombos />}
		</Container>
	)
}

export default App