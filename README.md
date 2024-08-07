## Project Description

### Indian Cities Housing Properties 

This project is a web application for filtering house prices based on user inputs such as minimum price, maximum price, minimum square feet, maximum square feet, and city. The application uses a dataset of residential property prices from Indian cities, and the technologies involved include:

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript), CSS
- **Data Processing**: Python with Pandas and NumPy
- **Data Source**: [Kaggle dataset](https://www.kaggle.com/datasets/manishmathias/residential-property-price-indian-cities-dataset)

### How to Run the Project

#### Prerequisites

1. **Node.js**: Install Node.js from [here](https://nodejs.org/).
2. **Python**: Install Python from [here](https://www.python.org/).
3. **Pandas and NumPy**: Install these Python libraries using pip:
   ```bash
   pip install pandas numpy
   ```
4. **XLSX**: Install the XLSX library using npm:
   ```bash
   npm install xlsx
   ```

#### Steps to Run

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SHREYAS9503/Indian-real-estate-data.git
   cd Indian-real-estate-data
   ```

2. **Install Node.js Dependencies**
   ```bash
   npm install
   ```

3. **Start the Express Server**
   ```bash
   node index.js
   ```

4. **Access the Application**
   Open your web browser and navigate to `http://localhost:3000`.

5. **Prepare the Dataset**
   Ensure the `property.csv` file from the Kaggle dataset is placed in the same directory as the Python script.

### Project Components

#### index.js (Express Server)

- **Imports and Configuration**: Import required modules like Express, path, body-parser, child_process, and XLSX.
- **Express App Setup**: Set EJS as the view engine, configure body-parser middleware, and serve static files.
- **Routes**:
  - `GET /`: Render the index page.
  - `POST /search`: Handle the search form submission, process the input data, call the Python script for filtering, read the results from the generated Excel file, and render the results.

#### index.py (Python Script)

- **Data Loading and Cleaning**: Load the dataset, clean it by removing rows with missing property names, convert price and size columns to numeric types.
- **Command-Line Arguments**: Parse arguments for city, max price, min price, max area, and min area.
- **Data Filtering**: Filter the dataset based on the provided criteria.
- **Output Results**: Save the filtered results to an Excel file and print some columns to the console.

### Use Case of the Project

#### Problem Statement

Potential home buyers or real estate agents often need to filter through a vast number of property listings to find those that meet specific criteria. This can be a time-consuming process without the right tools.

#### Solution

This web application provides a user-friendly interface where users can input their desired criteria (price range, area range, and city) to get a list of properties that match their requirements. The application processes the data using Python and presents the results in a readable format on the web page.

#### Detailed Use Case

1. **User Interface**: Users enter their search criteria (min price, max price, min square feet, max square feet, and city) in a form on the website.
2. **Data Submission**: When the form is submitted, the data is sent to the server.
3. **Data Processing**:
   - The server receives the data and spawns a Python process, passing the search criteria as command-line arguments.
   - The Python script loads and cleans the dataset, then filters it based on the provided criteria.
   - The filtered results are saved to an Excel file.
4. **Result Presentation**: The server reads the Excel file, converts it to JSON, and renders the results on a new page.

### Benefits

- **Efficiency**: Quickly filters through large datasets to find relevant properties.
- **User-Friendly**: Simple web interface for entering search criteria and viewing results.
- **Scalability**: Can be easily extended to include more filters or support more cities.

This project provides a practical tool for anyone involved in the real estate market, from buyers and sellers to agents and analysts.
