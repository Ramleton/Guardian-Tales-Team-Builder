import { guardianData } from 'data/guardians'
import React from 'react'

import { Container, Icon } from './GuardianSelector-Elements'

interface GuardianSelectorComponent {
	guardians: Array<guardianData | null>;
	setGuardians: React.Dispatch<React.SetStateAction<(guardianData | null)[]>>;
	setToggleList: React.Dispatch<React.SetStateAction<boolean>>;
}

const GuardianSelector: React.FC<GuardianSelectorComponent> = ({ guardians, setGuardians, setToggleList }) => {

	const setGuardian = (slot: number, guardian: guardianData) => {
		
	}

	return (
		<Container>
			{
				guardians.map(guardian => {
					return <Icon key={guardian?.name} src={`images/guardians/${guardian?.name.replace('/', '')}.jpg`} onMouseDown={() => setToggleList(true)} />
				})
			}
		</Container>
	)
}

export default GuardianSelector
