const puppeteer = require('puppeteer');

// Function to click the element
async function clickElement() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://docs.google.com/forms/u/0/d/e/1FAIpQLScH7GTtlPqxFKxJkuiA0ACy2T2opzgf4pYN3Qr0PWFEE0__4Q/formResponse'); // Replace 'YOUR_WEBSITE_URL' with the URL of the webpage containing the element to click
    await page.waitForSelector('.Fvio9d.MbhUzd'); // Wait for the element with the specified class to appear
    await page.click('.Fvio9d.MbhUzd'); // Click on the element
    await browser.close();
}

// Function to execute the clickElement function at a specific time
function executeAtSpecificTime(hour, minute) {
    const now = new Date();
    const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);

    const timeout = targetTime - now;
    if (timeout < 0) {
        console.log('Specified time has already passed.');
        return;
    }

    console.log(`Waiting for ${timeout / 1000} seconds until ${hour}:${minute}.`);
    setTimeout(clickElement, timeout);
}

// Replace '2' and '10' with the hour and minute you want to execute the function (e.g., 2:10)
executeAtSpecificTime(14, 32); // 14:10 (2:10 PM)

