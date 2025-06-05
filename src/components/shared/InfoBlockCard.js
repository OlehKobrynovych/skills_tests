import { Typography, Box } from '@mui/material'
import React from 'react'

export default function InfoBlockCard({ img, number, description }) {
  return (
    <Box 
			sx={{
				width: 'calc(50% - 10px)',
				maxWidth: '520px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '20px',
				color: '#fff',
				'@media (min-width: 1024px)': {
					width: 'calc(24% - 10px)',
				}
			}}
		>
      <Box 
				component="img"
				sx={{
					maxWidth: 'auto',
					height: 'auto',
				}}
				src={img} 
				alt="img"
			/>
      <Typography 
				variant="h2"
				sx={{
					fontSize: '48px',
					fontWeight: 600,
					'@media (min-width: 640px)': {
						fontSize: '56px',
					}
				}}
			>
        {number}
      </Typography>
      <Typography
				sx={{
					fontSize: '20px',
					fontWeight: 600,
					maxWidth: '160px',
					textAlign: 'center',
					lineHeight: 'normal',
					'@media (min-width: 640px)': {
						fontSize: '25px',
					}
				}}
			>
				{description}
			</Typography>
    </Box>
  )
}
