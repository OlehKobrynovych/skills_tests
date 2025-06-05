import { Card, Typography, Box } from '@mui/material'
import React from 'react'

export default function ReviewCard({ review }) {
  return (
    <Card sx={{
			width: '100%',
			minHeight:'200px',
			borderRadius: '8px',
			padding: '20px',
			backgroundColor: 'rgba(243, 250, 253, 1)',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			'@media (min-width: 640px)': {
				width: 'calc(50% - 10px)',
				maxWidth: '520px',
				minHeight: '275px',
				alignItems: 'center',
			},
			'@media (min-width: 1047px)': {
				width: 'calc(33% - 10px)',
			},
			'@media (min-width: 1440px)': {
				width: 'calc(24% - 4px)',
				maxWidth: '100%',
			}

    }}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: '20px',
					mb: '20px',
					'@media (min-width: 640px)': {
						flexDirection: 'column',
						mb: 0
					}
				}}
			>
				<Box 
					component="img"
					src={review.img}
					alt="review"
					sx={{
						width: '100%',
						maxWidth: '110px',
						height: 'auto',
						objectFit: 'cover',
					}}
				/>
				<Typography
					sx={{
						fontSize: '16px',
						fontWeight: 700,
						color: '#000',
						hyphens: 'auto',
						overflowWrap: 'break-word',
						wordBreak: 'break-word',
						textAlign: 'left',
						'@media (min-width: 640px)': {
						textAlign: 'center',
						}
					}}
				>
					{review.location}
				</Typography>
			</Box>
			<Typography	
				sx={{
					fontSize: '14px',
					fontWeight: 400,
					color: '#000',
					textAlign: 'left',
					hyphens: 'auto',
					overflowWrap: 'break-word',
					wordBreak: 'break-word',
				}}
			>
				{review.review}
			</Typography>
    </Card>
  )
}
