import React, { memo, useState } from 'react'
import { Box, Typography, Button, MenuItem } from '@mui/material'
import { allProjects } from '../../data/data';
import ProjectCard from './ProjectCard';
import CustomSelect from './CustomSelect';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const projectButtons = [
	{ label: 'Всі', slug: 'all', value: 'all' },
	{ label: 'Утеплення будинків', slug: 'uteplennya-budynkiv', value: 'uteplennya-budynkiv' },
	{ label: 'Перекриття даху', slug: 'perekryttya-dakhu', value: 'perekryttya-dakhu' },
	{ label: 'Реставрація димоходів', slug: 'restavratsiya-dymokhodiv', value: 'restavratsiya-dymokhodiv' },
	{ label: 'Відновлення історичного фасаду', slug: 'vidnovlenia-istorichnoho-fasadu', value: 'vidnovlenia-istorichnoho-fasadu' },
];

function ProjectsBlock() {

	const windowInnerWidth = useSelector((state) => state.userSlice.windowInnerWidth);
	const [activeFilter, setActiveFilter] = useState('all');
	const [selectedValue, setSelectedValue] = useState('all');

	const handleSelectChange = (event) => {
		setSelectedValue(event.target.value);
		setActiveFilter(event.target.value);
	};

	const filteredProjects =
	activeFilter === 'all'
		? allProjects
		: allProjects.filter((project) =>
			project.type.split(',').map(type => type.trim()).includes(activeFilter)
		);


  return (
    <Box>
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
				Наші проекти
			</Typography>
			<Box
				sx={{
					display: 'flex',
					gap: '20px',
					mb: '20px',
				}}
			>
				{windowInnerWidth < 896 ? (
					<CustomSelect 
						value={selectedValue} 
						onChange={handleSelectChange}
						IconComponent={ExpandMoreIcon}
						sx={{ 
							backgroundColor: '#000',
							color: '#fff',
							fontSize: '16px',
							borderRadius: '5px',
							paddingRight: '12px',
							border: 'none',
							outline: 'none',
							boxShadow: 'none',
							'& fieldset': {
								border: 'none',
							},
							'& .MuiSelect-icon': {
								color: '#fff',
								right: '8px',
							},
						}}
					>
						{projectButtons.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</CustomSelect>
				) : (
					<Box
						sx={{
							display: 'flex',
							gap: '20px',
							mb: '20px',
						}}
					>
						{projectButtons.map(({ label, slug }) => (
							<Button
								key={slug}
								onClick={() => setActiveFilter(slug)}
								sx={{
									backgroundColor: activeFilter === slug ? '#000' : 'transparent',
									color: activeFilter === slug ? '#fff' : '#000',
									borderRadius: '5px',
									padding: '10px 20px',
									fontSize: '16px',
									fontWeight: 600,
									textTransform: 'uppercase',
									border: '1px solid rgba(2, 2, 2, 1)',
									letterSpacing: '0%',
									'&:hover': {
										backgroundColor: activeFilter === slug ? '#000' : 'rgba(0,0,0,0.05)',
										color: activeFilter === slug ? '#fff' : '#000',
										boxShadow: 'none',
									},
								}}
							>
								{label}
							</Button>
						))}
					</Box>
				)}
			</Box>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					flexWrap: 'wrap',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '20px',
				}}
			>
			{ 
				filteredProjects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))
			}
			</Box>
    </Box>
  )
}

export default memo(ProjectsBlock);
