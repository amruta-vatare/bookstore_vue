import axios from 'axios'
export default class BookOrderService {
  addOrder (userToken, data) {
    return axios.post('http://localhost:8080/order/add/' + userToken, data)
  }
}
