import axios from 'axios'
export default class BookOrderService {
  addOrder (userToken, data) {
    return axios.post('http://localhost:8080/order/add/' + userToken, data)
  }

  getallOrders (userToken) {
    return axios.get('http://localhost:8080/order/getAll/' + userToken)
  }

  cancelOrder (orderId) {
    return axios.put('http://localhost:8080/order/cancelOrder/' + orderId)
  }
}
