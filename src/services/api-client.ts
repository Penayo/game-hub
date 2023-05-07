import axios from 'axios';

export default axios.create({
  params: {
    baseUrl: 'https://api.rawg.io/api',
    key: '56c0819bc0e54bdf9fe324596e67f14b'
  }
})