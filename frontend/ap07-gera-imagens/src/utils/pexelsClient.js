import axios from 'axios'
export default axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: {
    Authorization: 'a91Qyfh2Ud1rdeOGKV8aTR5Aj9UmRvdma6EdyhC9EfKStoAyt7rmDuhV'
  }
})