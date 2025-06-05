import { Select } from '@mui/material';
import { styled } from '@mui/material/styles';

	const CustomSelect = styled(Select)(() => ({
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
	}));

export default CustomSelect;
