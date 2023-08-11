// 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
import { createServer } from 'http'
import axios from 'axios';
const api = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    Authorization: `Bearer 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`
  }
})
console.log('服务初始')
createServer((req, res) => {
  // console.log('服务初始')
  api.post('/chat/completions', {
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Hello!"
      }
    ],
    max_tokens: 10
  }).then((res2) => {
    res.end(JSON.stringify(res2))
  })

}).listen(9001)
