const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

// Seach Functionality
test('Seach Functionality', async ({ page }) => {
    // Launch a new browser instance
 const browser = await chromium.launch();

   // Navigate to the Amazon login page
   await page.goto('https://www.amazon.in');

 // Locate and interact with the login button
 await page.type('#twotabsearchtextbox','Redmi 13C');
 await page.keyboard.press('Enter');

 const isLoggedIn = await page.getByRole('link', { name: 'Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage) | 90Hz Display | 50MP AI' }).nth(2);

await expect(isLoggedIn).toBeVisible();
await expect(isLoggedIn).toContainText("Redmi 13C");

await isLoggedIn.click();

await page.waitForTimeout(3000);

 await context.pages();

 await context.bringToFront();
  // Switch to the new tab (second tab)
  // const newPage = allPages[1];

const addToWishListBtn = await page.getByText('Add to Wish List');

await addToWishListBtn.scrollIntoViewIfNeeded();

await expect(addToWishListBtn).toBeVisible();

await page.locator(addToWishListBtn).click();

// const isWishListAdded = await page.isVisible('#ap_email');

// if (isLogisWishListAddedgedIn) {
//   console.log('Item added in wishlist successful!');
// } else {
//   console.log('Item added in wishlist failed.');
// }


     // Close the browser
  await browser.close();
});