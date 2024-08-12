import axios from 'axios'
type reqType = 'GET' | 'POST' | 'get' | 'post'

type requestType = {
	url: string,
	data?: object,
	type?: reqType
}

axios.defaults.baseURL = "http://localhost:4000";


const ajax = (reqData: requestType) => {
	const { url, data, type = 'get' } = reqData
	let reqType = type.toLowerCase()

	return new Promise((resolve, reject) => {
		axios[reqType as ('get' | 'post')](url, data).then(response => {
			console.log(response)
		})
	})

}

export default ajax