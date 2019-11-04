import axios from "axios"
axios.defaults.baseURL = 'https://api.huykira.net';

export default {
	get: function(){
		let url = '/recruit'
		return axios.get(url);
	}
}