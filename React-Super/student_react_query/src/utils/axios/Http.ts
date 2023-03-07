import axios from 'axios'

class Http {
  public instance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:4000/',
      timeout: 50000,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

let http = new Http().instance

export default http
