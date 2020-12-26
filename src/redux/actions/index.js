import { CHANGE_LANGUAGE, TOGGLE_THEME } from '../constants';

//Global actions =>
export const changeLanguage = (payload) => {
	localStorage.setItem('language', payload);
	return {
		type: CHANGE_LANGUAGE,
		payload
	}
}

export const toggleTheme = () => {
	return {
		type: TOGGLE_THEME
	}
}
