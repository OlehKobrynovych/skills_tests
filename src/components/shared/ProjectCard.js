import React, { useState } from 'react'
import { Card, Typography, Box } from '@mui/material'
import clickImg from '../../assets/clickImg.gif'
import { useSelector } from 'react-redux'

export default function ProjectCard({ project = {} }) {

  const windowInnerWidth = useSelector((state) => state.userSlice.windowInnerWidth);
  const [hovered, setHovered] = useState(false)

  return (
    <Card
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(243, 250, 253, 1)',
        padding: '20px',
        gap: '20px',
        cursor: 'pointer',
        '@media (min-width: 640px)': {
          width: 'calc(50% - 10px)',
          maxWidth: '550px',
        },
        '@media (min-width: 1047px)': {
          width: 'calc(33% - 10px)',
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Box
          component="img"
          src={project.img}
          alt='img'
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
        { windowInnerWidth < 640 && !hovered && (
          <Box
            component="img"
            src={clickImg}
            alt='img'
            sx={{
              width: '70px',
              height: 'auto',
              display: 'block',
              position: 'absolute',
              borderRadius: '50%',
              bottom: '-10px',
              right: '-10px',
              backgroundColor: 'rgba(243, 250, 253, 1)',
            }}
          />
        )}
        {hovered && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
							gap: '10px',
			  			flexDirection: 'column',
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold',
              textAlign: 'left',
              padding: '20px',
              overflowY: 'auto'
            }}
          >
						<Typography
							sx={{
								fontSize: '18px',
								fontWeight: 700
							}}
						>
							{project.works}
						</Typography>
						<Typography
							sx={{
								fontSize: '14px',
								fontWeight: 500,
							}}
						>
							{project.text}
						</Typography>
          </Box>
        )}
      </Box>

      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#000',
          textAlign: 'center',
          '@media (min-width: 640px)': {
            fontSize: '15px',
          }
        }}
      >
        {project.location}
      </Typography>
    </Card>
  )
}
