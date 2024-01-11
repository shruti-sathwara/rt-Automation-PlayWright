const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');


// Validate Login functionality
test('Validate Login', async ({ page }) => {

  const browser = await chromium.launch();
  await page.goto('https://www.amazon.in');


  await page.click('#nav-link-accountList');
  await page.fill('#ap_email', ''); // enter email or mobile number to login
  await page.click('#continue');
  await page.fill('#ap_password', '');// enter password 

  // Click the login button
  await page.click('#signInSubmit');

  await page.waitForNavigation();

 console.log("Login successful");
  // Close the browser
  await browser.close();
});
