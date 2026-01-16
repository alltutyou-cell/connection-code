const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // 1. Capture the "Text Message" Ad (AdCreative)
    try {
        console.log('Capturing Text Message Ad...');
        await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });
        await page.goto('http://localhost:5174/ad-preview', { waitUntil: 'networkidle0' });
        await page.screenshot({
            path: path.join(__dirname, 'ad-creatives', 'ad-text-msg-v2.jpg'),
            quality: 90,
            type: 'jpeg'
        });
        console.log('Saved ad-text-msg-v2.jpg');
    } catch (e) {
        console.error('Error capturing Ad Preview:', e);
    }

    // 2. Capture the "5 Concepts" Gallery
    try {
        console.log('Capturing Ad Gallery...');
        await page.setViewport({ width: 1400, height: 2000, deviceScaleFactor: 2 }); // Taller viewport
        await page.goto('http://localhost:5174/ad-gallery', { waitUntil: 'networkidle0' });

        // Capture the full page
        await page.screenshot({
            path: path.join(__dirname, 'ad-creatives', 'ad-gallery-overview.jpg'),
            fullPage: true,
            quality: 90,
            type: 'jpeg'
        });
        console.log('Saved ad-gallery-overview.jpg');
    } catch (e) {
        console.error('Error capturing Ad Gallery:', e);
    }

    await browser.close();
    console.log('Capture complete.');
})();
