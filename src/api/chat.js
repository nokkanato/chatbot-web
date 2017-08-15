import Vue from 'vue'

export default {
  postChat (message, callback) {
    var body = {
      message: message
    }
    Vue.$http.post('https://chatbot-apiai-g.herokuapp.com/web', body)
    .then(function (response) {
      console.log('get request with', message, 'success')
      callback(response)
    })
    .catch(function (response) {
      console.log('error', response.data)
    })
  },
  getChat (callback) {
    console.log('getchat')
    Vue.$http.get(' https://chatbot-apiai-g.herokuapp.com/chats')
    .then(function (response) {
      // console.log('get', response.data)
      callback(response.data)
    })
    .catch(function (response) {
      console.log('error', response)
    })
  }
}
