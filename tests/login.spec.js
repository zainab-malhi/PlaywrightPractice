import { test, expect } from "@playwright/test";

test("Login", async ({ page }) => {
  await page.goto("https://naveenautomationlabs.com/opencart/");

  const emailAdress = await page.locator("input#input-email");
  const password = await page.locator("input#input-password");
  const loginButton = await page.locator("input[value='Login']");

  const myAccountTab = await page.locator(
    "div#top-links > ul > li:nth-child(2) >a"
  );
  const loginLink = await page.locator(
    "ul[class='dropdown-menu dropdown-menu-right'] > li:last-child >a"
  );

  await myAccountTab.click();
  await loginLink.click();

  emailAdress.fill("zainab@gmail.com");
  password.fill("admin123");
  loginButton.click();

  await expect(
    await page.locator("div#content > h2:first-child").textContent()
  ).toEqual("My Account");
});
