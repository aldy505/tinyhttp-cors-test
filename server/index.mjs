import { App } from '@tinyhttp/app'
import { cors } from './../cors_middleware/dist/index.cjs'

const app = new App()

const corsRegex = {origin: /(?:http:\/\/)?localhost:3000/}
const corsNormal = {origin: 'http://localhost:3000'}
const corsArray = {origin: ['http://localhost:3000', 'http://localhost:5000']}
app
    .get('/', cors(corsNormal), (req, res) => {
        res.status(200).json(
            {
                headers: req.headers,
                origin: req.headers.origin,
                date: new Date()
            }
        )
    })
    .get('/regex', cors(corsRegex), (req, res) => {
        res.status(200).json(
            {
                headers: req.headers,
                origin: req.headers.origin,
                date: new Date()
            }
        )
    })
    .get('/array', cors(corsArray), (req, res) => {
        res.status(200).json(
            {
                headers: req.headers,
                origin: req.headers.origin,
                date: new Date()
            }
        )
    })
    .listen(3100, () => {
        console.log("Server started on http://localhost:3100")
    }, '0.0.0.0')