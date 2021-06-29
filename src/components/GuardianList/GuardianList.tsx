import data, { guardianData } from 'data/guardians'
import React from 'react'

import { Container, GuardianIcon, GuardianLabel, GuardianWrapper, IconWrapper, ListContainer, ListTitle, TitleText } from './GuardianList-Elements'

interface elementRow {
	color: [[number, number, number], string];
	guardians: guardianData[];
}

interface elementData {
	Light: elementRow;
	Dark: elementRow;
	Basic: elementRow;
	Water: elementRow;
	Earth: elementRow;
	Fire: elementRow;
}

const GuardianList: React.FC = () => {

	const guardians = (() => {
		let out: elementData = {
			Light: { color: [[255, 255, 255], 'black'], guardians: [] },
			Dark:  { color: [[0, 0, 0],       'white'], guardians: [] },
			Basic: { color: [[100, 100, 100], 'black'], guardians: [] },
			Water: { color: [[30, 196, 201],  'black'], guardians: [] },
			Earth: { color: [[168, 110, 29],  'black'], guardians: [] },
			Fire:  { color: [[212, 66, 13],   'black'], guardians: [] }
		}
		Object.values(data).forEach(guardian => out[guardian.element].guardians.push(guardian))
		return out
	})()

	return (
		<Container>
			<ListContainer>
				{
					Object.entries(guardians).map(([elementName, { color, guardians }]) => {
						return <React.Fragment key={elementName}>
							<ListTitle bgColor={color[0]}>
								<TitleText color={color[1]}>{elementName}</TitleText>
							</ListTitle>
							<IconWrapper bgColor={color[0]}>
								{
									guardians.map((guardian: guardianData) => {
										return <GuardianWrapper key={guardian.name}>
											<GuardianIcon src={`images/guardians/${guardian?.name.replace('/', '')}.jpg`} />
											<GuardianLabel>{guardian.name.replace(' ', '\n')}</GuardianLabel>
										</GuardianWrapper>
									})
								}
							</IconWrapper>
						</React.Fragment>
					})
				}
			</ListContainer>
		</Container>
	)
}

export default GuardianList
