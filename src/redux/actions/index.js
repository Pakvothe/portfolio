import { CHANGE_LANGUAGE, TOGGLE_THEME, SET_IS_OPEN } from '../constants';

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
export const setIsOpen = (payload) => {
	return {
		type: SET_IS_OPEN,
		payload
	}
}
