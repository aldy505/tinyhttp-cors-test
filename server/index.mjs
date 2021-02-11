import { App } from '@tinyhttp/app'
import { cors } from './../cors_middleware/dist/index.js'

const app = new App()

// const corsRegex = {origin: /(?:http:\/\/)?localhost:3000/}
// const corsNormal = {origin: 'http://localhost:3000'}
// const corsArray = {origin: ['http://localhost:3000', 'http://localhost:5000']}
app
    .use(cors())
    .options('/', cors())
    .post('/', async (_, res) => {
        res.json({message: "Hello there from POST Request"})
    })
    .get('/', async (_, res) => {
        res.json({message: "Hello there from GET Request"})
    })
    .listen(3100, () => {
        console.log("Server started on http://localhost:3100")
    }, '0.0.0.0')