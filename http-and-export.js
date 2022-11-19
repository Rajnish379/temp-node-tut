const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        console.log(req)
        // res.write('Hello World');
        // res.end()
        res.end('Hello Worlds')
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for
    <a href="/">Back home</a>`)
    
});


const names = require('./4-name')
const flavour = require('./6-alternative-flavor')

// setInterval(()=> {
//     console.log('Helo world')
// },1000)

server.listen(3000)

// console.log('Listening on port 3000...')
// console.log(module)
// console.log(names)
// console.log(flavour)
// require('./mind-grenade')