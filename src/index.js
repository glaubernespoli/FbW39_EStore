const express = require('express');
const path = require('path');

const server = express();
const PORT = 5000;

const public = path.resolve(__dirname, '../public');
server.use(express.static(public)).listen(PORT, () => {
	console.log(`Server up on port ${PORT}`);
});
