import { guardianData } from 'data/guardians'
import React from 'react'

import { Container, Icon } from './GuardianSelector-Elements'

interface GuardianSelectorComponent {
	guardians: Array<guardianData | null>;
	selectedGuardian: number;
	setSelectedGuardian: React.Dispatch<React.SetStateAction<number>>;
	setGuardians: React.Dispatch<React.SetStateAction<(guardianData | null)[]>>;
	setToggleList: React.Dispatch<React.SetStateAction<boolean>>;
}

const GuardianSelector: React.FC<GuardianSelectorComponent> = ({ guardians, selectedGuardian, setSelectedGuardian, setGuardians, setToggleList }) => {

	const clickGuardian = (i: number) => (event: React.MouseEvent<HTMLImageElement>) => {
		event.preventDefault()
		setToggleList(true)
		if (i === selectedGuardian) {
			setToggleList(false)
			setSelectedGuardian(-1)
		} else {
			setSelectedGuardian(i)
		}
	}

	return (
		<Container>
			{
				guardians.map((guardian, i) => {
					return <Icon
						key={guardian?.name}
						src={guardian && `images/guardians/${guardian?.name.replace('/', '')}.jpg` || ''}
						onMouseDown={clickGuardian(i)}
						selected={i === selectedGuardian}
					/>
				})
			}
		</Container>
	)
}

export default GuardianSelector
