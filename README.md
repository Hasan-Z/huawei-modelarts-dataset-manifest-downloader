# ModelArts Dataset Manifest Downloader

Chrome Manifest V3 extension for discovering ModelArts projects/workspaces/datasets using the current logged-in browser session and downloading `data.manifest`.

## Load
Open `chrome://extensions`, enable Developer mode, choose **Load unpacked**, and select this folder.

## Unit tests
Requires Node.js 18+:

```bash
node --test tests/api.test.js
```

The extension does not store passwords, IAM tokens, or AppCodes.
