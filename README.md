# EdgeOne Payload CMS With MongoDB Website Template

This is a PayloadCMS with MongoDB Website Template designed to power websites, blogs, or portfolios ranging from small projects to enterprise-level applications. This repository includes a fully functional backend, an enterprise-grade admin panel, and a beautifully designed, production-ready website.

This template is ideal for:

- Personal or enterprise-grade websites, blogs, or portfolios
- Content publishing platforms with fully featured publication workflows
- Exploring Payload's capabilities

## Quick Start

### Deploying to EdgeOne Pages

1. Prepare the necessary environment variables:
   - **DATABASE_URI**: Your MongoDB connection string like:
     ```
     mongodb+srv://username:password@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
     ```
   - **PAYLOAD_SECRET**: This should be a long, unguessable, strong password. You can use a password manager to generate one. For example, run:
     ```
     openssl rand -base64 32
     ```
   - **NEXT_PUBLIC_SERVER_URL**: Your website URL like: `https://payload-mongodb-starter.edgeone.app`
   - **PREVIEW_SECRET**: Used to validate preview requests
   - **S3_BUCKET**: S3 Storage Configuration 
   - **S3_REGION**: S3 Storage Configuration 
   - **S3_ACCESS_KEY_ID**: S3 Storage Configuration 
   - **S3_SECRET_ACCESS_KEY**: S3 Storage Configuration 
   - **S3_ENDPOINT**: S3 Storage Configuration 

2. One-click deployment to EdgeOne Pages:

    [![Use EdgeOne Pages to deploy](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?repository-url=https%3A%2F%2Fgithub.com%2Fzhoujie0531%2Fpayload-mongodb-starter)

3. After filling in the environment variables, click the **Create** button to start the deployment.

### Local Development

1. Create a `.env` file and configure the variables:

```env
# Database connection string
DATABASE_URI=YOUR_MONGODB_URL_HERE
# Used to encrypt JWT tokens. This should be a long, unguessable, strong password. You can use a password manager to generate one.
PAYLOAD_SECRET=YOUR_PAYLOAD_SECRET_HERE
# Used to configure CORS, format links, and more. No trailing slash.
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
# Used to validate preview requests
PREVIEW_SECRET=YOUR_SECRET_HERE
# S3 Storage Configuration 
S3_BUCKET=xxx
S3_REGION=xxx
S3_ACCESS_KEY_ID=xxx
S3_SECRET_ACCESS_KEY=xxx
S3_ENDPOINT=xxx
```

2. `pnpm install && pnpm dev` to install dependencies and start the dev server
3. open `http://localhost:3000` to open the app in your browser

### Learn More

[Payload Docs](https://payloadcms.com/docs/getting-started/what-is-payload)