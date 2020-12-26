import { CHANGE_LANGUAGE, TOGGLE_THEME } from '../constants';

const initialState = {
	language: localStorage.getItem('language') || 'es',
	theme: localStorage.getItem('theme') || 'dark'
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_LANGUAGE:
			return {
				...state,
				language: action.payload
			}
		case TOGGLE_THEME:
			localStorage.setItem('theme', (state.theme === 'light') ? 'dark' : 'light')
			return {
				...state,
				theme: (state.theme === 'light') ? 'dark' : 'light'
			}

		default: return state;
	}
}

export default Reducer;