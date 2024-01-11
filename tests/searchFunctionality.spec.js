const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

// Search Functionality
test('Search Functionality', async ({ page }) => {
   
 const browser = await chromium.launch();
   await page.goto('https://www.amazon.in');


   await page.type('#twotabsearchtextbox','Redmi 13C');
   await page.keyboard.press('Enter');


const selector = 'span:has-text("Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera")';
await page.waitForSelector(selector);
const element = await page.$(selector);
const elementText = await element.evaluate(el => el.textContent);

  await browser.close();
});
