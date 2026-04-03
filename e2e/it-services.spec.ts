import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and shows hero section with Drupal content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Sentinel/)
    await expect(page.locator('h1').first()).toBeVisible()
  })

  test('displays stats section from paragraphs', async ({ page }) => {
    await page.goto('/')
    // Stats from paragraph items: 99.97%, 350+, 18,000+, <15 min
    await expect(page.getByText('99.97%')).toBeVisible()
    await expect(page.getByText('350+')).toBeVisible()
  })

  test('has navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: /services/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /case studies/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /team/i }).first()).toBeVisible()
  })
})

test.describe('Services', () => {
  test('lists services from Drupal', async ({ page }) => {
    await page.goto('/services')
    await expect(page.getByRole('heading', { name: 'Managed IT Services' })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Cybersecurity/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Cloud Solutions/ })).toBeVisible()
  })

  test('service detail page loads', async ({ page }) => {
    await page.goto('/services/managed-it')
    await expect(page.getByRole('heading', { name: 'Managed IT Services' })).toBeVisible()
  })
})

test.describe('Case Studies', () => {
  test('lists case studies from Drupal', async ({ page }) => {
    await page.goto('/case-studies')
    await expect(page.getByRole('heading', { name: /Meridian Health/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Sterling Law/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Apex Manufacturing/ })).toBeVisible()
  })

  test('case study detail page loads', async ({ page }) => {
    await page.goto('/case-studies/meridian-health')
    await expect(page.getByRole('heading', { name: /Meridian Health/ })).toBeVisible()
  })
})

test.describe('Team', () => {
  test('lists team members from Drupal', async ({ page }) => {
    await page.goto('/team')
    await expect(page.getByRole('heading', { name: 'David Park' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Rachel Kim' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Marcus Thompson' })).toBeVisible()
  })

  test('team member detail page loads', async ({ page }) => {
    await page.goto('/team/david-park')
    await expect(page.getByRole('heading', { name: 'David Park' })).toBeVisible()
  })
})

test.describe('Static Pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: /About Sentinel/ })).toBeVisible()
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.getByRole('heading', { name: /Contact/ })).toBeVisible()
  })
})
