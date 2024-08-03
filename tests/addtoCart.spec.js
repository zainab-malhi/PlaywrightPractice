import { test, expect } from "@playwright/test";

test("Add to Cart", async ({ page }) => {
  await page.goto("https://naveenautomationlabs.com/opencart/");

  const addToCartButton = await page.locator(
    "div[class='product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12']:first-child > div > div:last-child >button:first-child"
  );

  await addToCartButton.click();

  const cartButton = await page.locator("div#cart >button >span");
  console.log("Cart text" + (await cartButton.textContent()));
  await expect(await cartButton.textContent()).toContain(" 1 item(s)");

  //some times cart Button text is 1 other wise is 0 also

  await page.locator("div#cart >button").click();
  await setTimeout(() => {});
});
