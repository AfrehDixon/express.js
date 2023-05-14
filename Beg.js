const http = require('http');
const  {readFileSync} = require('fs');



const homepage = readFileSync('./navbar-app/index.html')
const styles = readFileSync('./navbar-app/styles.css')
const logo = readFileSync('./navbar-app/logo.svg')
const script = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) =>{
    console.log(req.url)
    
     
    if (req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        
        res.write(homepage);
        res.end()
    }
    else if (req.url === '/styles.css'){
        res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(styles);
    res.end()
    }
    else if (req.url === '/logo.svg'){
        res.writeHead(200, {'Content-Type': 'image/svg+xml'});
    res.write(logo);
    res.end()
    }
    else if (req.url === '/browser-app.js'){
        res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(script);
    res.end()
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write('hello world');
        res.end()
    }
    res.end()
})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
}   )  
 

