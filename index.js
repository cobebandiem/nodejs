// nó tải thư viện từ node_modules rùi gắn vào biến express
const express = require('express');
// gọi hàm để trả về 1 instants đại diện cho app của bạn
const app = express()
// muốn run website ở cái cổng nào
const port = 3000
// định ngĩa route
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// nó sẽ lắng nghe cái cổng Port 
// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})