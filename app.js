// Get the fuel type select element
const fuelTypeSelect = document.getElementById('fuelType');
// Get the fuel cost input element
const fuelCostInput = document.getElementById('fuelCost');

// Function to calculate the fuel cost based on the selected fuel type
function calculateFuelCost() {
  const selectedFuelType = fuelTypeSelect.value;
  let cost = 0;

  // Assigning cost based on selected fuel type
  switch (selectedFuelType) {
    case 'petrol':
      cost = 110.2; // Set the cost for petrol
      break;
    case 'diesel':
      cost = 103.7; // Set the cost for diesel
      break;
    // Add more cases for other fuel types as needed
    default:
      cost = 0; // Default cost
  }

  // Set the calculated cost to the fuel cost input field
  fuelCostInput.value = cost.toFixed(2); // Displaying cost up to 2 decimal places
}

// Add an event listener to the fuel type select element to calculate fuel cost on change
fuelTypeSelect.addEventListener('change', calculateFuelCost);

// Initially calculate the fuel cost based on the default selected fuel type
calculateFuelCost();
// ... (previous JavaScript code)

const fuelQuantityInput = document.getElementById('fuelQuantity');
const totalCostInput = document.getElementById('totalCost');

// Function to calculate total cost based on fuel quantity and cost per liter
function calculateTotalCost() {
  const fuelCost = parseFloat(fuelCostInput.value);
  const fuelQuantity = parseFloat(fuelQuantityInput.value);
  
  const totalCost = fuelCost * fuelQuantity;
  totalCostInput.value = isNaN(totalCost) ? '' : totalCost.toFixed(2);
}

// Add an event listener to the fuel quantity input element to calculate total cost on change
fuelQuantityInput.addEventListener('input', calculateTotalCost);

function getLocation() {
    const nearbyStations = [
      { id: 1, name: "Fuel Station 1", address: "123 Main St" },
      { id: 2, name: "Fuel Station 2", address: "456 Elm St" },
      { id: 3, name: "Fuel Station 3", address: "789 Oak St" }
      // Add more stations as needed
    ];
  
    showNearbyStations(nearbyStations);
  }
  
  function showNearbyStations(nearbyStations) {
    const stationsList = document.getElementById("stationsList");
  
    stationsList.innerHTML = "";
  
    if (nearbyStations.length > 0) {
      nearbyStations.forEach(station => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = `Select ${station.name}`;
        button.onclick = function() {
          selectStation(station);
        };
        li.appendChild(button);
        stationsList.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = "No nearby fuel stations found.";
      stationsList.appendChild(li);
    }
  }
  
  function selectStation(station) {
    const selectedStationDiv = document.getElementById("selectedStation");
    selectedStationDiv.innerHTML = `
      <h2>Selected Station</h2>
      <p>Name: ${station.name}</p>
      <p>Address: ${station.address}</p>
      <button onclick="confirmOrder(${station.id})">Proceed with Delivery</button>
    `;
  }
  
  function confirmOrder(stationId) {
    const orderConfirmationDiv = document.getElementById("orderConfirmation");
    orderConfirmationDiv.innerHTML = `
      <h2>Order Confirmation</h2>
      <p>You have selected Station ID: ${stationId}</p>
      <p>Delivery Confirmed!</p>
      <button onclick="updateDeliveryStatus(${stationId})">Check Delivery Status</button>
    `;
  }
  
  function updateDeliveryStatus(stationId) {
    const deliveryStatusDiv = document.getElementById("deliveryStatus");
    deliveryStatusDiv.innerHTML = `
      <h2>Delivery Status</h2>
      <p>Delivery for Station ID ${stationId} is on the way!</p>
      <p>Estimated time of arrival: 30 minutes</p>
    `;
    showPaymentOptions();
  }
  
  function showPaymentOptions() {
    const paymentOptionsDiv = document.getElementById("paymentOptions");
    paymentOptionsDiv.innerHTML = `
      <h2>Payment Options</h2>
      <p>Please select a payment method:</p>
      <select>
        <option value="credit">Credit Card</option>
        <option value="debit">Debit Card</option>
        <option value="paypal">PayPal</option>
        <option value="cash">Cash on Delivery</option>
      </select>
      <button onclick="completePayment()">Make Payment</button>
    `;
  }
  
  function completePayment() {
    const paymentOptionsDiv = document.getElementById("paymentOptions");
    paymentOptionsDiv.innerHTML = `
      <h2>Payment Complete</h2>
      <p>Your payment has been processed. Thank you for using our service!</p>
    `;
  }
  