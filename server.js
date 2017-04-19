import http from 'http';
const PORT = 3002;

const server = http.createServer((req, res)=> {
    res.end('Yo, I have created node server successfully!!!')
});


server.listen(PORT, (err) => {
    if (err) {
        return console.log('Something bad happened', err)
    }

    console.log(`Server is listening on ${PORT}`)
});

