import { test, expect } from '@playwright/test';

test.describe('Jehan Login Page', () => {
  test.beforeEach(async ({ page }) => {
  await page.goto('https://skunkworks.jehan.acxxon.com/');
  await page.setViewportSize({
       width: 1920,
       height: 1080  
    });

  // Login
  
  await page.locator('#email').click();
  await page.locator('#email').fill('user.one@soluxionlab.com');
  await page.locator('#email').press('Tab');
  await page.locator('#password').fill('Test12345');
  await page.getByRole('button', { name: 'Login' }).click();
    });
  test('Navigate to Roles', async ({ page }) => {
    await expect(page).toHaveURL('https://skunkworks.jehan.acxxon.com/overview/energy-map');
    await page.waitForTimeout(9000)
    await page.locator('canvas').first();
    
    //click User management
    await page.getByRole('listitem').filter({ hasText: 'User Management' })
    await page.getByRole('listitem').filter({ hasText: 'User Management' }).click();
    await page.getByRole('link', { name: 'Roles' }).click();
    await page.getByRole('button', { name: 'Add Role' }).click();
    await page.getByRole('textbox', { name: 'Roles Name*' }).click();
    await page.getByRole('textbox', { name: 'Roles Name*' }).fill('Supervisor');
    await page.getByRole('row', { name: 'Alarm Monitoring Alarm' }).getByRole('checkbox').nth(1).check();
    await page.getByText('Advanced Settings').click();
    await page.getByRole('row', { name: 'Company A Yes View Edit' }).getByRole('checkbox').first().check();
    await page.getByRole('row', { name: 'Company A Yes View Edit' }).getByRole('checkbox').first().check();
    await page.getByRole('row', { name: 'Area A Yes View Edit Create' }).getByRole('checkbox').first().check();
    await page.getByRole('row', { name: 'Plant A Yes View Edit Create' }).getByRole('checkbox').first().check();
    await page.getByRole('row', { name: 'Machine A Yes View Edit' }).getByRole('checkbox').first().check();
    await page.getByRole('row', { name: 'Line A Yes View Edit Create' }).getByRole('checkbox').first().check();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('row', { name: 'Events Events management page' }).getByRole('checkbox').nth(1).check();
    await page.getByRole('row', { name: 'Reports Reports page Yes View' }).getByRole('checkbox').nth(1).check();
    await page.getByRole('row', { name: 'Reports Reports page Yes View' }).getByRole('checkbox').nth(2).check();
    await page.getByRole('row', { name: 'Reports Reports page Yes View' }).getByRole('checkbox').nth(3).check();
    await page.getByRole('row', { name: 'Role Management Role' }).getByRole('checkbox').first().check();
    await page.getByRole('row', { name: 'User Management User' }).getByRole('checkbox').first().check();
    await page.getByRole('row', { name: 'User Profile User Profile' }).getByRole('checkbox').first().check();
    await page.getByRole('button', { name: 'Save' }).click()

    await expect(page.locator('text=Create Role Successfully')).toBeVisible()

  });
});