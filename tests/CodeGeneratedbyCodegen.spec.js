import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('rahulshettyacademy');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('learning');
  await page.locator('label:nth-child(2) > .checkmark').click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('combobox').selectOption('consult');
  await page.getByLabel('I Agree to the terms and').check();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Free Access to InterviewQues/' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'mentor@rahulshettyacademy.com' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
});