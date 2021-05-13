import { app } from './app'
import http from 'http'

http.createServer(app).listen(3400)
console.log('Server running in: http://localhost:3400')
