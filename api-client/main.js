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
  axios({
      method: 'POST',
      url: "http://light-it-04.tk/api/registration/",
			data: values
      //  data: {
      //   username: 'tom24',
      //   email: 'tom24@gmail.com',
      //   password1: 'q1234567',
      //   password2: 'q1234567',
      //  },
    })
		.then(res => console.warn(res))
		.catch(error => console.warn("ERRRRROR ", error))
}
