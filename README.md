# AWS Eraser Web 🧹

The official landing page and documentation hub for **AWS Eraser** — designed for single-click serverless deployment on **Vercel**.

![AWS Eraser Landing Page](https://raw.githubusercontent.com/abhinandnm/aws-eraser/main/assets/banner.png)

## Overview

This lightweight, zero-build static web application features:
- **Instant GitHub Download Redirects:** All primary download buttons redirect users directly to the official [AWS Eraser GitHub Repository](https://github.com/abhinandnm/aws-eraser).
- **Interactive AWS Waste Calculator:** Estimate monthly savings on abandoned EC2 instances, unattached EBS volumes, NAT gateways, and databases.
- **Resource Coverage Matrix:** Interactive filterable grid showcasing cleaned vs preserved resources.
- **Terminal CLI Simulator:** Realistic dark terminal window showcasing `aws_eraser.py` interactive selective purge logs.
- **IAM Permission Guide:** Step-by-step accordion guide for enabling IAM Billing Access as Root User.
- **Vercel Serverless Ready:** Pre-configured with `vercel.json` for security headers, clean URLs, and fast edge caching.

---

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. Open terminal in this folder:
   ```bash
   cd "C:\Users\naduv\OneDrive\Desktop\aws-eraser web"
   ```

2. Run Vercel deploy:
   ```bash
   npx vercel
   ```

3. Follow the prompts to publish instantly to production (`npx vercel --prod`).

### Option 2: Deploy via GitHub + Vercel Dashboard

1. Push this folder to a GitHub repository.
2. Log into [Vercel Console](https://vercel.com).
3. Click **Add New Project** -> **Import Git Repository**.
4. Select the repository and click **Deploy**. Vercel will automatically detect the static site and `vercel.json` configuration.

---

## File Structure

```
aws-eraser web/
├── index.html       # Main landing page HTML structure with SEO tags & Lucide icons
├── styles.css       # Dark mode glassmorphism CSS design system
├── script.js        # Interactive calculator, filters, and GitHub redirect handler
├── vercel.json      # Vercel serverless deployment & security headers config
└── README.md        # Documentation and deployment guide
```

---

## License

This project is licensed under the MIT License.
