import { guardianData } from 'data/guardians'
import React from 'react'

import { Container, Icon } from './GuardianSelector-Elements'

interface GuardianSelectorComponent {
	guardians: Array<guardianData | null>;
	setGuardians: React.Dispatch<React.SetStateAction<(guardianData | null)[]>>;
}

const GuardianSelector: React.FC<GuardianSelectorComponent> = ({ guardians, setGuardians }) => {

	const setGuardian = (slot: number, guardian: guardianData) => {
		
	}

	return (
		<Container>
			{
				guardians.map(guardian => {
					return <Icon src={`images/guardians/${guardian?.name}.jpg`} />
				})
			}
		</Container>
	)
}

export default GuardianSelector
