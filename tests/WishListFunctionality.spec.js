const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

// WishList
test('WishList Functionality', async () => {
    // Launch a new browser instance
 const browser = await chromium.launch();
 const context = await browser.newContext();
 const page = await context.newPage();


   await page.goto('https://www.amazon.in');
 await page.type('#twotabsearchtextbox','iphone 15');
 await page.keyboard.press('Enter');


 const item = await page.locator('[data-cy="title-recipe"] h2 a span')
 const firstItem = item.nth(0)
 
await firstItem.scrollIntoViewIfNeeded();
await expect(await firstItem.innerText()).toContain("iPhone 15");
await firstItem.click();
const newPage = await context.waitForEvent('page');

await expect(newPage.url()).toContain("Apple-iPhone-15");
await newPage.waitForLoadState('domcontentloaded');

const addToWishListBtn = await newPage.getByText("Add to Wish List");
await addToWishListBtn.scrollIntoViewIfNeeded();
await addToWishListBtn.click();
await newPage.waitForTimeout(5000);

 
  await browser.close();
});
