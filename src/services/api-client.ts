import axios from 'axios';

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params: {
    key: '56c0819bc0e54bdf9fe324596e67f14b'
  }
})
