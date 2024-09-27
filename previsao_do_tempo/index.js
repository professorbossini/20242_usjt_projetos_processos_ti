require('dotenv').config()
const axios = require('axios')
// const PROTOCOL = process.env.PROTOCOL
// const APPID = process.env.APPID
const { 
  PROTOCOL,
  BASE_URL,
  APPID,
  Q,
  UNITS,
  CNT 
} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&q=${Q}&units=${UNITS}&cnt=${CNT}`

//arrow function
axios.get(url).then((res) => {
  //console.log(res.data)
  for(let previsao of res.data.list){
    console.log(new Date(previsao.dt * 1000).toLocaleString())
  }
})


