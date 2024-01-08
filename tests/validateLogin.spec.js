const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');


// Validate Login
test('Validate Login', async ({ page }) => {
     // Launch a new browser instance
  const browser = await chromium.launch();

  // Navigate to the Amazon login page
  await page.goto('https://www.amazon.in');

  // Locate and interact with the login button
  await page.click('#nav-link-accountList');

  // Fill in the login form with your credentials
  await page.fill('#ap_email', 'jigarrawat@gmail.com');
  
  // Click the login button
  await page.click('#continue');
  
    await page.fill('#ap_password', 'Shivshakti@8992');

      // Click the login button
  await page.click('#signInSubmit');

//   // Wait for the login to complete (you may need to adjust the timing)
  await page.waitForNavigation();

  // Check if the login was successful by looking for a specific element on the logged-in page
  const isLoggedIn = await page.isVisible('//span[contains(normalize-space(),"Enter verification code")]');

  if (isLoggedIn) {
    console.log('Login successful!');
  } else {
    console.log('Login failed.');
  }

  // Close the browser
  await browser.close();
});