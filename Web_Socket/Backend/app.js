import express from "express"
import { WebSocketServer } from "ws"

const app = express()

app.get("/", (req, res) => {
  res.send("server will be running")
})
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
})

const wss = new WebSocketServer({ server })

wss.on("connection", (ws) => {
  ws.on("message",(data) => {
    console.log("data from client %s: ",data);
    ws.send("thanks buddy!")
  })
})

// for testing use hoppscotch