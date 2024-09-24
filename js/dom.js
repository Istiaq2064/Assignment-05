
// document.addEventListener('DOMContentLoaded', function () {
//     // Set initial total donations amount
//     let totalDonations = 5000; // Starting donation balance
//     const totalDonationElement = document.querySelector('.flex.items-center.gap-2 > span');
//     totalDonationElement.textContent = `${totalDonations} BDT`;

//     // Function to handle donations
//     function handleDonation(inputElement, balanceElement) {
//         const donationAmount = parseFloat(inputElement.value);

//         if (isNaN(donationAmount) || donationAmount <= 0) {
//             alert('Please enter a valid donation amount.');
//             return;
//         }

//         // Check if there's enough balance for donation
//         if (donationAmount > totalDonations) {
//             alert('Insufficient balance to donate this amount.');
//             return;
//         }

//         // Update the section's balance
//         let currentSectionBalance = parseFloat(balanceElement.textContent.split(' ')[0]);
//         currentSectionBalance += donationAmount;
//         balanceElement.textContent = `${currentSectionBalance} BDT`;

//         // Deduct from the total donation amount
//         totalDonations -= donationAmount;
//         totalDonationElement.textContent = `${totalDonations} BDT`;

//         // Clear the input field
//         inputElement.value = '';
//     }

//     // Section 1 Donation (Flood at Noakhali)
//     const donateBtn1 = document.getElementById('donate-btn1');
//     const inputAddMoney1 = document.getElementById('input-add-money');
//     const accountBalance1 = document.getElementById('account-balance');

//     donateBtn1.addEventListener('click', function () {
//         handleDonation(inputAddMoney1, accountBalance1);
//     });

//     // Section 2 Donation (Flood at Feni)
//     const donateBtn2 = document.getElementById('donote-btn2');
//     const inputAddMoney2 = document.getElementById('donate-input-amount');
//     const accountBalance2 = document.getElementById('donation-amount');

//     donateBtn2.addEventListener('click', function () {
//         handleDonation(inputAddMoney2, accountBalance2);
//     });

//     // Section 3 Donation (Quota protest)
//     const donateBtn3 = document.getElementById('donote-btn-qouta');
//     const inputAddMoney3 = document.getElementById('donate-input-amount-qotoa');
//     const accountBalance3 = document.getElementById('-add-donate-qouta');

//     donateBtn3.addEventListener('click', function () {
//         handleDonation(inputAddMoney3, accountBalance3);
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    let totalDonations = 5000; // Starting donation balance
    const totalDonationElement = document.querySelector('.flex.items-center.gap-2 > span');
    totalDonationElement.textContent = `${totalDonations} BDT`;
    
    const donationHistory = []; // Array to store donation history

    // Function to handle donations
    function handleDonation(inputElement, balanceElement) {
        const donationAmount = parseFloat(inputElement.value);

        if (isNaN(donationAmount) || donationAmount <= 0) {
            alert('Please enter a valid donation amount.');
            return;
        }

        // Check if there's enough balance for donation
        if (donationAmount > totalDonations) {
            alert('Insufficient balance to donate this amount.');
            return;
        }

        // Update the section's balance
        let currentSectionBalance = parseFloat(balanceElement.textContent.split(' ')[0]);
        currentSectionBalance += donationAmount;
        balanceElement.textContent = `${currentSectionBalance} BDT`;

        // Deduct from the total donation amount
        totalDonations -= donationAmount;
        totalDonationElement.textContent = `${totalDonations} BDT`;

        // Clear the input field
        inputElement.value = '';

        // Record the donation in history
        donationHistory.push(donationAmount);

        // Show success modal
        showSuccessModal();
    }

    // Function to show the success modal
    function showSuccessModal() {
        const modal = document.getElementById('success-modal');
        modal.classList.remove('hidden');
    }

    // Function to close the success modal
    function closeSuccessModal() {
        const modal = document.getElementById('success-modal');
        modal.classList.add('hidden');
    }

    // Function to show donation history
    function showDonationHistory() {
        const historyList = document.getElementById('history-list');
        historyList.innerHTML = ''; // Clear previous history

        donationHistory.forEach(amount => {
            const listItem = document.createElement('li');
            listItem.textContent = `${amount} BDT`;
            historyList.appendChild(listItem);
        });

        document.getElementById('donation-history').classList.remove('hidden');
    }

    // Function to close donation history
    function closeDonationHistory() {
        document.getElementById('donation-history').classList.add('hidden');
    }

    // Section 1 Donation (Flood at Noakhali)
    const donateBtn1 = document.getElementById('donate-btn1');
    const inputAddMoney1 = document.getElementById('input-add-money');
    const accountBalance1 = document.getElementById('account-balance');

    donateBtn1.addEventListener('click', function () {
        handleDonation(inputAddMoney1, accountBalance1);
    });

    // Section 2 Donation (Flood at Feni)
    const donateBtn2 = document.getElementById('donote-btn2');
    const inputAddMoney2 = document.getElementById('donate-input-amount');
    const accountBalance2 = document.getElementById('donation-amount');

    donateBtn2.addEventListener('click', function () {
        handleDonation(inputAddMoney2, accountBalance2);
    });

    // Section 3 Donation (Quota protest)
    const donateBtn3 = document.getElementById('donote-btn-qouta');
    const inputAddMoney3 = document.getElementById('donate-input-amount-qotoa');
    const accountBalance3 = document.getElementById('-add-donate-qouta');

    donateBtn3.addEventListener('click', function () {
        handleDonation(inputAddMoney3, accountBalance3);
    });

    // Event listener for closing the modal
    document.getElementById('close-modal').addEventListener('click', closeSuccessModal);
});

