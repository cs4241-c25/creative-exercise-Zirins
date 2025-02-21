const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Route to serve SVG data
app.get('/svg-data', (req, res) => {
    const svgContent = `
        <circle cx="250" cy="200" r="50" fill="green">
            <animate attributeName="cx" values="250;150;250" dur="2s" repeatCount="indefinite" />
        </circle>
    `;
    res.send(svgContent);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
