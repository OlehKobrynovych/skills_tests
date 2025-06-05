import React, { memo } from 'react'
import { Box, Button, Typography } from '@mui/material'
import reviewImg1 from '../../assets/reviewImg1.webp'
import reviewImg2 from '../../assets/reviewImg2.webp'
import reviewImg3 from '../../assets/reviewImg3.webp'
import reviewImg4 from '../../assets/reviewImg4.webp'
import reviewImg5 from '../../assets/reviewImg5.webp'
import reviewImg6 from '../../assets/reviewImg6.webp'
import reviewImg7 from '../../assets/reviewImg7.webp'
import reviewImg8 from '../../assets/reviewImg8.webp'
import ReviewCard from './ReviewCard'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';	
import { useDispatch, useSelector } from 'react-redux'
import { setIsPhoneModalOpen } from '../../store/userSlice'
import { PHONENUMBER } from '../../helpers/Config'

const reviews = [
	{
		img: reviewImg1,
		location: 'Гуртожиток Червоноградського коледжу',
		review: 'Раніше в квартирі були протяги, особливо біля вікон. Тепер навіть у сильні морози температура стабільна і комфортна!',
	},
	{
		img: reviewImg2,
		location: 'Вулиця Винниченка, 30',
		review: 'Мешканці нашого будинку довго сумнівалися, але після утеплення всі задоволені. Фасад оновився, а комфорт у квартирах суттєво покращився',
	},
	{
		img: reviewImg3,
		location: 'Вулиця Смаль-Стоцького, 13, г2',
		review: 'Раніше в квартирі були протяги, особливо біля вікон. Тепер навіть у сильні морози температура стабільна і комфортна!',
	},
	{
		img: reviewImg4,
		location: 'Площа Святого Теодора, 3',
		review: 'Мешканці нашого будинку довго сумнівалися, але після утеплення всі задоволені. Фасад оновився, а комфорт у квартирах суттєво покращився',
	},
	{
		img: reviewImg5,
		location: 'Вулиця Ференца Ліста, 6',
		review: 'Після утеплення в нашій квартирі стало значно тепліше взимку та прохолодніше влітку. ',
	},
	{
		img: reviewImg6,
		location: 'Вулиця Староєврейська, 22',
		review: 'Раніше стіни сиріли і з’являлася пліснява. Після утеплення цієї проблеми більше немає!',
	},
	{
		img: reviewImg7,
		location: 'Галицька площа, 15',
		review: 'Фасад будинку виглядає сучасно і привабливо. Сусіди з сусіднього будинку вже теж планують утеплюватися!',
	},
];

function ReviewsBlock () {

	const windowInnerWidth = useSelector((state) => state.userSlice.windowInnerWidth);
	const dispatch = useDispatch();

  return (
    <Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Typography
				mb='20px'
				sx={{
				fontSize: '36px',
				fontWeight: 700,
				lineHeight: '40px',
				color: '#000',
				textAlign: 'left',
				'@media (min-width: 768px)': {
					fontSize: '48px',
					lineHeight: '56px',
					mb:'40px'
				},
				}}
			>
				Відгуки
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '20px'
				}}
			>
				{reviews.map((review, index) => (
					<ReviewCard key={index} review={review} />
				))}
			</Box>			
			<Button
				variant="contained"
				onClick={() => {
					if (windowInnerWidth < 640) {
					window.location.href = PHONENUMBER;
					} else {
					dispatch(setIsPhoneModalOpen(true));
					}
				}}
				sx={{
				height: "50px",
				width: '100%',
				mt: '20px',
				borderRadius: '5px',
				fontSize: "14px",
				fontWeight: 700,
				textTransform: "uppercase",
				lineHeight: "unset",
				color: "rgba(17, 16, 0, 1)",
				backgroundColor: "rgba(255, 175, 2, 1)",
				gap: "10px",
				":hover": {
					backgroundColor: "rgba(255, 175, 2, 1)",
					color: "rgba(17, 16, 0, 1)",
				},
				}}
			>
				<PhoneInTalkIcon />	Замовити
			</Button>
    </Box>
  )
}

export default memo(ReviewsBlock)
