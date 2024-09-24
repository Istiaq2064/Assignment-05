// Array to store donation history
let donationHistory = [];

// Function to add donation to history
function addDonationToHistory(campaign, amount) {
    const donationTime = new Date().toLocaleString(); // Get the current time
    donationHistory.push({ campaign, amount, time: donationTime }); // Add to history array
    
    // Update the donation history section in the DOM
    const historyList = document.getElementById("donation-history");
    const newHistoryItem = document.createElement("li");
    newHistoryItem.textContent = `${amount} BDT donated to ${campaign} on ${donationTime}`;
    historyList.appendChild(newHistoryItem);
}

// Donation event listeners for each button
document.getElementById("donate-btn1").addEventListener("click", () => {
    const amount = document.getElementById("input-add-money").value;
    if (amount) {
        addDonationToHistory("Flood at Noakhali, Bangladesh", amount);
        document.getElementById("input-add-money").value = ""; // Clear input after adding
    }
});
