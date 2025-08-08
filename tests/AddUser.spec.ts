import { test, expect } from '@playwright/test';
test('long-running test', async ({ page }) => {
test.setTimeout(120_000); // Set timeout to 120 seconds
// Your test logic here
});

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
  test('Navigate to Users', async ({ page }) => {
    await expect(page).toHaveURL('https://skunkworks.jehan.acxxon.com/overview/energy-map');
    await page.waitForTimeout(9000)
    await page.locator('canvas').first();
    
    //Navigate to User management
    await page.getByRole('listitem').filter({ hasText: 'User Management' }).click();
    await page.getByRole('link', { name: 'Users' }).click();

    //Add User button
    await page.getByRole('button', { name: 'Add User' }).click();
    //Choose Role
    await page.waitForTimeout(2000)
    await expect(page.locator('text=Beyonce')).toBeVisible()    
    await page.getByRole('button', { name: 'Beyonce' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    //Information tab
    await page.getByRole('textbox', { name: 'First Name *' }).click();
    await page.getByRole('textbox', { name: 'First Name *' }).fill('Bobby');
    await page.getByRole('textbox', { name: 'First Name *' }).press('Tab');
    await page.getByRole('textbox', { name: 'Last Name *' }).fill('Carter');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill('test-bob');
    await page.getByRole('textbox', { name: 'Email Address *' }).click();
    await page.getByRole('textbox', { name: 'Email Address *' }).fill('bobby-test@givmail.com');
    await page.getByRole('textbox', { name: 'Contact Number' }).click();
    await page.getByRole('textbox', { name: 'Contact Number' }).fill('+63 9123122221');
    await page.getByRole('textbox', { name: 'Home Address' }).click();
    await page.getByRole('textbox', { name: 'Home Address' }).fill('123 Sample Street, Sample Municipality');
    await page.getByRole('textbox', { name: 'Employee ID No.' }).click();
    await page.getByRole('textbox', { name: 'Employee ID No.' }).fill('1231');
    //License to Expiration tabs
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: '3 Months' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    //user created successfully 
    await page.waitForTimeout(2100)
    await page.waitForSelector('text=New User Added');
    await page.getByRole('button', { name: 'OK' }).click();

  });
});