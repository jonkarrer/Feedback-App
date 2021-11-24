import { test, expect } from "@playwright/test";

test.describe("Mobile Tests", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    await page.goto("http://localhost:5000");
    page.on("console", (msg) => console.log(msg.text()));
  });
  test.use({ viewport: { width: 500, height: 800 } });

  test("Find Content", async ({ page }) => {
    const title = page.locator("[data-test='header']");
    await expect(title).toHaveText("Frontend Mentor Feedback Board");
  });

  test("Open Navbar", async ({ page }) => {
    const navbar = page.locator("[data-test='navbar']");
    expect(navbar).toHaveCSS("display", "none");

    await page.click("[data-test='burger']");
    await expect(navbar).toHaveCSS("display", "block");
  });

  test("Open Filter", async ({ page }) => {
    const modal = page.locator("[data-test='modal']");
    expect(modal).toHaveCSS("display", "none");

    await page.click("[data-test='filter']");
    await expect(modal).toHaveCSS("display", "grid");
  });
});

//open inspector with $ export PWDEBUG=1
//then npx playwright test
