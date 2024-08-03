import { test, expect } from "@playwright/test";

test("Checkout", async ({ page }) => {
  await page.goto("https://naveenautomationlabs.com/opencart/");
  const addToCartButton = await page.locator(
    "div[class='product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12']:first-child > div > div:last-child >button:first-child"
  );

  await addToCartButton.click();
  await page.locator("div#cart >button").click();
  await page.locator("strong > i[class='fa fa-shopping-cart']").click();
  await page.locator("div[class='pull-right']").click();

  // Step 1: Check Out Options
  await page.getByLabel("Guest Checkout").check();
  await page.locator("input[id='button-account']").click();

  //Step 2: Billing Details
  await page.locator("input[id='input-payment-firstname']").fill("Peter");
  await page.locator("input[id='input-payment-lastname']").fill("Mill");
  await page.locator("input[id='input-payment-email']").fill("peter@gmail.com");
  await page.locator("input[id='input-payment-telephone']").fill("123456789");
  await page
    .locator("input[id='input-payment-address-1']")
    .fill("233-1243 Marc Street");
  await page.locator("input[id='input-payment-city']").fill("Ontario");
  await page.locator("input[id='input-payment-postcode']").fill("H913W2");

  await page.getByLabel("Country").selectOption("Canada");
  await page.getByLabel("Region / State").selectOption("Québec");

  await page.locator("input#button-guest").click();

  await page.locator("textarea[name='comment']").fill("Deliver at door step.");
  await page.locator("input[name='agree']").click();
  await page.locator("input[id='button-payment-method']").click();

  await setTimeout(() => {});
});
