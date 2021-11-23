import { test, expect } from "@playwright/test";

test.describe("basic test", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    await page.goto("http://localhost:5000");
    page.on("console", (msg) => console.log(msg.text()));
  });
  test.use({ viewport: { width: 500, height: 800 } });

  test("Find Content", async ({ page }) => {
    const title = page.locator("header");
    await expect(title).toHaveText("Frontend Mentor Feedback Board");

    await page.click("[data-test='burger']");
  });
});
