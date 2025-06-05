import React, { memo } from 'react'
import aboutCompanyMainImg from '../../assets/aboutCompanyMainImg.webp'
import aboutCompanyImg1 from '../../assets/aboutCompanyImg1.svg'
import aboutCompanyImg2 from '../../assets/aboutCompanyImg2.svg'
import aboutCompanyImg3 from '../../assets/aboutCompanyImg3.svg'
import aboutCompanyImg4 from '../../assets/aboutCompanyImg4.svg'
import { Box, Stack, Typography } from '@mui/material'

const aboutCompanyArr = [
	{
		img: aboutCompanyImg1,
		description: 'Середній час виконання робіт від 2 тижнів до 2 місяців',
	},
	{
		img: aboutCompanyImg2,
		description: 'Планування інженерних робіт (логістика, вивіз сміття, риштування)',
	},
	{
		img: aboutCompanyImg3,
		description: 'Складання кошторису',
	},
	{
		img: aboutCompanyImg4,
		description: 'Погодження кошторису (допомога для угодження)',
	},
]

function AboutCompanyBlock() {

  return (
    <Box
			sx={{
				width: '100%',
			}}
		>
			<Typography
				mb='20px'
				sx={{
				fontSize: '36px',
				fontWeight: 700,
				lineHeight: '40px',
				color: '#000',
				textAlign: 'center',
				'@media (min-width: 768px)': {
					fontSize: '48px',
					lineHeight: '56px',
					pb:'40px'
				},
				}}
			>
				Про компанію
			</Typography>
			<Box 
				sx={{
					display: 'flex',
					flexDirection: 'column-reverse',
					width: '100%',
					justifyContent: 'space-between',
					gap: '20px',
					"@media (min-width: 960px)": {
						flexDirection: 'row',
					}
				}}
			>
				<Box 
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '100%',
						gap: '20px',
						'@media (min-width: 960px)': {
							width: '50%',
						}
					}}
				>
				{aboutCompanyArr.map((item, index) => (
					<Stack
						key={index}
						direction="row"
						alignItems='center'
						sx={{
							width: '100%',
							backgroundColor: 'rgba(243, 250, 253, 1)',
							borderRadius: '10px',
							minHeight: '108px',
							height: '100%',
							gap: '20px',
							padding: '20px',
						}}
					>
						<Box 
							component='img'
							src={item.img} 
							alt="img" 
							sx={{
								width: '100%',
								maxWidth: '70px',
							}}
						/>
						<Typography 
							sx={{ 
								textAlign: 'left',
								textTransform: 'uppercase',
								fontSize: '16px',
								fontWeight: 600,
								color: '#000',
								letterSpacing: '0%',
								lineHeight: '100%',
								'@media (min-width: 768px)': {
									fontSize: '24px',
								}
							}}>
							{item.description}
						</Typography>
					</Stack>
				))}
				</Box>
				<Box 
					component='img'
					src={aboutCompanyMainImg}
					alt="aboutCompanyMainImg"
					sx={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						'@media (min-width: 960px)': {
							width: '50%',
						}
					}}
				/>
			</Box>
			
    </Box>
  )
}

export default memo(AboutCompanyBlock);
