import axios from 'axios';
import { URL } from './config';

export const request = (method, path, params) => {
	return axios({
		method: method,
		url: `${URL}${path}`,
		data: params,
	})
}

export const requestWithHeaders = (method, path, params) => {
	return axios({
		method: method,
		url: `${API_URL}${path}`,
		data: params,
		headers: {
			'Content-Type': 'application/json',
			// 'Authorization': 'JWT ',
		},
	})
}


export const signUpUser = (values) => {
	return axios({
		method: 'POST',
		url: "http://light-it-04.tk/api/registration/",
		data: values
		//  data: {
		//   username: 'tom25',
		//   email: 'tom25@gmail.com',
		//   password1: 'q1234567',
		//   password2: 'q1234567',
		//  },
	})
}

export const signInUser = (values) => {
	  return axios({
		method: 'POST',
		url: "http://light-it-04.tk/api/login/",
		data: values
		//   email: 'tom21@gmail.com',
		//   password1: 'q1234567',
	})
}

export const signOutUser = (values) => {
	return axios({
		method: 'GET',
		url: "http://light-it-04.tk/api/logout/",
	})
}

export const getProductsData = () => {
	return axios.get(`http://light-it-04.tk/api/posters`)
}