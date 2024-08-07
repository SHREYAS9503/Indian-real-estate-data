import pandas as pd
import os
import sys

# Load the dataset from CSV with specified encoding
df = pd.read_csv('property.csv', encoding='latin1')

# Parse command-line arguments
if len(sys.argv) != 6:
    print("Usage: python filename.py city max_price min_price max_area min_area")
    sys.exit(1)

city = sys.argv[1]
max_price = int(sys.argv[2])
min_price = int(sys.argv[3])
max_area = int(sys.argv[4])
min_area = int(sys.argv[5])

# Print some sample rows to verify data
print("Sample rows of the dataset:")
df = df.dropna(subset=['Property_Name'])
df['Price'] = df['Price'].str.replace(',', '').astype(str)
df['Size'] = df['Size'].str.replace(' sq ft', '').str.replace(',', '').astype(float)

df['Price'] = pd.to_numeric(df['Price'], errors='coerce')
df = df.dropna(subset=['Price'])

df['Price'] = df['Price'].astype(int)

# Filter for 'City_name' and 'Price'
filtered_df = df[
    (df['City_name'].str.lower().str.strip() == city.lower().strip()) &
    (df['Price'] >= min_price) & (df['Price'] <= max_price) &
    (df['Size'] >= min_area) & (df['Size'] <= max_area)
]

# Output the filtered results to Excel
if os.path.exists('output.xlsx'):
    os.remove('output.xlsx')
filtered_df.to_excel('output.xlsx', index=False)

# Print filtered columns to console
print(filtered_df[['Property_Name', 'City_name', 'Property_status', 'Project_URL',
                   'Price_per_unit_area', 'Price', 'is_furnished', 'No_of_BHK',
                   'Property_type', 'Size']])
