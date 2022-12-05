import axios from 'axios'
export default class BookStoreService {
  getAll () {
    return axios.get('http://localhost:8080/book/all')
  }

  getById (id) {
    return axios.get('http://localhost:8080/book/get/' + id)
  }
}
