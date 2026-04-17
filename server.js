const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const xml = `<Connector command="GetFoldersAndFiles" resourceType="Document">
<CurrentFolder path="/1 - f/" url=""/>
<Folders/>
<Files>
<File desc="1" name="Loading..." size="<iframe srcdoc="<h1>Hola</h1>"></iframe>" url="1"/>
</Files>
</Connector>`;
    
    res.writeHead(200, { 'Content-Type': 'application/xml' });
    res.end(xml);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
