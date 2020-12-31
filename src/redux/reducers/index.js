import {
	CHANGE_LANGUAGE,
	TOGGLE_THEME,
	SET_IS_OPEN,
	TOGGLE_RESUME
} from '../constants';

const d = new Date();
const hours = d.getHours();
const night = hours >= 19 || hours <= 7; // between 7pm and 7am

const initialState = {
	language: localStorage.getItem('language') || 'es',
	theme: localStorage.getItem('theme') || (night ? 'dark' : 'light'),
	modalIsOpen: false,
	showResume: false,
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
		case SET_IS_OPEN:
			return {
				...state,
				modalIsOpen: action.payload
			}
		case TOGGLE_RESUME:
			return {
				...state,
				showResume: !state.showResume
			}

		default: return state;
	}
}

export default Reducer;