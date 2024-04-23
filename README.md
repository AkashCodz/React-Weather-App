
# React Weather App

This project is a weather application built using React.js. It allows users to search for weather information in various locations around the world.


## Features

- ### Location Search: 
Users can enter a city name or zip code to retrieve weather data for that specific location.

- ### Weather Data Display: 
The app displays essential weather information, including:

- Current temperature (in Celsius and Fahrenheit)
- Weather description (e.g., sunny, rainy, cloudy)
- Feels like temperature
- Humidity
- Wind speed


## Installation

Node.js and npm (or yarn) installed on your system. You can verify by running node -v and npm -v (or yarn -v) in your terminal.

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Configure API Key

- Create a .env file in the project root directory (ignore this file in Git version control).
- Add the following line to the .env file, replacing YOUR_API_KEY with your actual API key:

```http
  REACT_APP_WEATHER_API_KEY=YOUR_API_KEY
```
![image](https://github.com/AkashCodz/React-Weather-App/assets/101062599/9325a5b5-90c2-4524-a5b4-b893ff8e6c03)

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Usage

- Open the app in your browser at http://localhost:5173/.
- Enter a city name in the search bar.
- The app will display the weather information for the entered location.


## Deployment

- To deploy the app to a production environment, you can build a production-ready version using:

```bash
  npm run build  # or yarn build

```

- This will create an optimized build of your React application in the build folder.

You can then host the contents of the build folder on your preferred web hosting platform.

## Screenshots
![Recording 2024-04-23 122544 (1)](https://github.com/AkashCodz/React-Weather-App/assets/101062599/0671421e-a7e1-49f1-8619-3853c3eb175f)


## Further Enhancements

- #### Implement additional weather data display, such as:
- High and low temperatures
- Chance of precipitation
- UV index
- #### Allow users to switch between Celsius and Fahrenheit for temperature display.
- #### Display weather icons based on the weather description.
- #### Implement unit testing for improved code quality and - maintainability.
- #### Explore advanced features like caching and error handling for a more robust user experience.
