import { test, expect } from '@playwright/test'

test.describe('i18n Functionality', () => {
  test('should display Turkish navigation when visiting /tr', async ({ page }) => {
    await page.goto('/tr')
    
    // Check if Turkish navigation is displayed
    await expect(page.locator('nav')).toContainText('Ana Sayfa')
    await expect(page.locator('nav')).toContainText('Hizmetler')
    await expect(page.locator('nav')).toContainText('Neden n8n')
    await expect(page.locator('nav')).toContainText('Vaka Çalışmaları')
  })

  test('should display English navigation when visiting /en', async ({ page }) => {
    await page.goto('/en')
    
    // Check if English navigation is displayed
    await expect(page.locator('nav')).toContainText('Home')
    await expect(page.locator('nav')).toContainText('Services')
    await expect(page.locator('nav')).toContainText('Why n8n')
    await expect(page.locator('nav')).toContainText('Case Studies')
  })

  test('should switch language and preserve path', async ({ page }) => {
    await page.goto('/en/services')
    
    // Click Turkish language toggle
    await page.click('button:has-text("TR")')
    
    // Should be on Turkish services page
    await expect(page).toHaveURL('/tr/services')
    await expect(page.locator('nav')).toContainText('Hizmetler')
  })

  test('should show correct CTA text for each locale', async ({ page }) => {
    // Test English CTA
    await page.goto('/en')
    await expect(page.locator('a:has-text("Book Call")')).toBeVisible()
    
    // Test Turkish CTA
    await page.goto('/tr')
    await expect(page.locator('a:has-text("Görüşme Planla")')).toBeVisible()
  })

  test('should have correct HTML lang attribute', async ({ page }) => {
    await page.goto('/en')
    const htmlLang = await page.getAttribute('html', 'lang')
    expect(htmlLang).toBe('en')
    
    await page.goto('/tr')
    const htmlLangTR = await page.getAttribute('html', 'lang')
    expect(htmlLangTR).toBe('tr')
  })

  test('should show Turkish content on SMMM Suite with lang param', async ({ page }) => {
    await page.goto('/l/smmm-suite?lang=tr')
    
    // Wait for content to load
    await page.waitForSelector('h1')
    
    // Check if Turkish content is displayed
    await expect(page.locator('h1')).toContainText('SMMM Suite')
    await expect(page.locator('p')).toContainText('Ön-Muhasebe Otomasyonu')
    await expect(page.locator('h3')).toContainText('Topla')
    await expect(page.locator('h3')).toContainText('Kontrol Et')
    await expect(page.locator('h3')).toContainText('İzle')
  })

  test('should show English content on SMMM Suite by default', async ({ page }) => {
    await page.goto('/l/smmm-suite')
    
    // Wait for content to load
    await page.waitForSelector('h1')
    
    // Check if English content is displayed
    await expect(page.locator('h1')).toContainText('SMMM Suite')
    await expect(page.locator('p')).toContainText('Pre-Accounting Automation')
    await expect(page.locator('h3')).toContainText('Collect')
    await expect(page.locator('h3')).toContainText('Control')
    await expect(page.locator('h3')).toContainText('Track')
  })

  test('should have hreflang alternates', async ({ page }) => {
    await page.goto('/en')
    
    // Check for hreflang alternates in head
    const hreflangs = await page.locator('link[hreflang]').all()
    expect(hreflangs.length).toBeGreaterThan(0)
    
    const enHreflang = await page.locator('link[hreflang="en"]').getAttribute('href')
    const trHreflang = await page.locator('link[hreflang="tr"]').getAttribute('href')
    
    expect(enHreflang).toContain('/en')
    expect(trHreflang).toContain('/tr')
  })
})