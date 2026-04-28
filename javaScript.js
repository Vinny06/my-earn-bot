const userSharePercent = 0.60; // 60% for Free users
const adRevenueValue = 0.01; // Avg value of 1 ad in 2026

function onAdFinished() {
    let userEarned = adRevenueValue * userSharePercent;
    let adminEarned = adRevenueValue * (1 - userSharePercent);

    // Update Dashboard
    currentBalance += userEarned;
    document.getElementById('userBalance').innerText = currentBalance.toFixed(3) + " Stars";
    
    // Save to Database (Supabase)
    saveEarningsToDB(userId, userEarned, adminEarned);
}
