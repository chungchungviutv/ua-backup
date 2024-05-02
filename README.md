# ua-backup

A script to backup Google Universal Analytics data to a CSV file.

## Installation

```bash
# env values described in below
cp .env.example .env

yarn
yarn run
```

### `ACCESS_TOKEN`

Access token for calling Google Analytics API. Easiest way is to get it from [Google OAuth 2 Playground](https://developers.google.com/oauthplayground).

1. Go to [Google OAuth 2 Playground](https://developers.google.com/oauthplayground)
2. Authorize on the scope `https://www.googleapis.com/auth/analytics.readonly`
3. Generate the access token and copy to `.env` file

### `GA_ENDPOINT`

Google Analytics Core Reporting API v3 endpoint. Can be generated using [UA Query Explorer](https://ga-dev-tools.google/query-explorer/).

## Reference

- [What Is The Core Reporting API](https://developers.google.com/analytics/devguides/reporting/core/v3/)
- [Core Reporting API - Reference Guide](https://developers.google.com/analytics/devguides/reporting/core/v3/reference)
- [Core Reporting API - OAuth 2.0 Authorization](https://developers.google.com/analytics/devguides/reporting/core/v3/authorization#oauth_20_playground)
