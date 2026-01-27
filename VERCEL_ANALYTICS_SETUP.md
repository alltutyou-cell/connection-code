# Vercel Web Analytics Setup

This guide documents how Vercel Web Analytics has been implemented in this project.

## Overview

Vercel Web Analytics is enabled for this project to track visitor behavior and page views. This guide explains the setup and how to use it.

## Prerequisites

- A Vercel account (required for viewing analytics data)
- A Vercel project linked to this repository
- The Vercel CLI installed (optional, for local deployment testing)

## Installation

The `@vercel/analytics` package has already been installed as a dependency in this project:

```bash
npm install @vercel/analytics
```

Current version: `^1.6.1`

## Integration

### React App Integration

Since this project is built with React and Vite, the `Analytics` component has been integrated into the main `App.tsx` file:

```tsx
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Analytics />
    </Router>
  );
};
```

The `Analytics` component is placed at the root level to ensure tracking works across all routes in the application.

## Features

### Automatic Tracking

The Analytics component automatically tracks:
- **Page Views**: Every time a user navigates to a new route
- **Web Vitals**: Core Web Vitals metrics (LCP, FID, CLS)
- **Custom Events**: Support for tracking custom user interactions

### Route Support

Since we're using React Router, the Analytics component includes built-in route detection to properly attribute page views to specific routes.

## Enabling in Vercel Dashboard

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project ("the-connection-code-sales-page")
3. Click the **Analytics** tab
4. Click **Enable** to activate Web Analytics

> **Note:** Enabling Web Analytics will add new routes scoped at `/_vercel/insights/*` after your next deployment.

## Deployment

To start collecting analytics data:

1. Deploy your app to Vercel:
   ```bash
   npm run build
   vercel deploy
   ```

2. Or commit your changes and push to your connected Git repository:
   ```bash
   git push origin main
   ```

3. Vercel will automatically deploy your changes when you push to the main branch

## Viewing Analytics Data

Once your app is deployed and users have visited your site:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. After a few days of visitor traffic, you'll be able to explore your data

### Available Metrics

- **Page Views**: Total number of page views and unique visitors
- **Web Vitals**: Core Web Vitals performance metrics
- **Top Pages**: Most visited pages on your site
- **Referrers**: Where your visitors are coming from
- **Countries/Regions**: Geographic distribution of visitors

## Verifying Setup

To verify that Web Analytics is properly configured:

1. Build and deploy the application
2. Visit your deployed site
3. Open your browser's Developer Tools (F12)
4. Go to the **Network** tab
5. Look for requests to `/_vercel/insights/view`

If you see these requests, analytics tracking is working correctly.

## Custom Events (Pro/Enterprise Only)

Users on Vercel Pro and Enterprise plans can track custom events such as:
- Button clicks
- Form submissions
- Purchases
- Custom user interactions

To track custom events, import and use the `track` function:

```tsx
import { track } from "@vercel/analytics";

// Track a custom event
track("purchase", {
  value: 19.00,
  currency: "USD"
});
```

## Environment Configuration

The current project has Vercel Analytics configured globally. No additional environment variables are required for basic analytics functionality.

## Privacy & Compliance

Vercel Web Analytics complies with:
- GDPR requirements
- CCPA requirements
- No personal data collection
- No third-party cookies

For more information, see [Vercel's privacy policy documentation](https://vercel.com/docs/analytics/privacy-policy).

## Troubleshooting

### Analytics Data Not Appearing

- Ensure your project is deployed to Vercel
- Wait at least a few minutes after deployment for data to start appearing
- Check that Analytics is enabled in your Vercel project settings
- Verify the requests to `/_vercel/insights/view` are being made

### Build Issues

If you encounter build issues after adding analytics:

1. Clear your dependencies:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Rebuild the project:
   ```bash
   npm run build
   ```

## Next Steps

- [Learn more about using the `@vercel/analytics` package](https://vercel.com/docs/analytics/package)
- [Set up custom events](https://vercel.com/docs/analytics/custom-events)
- [Learn about filtering and analyzing data](https://vercel.com/docs/analytics/filtering)
- [Explore pricing and limits](https://vercel.com/docs/analytics/limits-and-pricing)
- [Review the privacy policy](https://vercel.com/docs/analytics/privacy-policy)

## Support

For additional help with Vercel Web Analytics, visit:
- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Vercel Support](https://vercel.com/support)
