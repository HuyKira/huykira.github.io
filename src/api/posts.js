import axios from "axios"
axios.defaults.baseURL = 'https://api.huykira.net';

export default {
	get: function(data){
		let url = '/recruit'
		return axios.get(url, {params: data});
	},
	detail: function(slug){
		let url = '/recruit'
		return axios.get(url, {params: {slug: slug}});
	}
}