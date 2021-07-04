import { guardianData } from 'data/guardians'
import React, { useEffect } from 'react'

import { Container, StatName, StatValue, Stats, Title } from './TeamStats-Elements'

interface TeamStatsComponent {
	guardians: Array<guardianData | null>;
}

interface StatsValues {
	[key: string]: number;
}

const TeamStats: React.FC<TeamStatsComponent> = ({ guardians }) => {

	const toughness = (() => {
		let out = 0
		guardians.forEach(guardian => {
			if (!guardian) return
			out += guardian.hp * ~~(1 + guardian.def / 100)
		})
		return out.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
	})()

	const partyStats = (() => {
		let out: StatsValues = {
			'ATK': 0,
			'DEF': 0,
			'HP': 0,
			'Range ATK': 0,
			'Range DEF': 0,
			'Melee ATK': 0,
			'Melee DEF': 0,
			'Skill ATK': 0,
			'Light ATK': 0,
			'Dark ATK': 0,
			'Basic ATK': 0,
			'Water ATK': 0,
			'Earth ATK': 0,
			'Fire ATK': 0,
			'Crit Hit Chance': 0,
			'Weapon Skill Regen Speed': 0,
			'HP Recovery on Enemy Kill': 0,
			'Shield Increase on Battle Start': 0,
			'Atk, Heal for Chain Skills Targeting Injured': 0
		}

		guardians.forEach(guardian => {
			if (!guardian) return

			const addPartyBuff = (name: string, value: number) => out[name] += value
			addPartyBuff(guardian.partyBuff[0], guardian.partyBuff[1])
			if (guardian.partyBuff.length === 4) addPartyBuff(guardian.partyBuff[2], guardian.partyBuff[3])
		})

		return out
	})()

	return (
		<Container>
			<Title>Team Stats</Title>
			{
				toughness !== '0' && <Stats>
					<StatName>Toughness - </StatName>
					<StatValue>{toughness}{'\n'}</StatValue>
				</Stats>
			}
			{
				Object.entries(partyStats).map(([title, value]) => {
					if (!value) return
					return <Stats key={title}>
						<StatName>{title} - </StatName>
						<StatValue>{`${value}%\n`}</StatValue>
					</Stats>
				})
			}
		</Container>
	)
}

export default TeamStats
