import { App } from "./app"

const port = process.env.PORT

const portDocker = 7000
const hostDocker = '0.0.0.0'

new App().server.listen(port, () => {
    console.log(`Rodando na porta http://localhost:${port}`)
});