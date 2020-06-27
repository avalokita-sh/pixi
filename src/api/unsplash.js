import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers:{
	 Authorization: 'Client-ID QI9Z9BS9VcfX47yP9uBoxt4AgA2oJg1QDCHJrkp4bCY'
	}
});

