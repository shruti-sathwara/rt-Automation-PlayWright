const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

// add to cart functionality
test('ProductCheckout', async ({ page }) => {
    
   const browser = await chromium.launch();
   const context = await browser.newContext();
  
     // Navigate to the Amazon login page
     await page.goto('https://www.amazon.in');

     //login
    await page.click('#nav-link-accountList');
    await page.fill('#ap_email', '');// enter email or mobile number to login
    await page.click('#continue');
        await page.fill('#ap_password', '');// enter password 

    await page.click('#signInSubmit');
    
   // Locate and interact with the login button
   await page.fill('#twotabsearchtextbox','Redmi 13C');
   await page.keyboard.press('Enter');
  

   const selector = 'span:has-text("Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera")';
  
   await page.waitForSelector(selector);
  
  const element = await page.$(selector);
  const elementText = await element.evaluate(el => el.textContent);
  
     await element.click();
     await context.pages();
     await page.bringToFront();
  
    await page.evaluate(() => {
      window.scrollBy(0, 300); 
    });
  
  
  // addToCart
  const addToCart = await page.waitForSelector('//span[@id="atc-declarative"]');
  await addToCart.click();


  // Proceed to checkout
  const proceedToCheckoutButton = await page.waitForSelector('(//span[@id="attach-sidesheet-checkout-button"])[1]');
  await proceedToCheckoutButton.click();

  
  // Close the browser
  await browser.close();
});
