import React, { memo } from 'react'
import InfoBlockCard from './InfoBlockCard'
import { Box } from '@mui/material'
import infoBlockImg1 from '../../assets/infoImg1.svg'
import infoBlockImg2 from '../../assets/infoImg2.svg'
import infoBlockImg3 from '../../assets/infoImg3.svg'
import infoBlockImg4 from '../../assets/infoImg4.svg'

const infoCardArr = [
	{
		img: infoBlockImg1,
		number: '53',
		description: `кількість зроблених об'єктів`
	},
	{
		img: infoBlockImg2,
		number: '50+',
		description: 'кількість задоволених клієнтів'
	},
	{
		img: infoBlockImg3,
		number: '20',
		description: 'кількість працівників'
	},
	{
		img: infoBlockImg4,
		number: '5',
		description: 'Років на ринку'
	}
]

function InfoBlock() {

  return (
    <Box
			sx={{
				width: '100%',
				display: 'flex',
				flexWrap: 'wrap',
				gap: '20px',
				justifyContent: 'center',
			}}
    >
			{
				infoCardArr.map((item, index) => (
				<InfoBlockCard
					key={index}
					img={item.img}
					number={item.number}
					description={item.description}
				/>
				))
			}
    </Box>
  )
}

export default memo(InfoBlock)
