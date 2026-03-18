import * as http from 'http';

const PORT = 3000;

const server = http.createServer ((req, res)=> {
    const url = req.url || '/';
    const method = req.method || 'GET';

    console.log(`[${new Date().toLocaleDateString()}] ${method} ${url}`);

    // Rute: GET /
    if(url === '/' && method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1> Halaman Utama </h1> <p>Selamat datang di server Node.js + Typescript!</p>');
    }
    // Rute: GET/about
    else if (url === '/about' && method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Tentang Kami</h1><p>Ini adalah contoh routing manual sederhana.</p>');
    }
    // Rute: GET/api/users (mengembalikan data JSON)
    else if (url=== '/api/users' && method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify([
            {id:1,name:'Alice'},
            {id:2,name:'Bob'}
        ]));
    }
    // Rute: POST/api/users (simulasi tambah user)
    else if (url === 'url/users' && method==='POST'){
        res.writeHead(201,{'Content-Type': 'application/json'});
        res.end(JSON.stringify({message:'user berhasil dibuat {contoh}'}));
    }
    //Jika tidak ada rute yang cocok, 404 Not Found
    else {
        res.writeHead (404,{'Content-Type':'text/html'});
        res.end('<h1>404 - Halaman tidak ditemukan</h1>');
    }    
});

//Jalankan server

server.listen(PORT, ()=> {
    console.log ('Server sedang berjalan di http://localhost:${PORT}');
});