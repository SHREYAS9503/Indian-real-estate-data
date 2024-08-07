// Import required modules
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { spawn } from 'child_process';
import XLSX from 'xlsx';

// Create Express app
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join('views'));

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., CSS, images)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/search', async (req, res) => {
    const { city, min_price, max_price, min_area, max_area } = req.body;

    // Process the input data as needed (e.g., filter properties)
    // Example: Log the received data
    let a = [city, max_price, min_price, max_area, min_area];


    // You can render another view or perform other actions here
    await runPythonScript(a);
    const workbook = XLSX.readFile('output.xlsx');

    // Get the first sheet name
    const sheetName = workbook.SheetNames[0];

    // Get the sheet
    const sheet = workbook.Sheets[sheetName];

    // Convert the sheet to JSON object
    const data = XLSX.utils.sheet_to_json(sheet);

    // Display the JSON object
    console.log(typeof(data));

    res.render('display', { propertiesData: data });

});


function runPythonScript(a) {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('py', ['./index.py', ...a]);
        pythonProcess.stdout.on('data', (data) => {
            resolve(data.toString());
        });
        pythonProcess.on('error', (error) => {
            reject(error);
        });
        pythonProcess.on('close', (code) => {
            if (code !== 0) {
                reject(`Python process exited with code ${code}`);
            }
        });
    });
}

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
