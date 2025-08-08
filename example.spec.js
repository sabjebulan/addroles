// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Asset Module Test', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to Login Page
    await page.goto('http://skunkworks.tracey.soluxionlab.com/');

    // Login
    await page.fill('input[type="email"]', 'manager@soluxionlab.com');
    await page.fill('input[type="password"]', 'Test12345');
    await page.click('button:has-text("LOGIN")');

    // Wait for landing page to load
    await expect(page.locator('text=Factory Management SCADA')).toBeVisible();

    // Expand navigation
    await page.locator('text=View Full Navigation').click();
  });

  test('Access Assets and open Edit Asset dialog', async ({ page }) => {
    // Navigate to Assets
    await page.locator('text=Assets').click();
    await page.waitForURL('**/configuration/assets');

    // Assert successful redirection
    await expect(page.locator('text=Soluxionlab Inc.')).toBeVisible();

    // Click the 3-dot menu on first asset row
    await page.locator('svg[data-src="/svgicon/CircleHorizontalMore/medium.svg"]').nth(0).click();

    // Confirm the Edit Asset option is visible
    await expect(page.locator('text=Edit Asset')).toBeVisible();
  });
});
