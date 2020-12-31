import React from 'react'
import { useSelector } from 'react-redux';

//styles ==> 
import { StyledLoader } from '../styles/GlobalStyle';

//strings ==>
import strings from './strings'

const Loading = ({ loading }) => {
	const language = useSelector(state => state.language);
	const theme = useSelector(state => state.theme);

	return (
		<StyledLoader
			theme={theme}
			active={loading}
			spinner
			text={strings[language].load}
			className='loading__overlay'
			classNamePrefix='loading__'
		/>
	)
}

export default Loading;