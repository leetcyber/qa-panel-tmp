require('http').createServer((q,r)=>r.end('v1 '+(process.env.PORT||''))).listen(process.env.PORT||3000);
// v2
