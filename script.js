// Define API endpoint and parameters
let apiUrl = 'http://worldtimeapi.org/api/timezone/Europe/Stockholm'; // Replace with your desired timezone

// Function to get current time, day, and date from API
function updateTime() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const time = `${data.datetime.slice(11, 16)}:${data.datetime.slice(17, 19)}`; // Extract hour, minute, and second from datetime string
      const dayOfWeek = data.day_of_week;
      const weeknum = data.week_number;
      const date = `${data.datetime.slice(0, 4)}/${data.datetime.slice(5, 7)}/${data.datetime.slice(8, 10)}`; // Extract year, month, and day from datetime string

      document.getElementById("time").innerHTML = `${time}`;
      document.getElementById("week").innerHTML = `Vecka: ${weeknum}`;
      document.getElementById("date").innerHTML = `${getDayOfWeek(dayOfWeek)}, ${date}`;
    })
    .catch(error => console.error('Error:', error));
}

// Helper function to get the day of the week (0-6) from the API response
function getDayOfWeek(dayOfWeek) {
  const daysOfWeek = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
  return daysOfWeek[dayOfWeek];
}

// Call the updateTime function every 1000 milliseconds (1 second)
setInterval(updateTime, 1000);

updateTime();