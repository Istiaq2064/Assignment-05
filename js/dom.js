// document.getElementById('donate-btn1').addEventListener('click',function(event){
//     event.preventDefault();

//     const addMoney = document.getElementById('input-add-money').value;
//     const addMoneyNumber = parseFloat(addMoney);
//     console.log(addMoneyNumber)

//         const balance = document.getElementById('account-balance').innerText;
//         const balanceNumber = parseFloat(balance)
//         console.log(balance);
//         const newBalance = balanceNumber + balanceNumber;
//         document.getElementById('account-balance').innerText = newBalance;
// })

// section noyakhili

// document.addEventListener('DOMContentLoaded', function () {
//     // Elements for the first donation section
//     const donateBtn1 = document.getElementById('donate-btn1');
//     const inputAddMoney1 = document.getElementById('input-add-money');
//     const accountBalance1 = document.getElementById('account-balance');

//     // Set initial balance
//     let currentBalance1 = 0;

//     // Donation logic for first donation section
//     donateBtn1.addEventListener('click', function () {
//         // Get the entered donation amount
//         const donationAmount = parseFloat(inputAddMoney1.value);

//         // Check if the entered amount is a valid number and greater than zero
//         if (!isNaN(donationAmount) && donationAmount > 0) {
//             // Update the balance by adding the donation amount
//             currentBalance1 += donationAmount;

//             // Display the updated balance
//             accountBalance1.textContent = `${currentBalance1} BDT`;

//             // Clear the input field
//             inputAddMoney1.value = '';
//         } else {
//             alert('Please enter a valid donation amount.');
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    // Set initial total donations amount
    let totalDonations = 5000; // Starting donation balance
    const totalDonationElement = document.querySelector('.flex.items-center.gap-2 > span');
    totalDonationElement.textContent = `${totalDonations} BDT`;

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
});



