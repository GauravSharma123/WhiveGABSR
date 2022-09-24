const express = require('express')
const app = express()
const port = 8888

app.get('/', (req, res) => {
  var rate = 0.3
  res.json(
    {
      rate: rate,
    }
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})