const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none']
    });
    const page = await browser.newPage();

    // IDs of the 5 concepts in AdGallery.tsx
    const adIds = [
        'ad-invisible-wife',
        'ad-3am-scroller',
        'ad-silence',
        'ad-kiss',
        'ad-phone-scroll'
    ];

    try {
        console.log('Navigating to Ad Gallery...');
        // Use large viewport to ensure all are rendered (though flex wrap might put them down)
        // I'll set a huge height to prevent scroll issues
        await page.setViewport({ width: 1920, height: 4000, deviceScaleFactor: 2 });
        await page.goto('http://localhost:5174/ad-gallery', { waitUntil: 'networkidle0' });

        // Wait for content (first ad)
        await page.waitForSelector('#ad-invisible-wife');

        // Capture each card
        for (const id of adIds) {
            console.log(`Capturing #${id}...`);
            const element = await page.$(`#${id}`);
            if (element) {
                await element.screenshot({
                    path: path.join(__dirname, 'ad-creatives', `${id}.jpg`),
                    quality: 95,
                    type: 'jpeg'
                });
                console.log(`Saved ${id}.jpg`);
            } else {
                console.error(`Element #${id} not found!`);
            }
        }

        // Capture Overview of Gallery
        console.log('Capturing Gallery Overview...');
        await page.screenshot({
            path: path.join(__dirname, 'ad-creatives', 'ad-gallery-overview.jpg'),
            fullPage: true,
            quality: 90,
            type: 'jpeg'
        });

    } catch (e) {
        console.error('Error capturing ads:', e);
    }

    await browser.close();
    console.log('Capture complete.');
})();
