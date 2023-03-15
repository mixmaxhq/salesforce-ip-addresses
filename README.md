# salesforce-ip-addresses
---
An array representing the `Salesforce IP Addresses to Allow`, from [SFDC docs](https://help.salesforce.com/s/articleView?id=000321501&type=1). Use this when in need of allow-listing these IP addresses. Contributions to keep this list updated are welcome 😀.

>Last update: 2021-10-25. If the last update on [this doc](https://help.salesforce.com/s/articleView?id=000321501&type=1) is higher than this date, consider updating this repo.

## Install

`npm install salesforce-ip-addresses --save`

## Usage
This module export, as Default and Named, an array containing the IP addresses.
```js
const SALESFORCE_IP_RANGE = require('salesforce-ip-addresses');
// or
import SALESFORCE_IP_RANGE from 'salesforce-ip-addresses';
// or
import { SALESFORCE_IP_RANGE } from 'salesforce-ip-addresses';

console.log(SALESFORCE_IP_RANGE);
```

## Running tests

Assert, after making your changes, that this repo is exporting as expected via `npm run test`

## Building

`npm run build`

Outputs a commonjs-compatible bundle to `dist/index.js`.

While developing, you can also run `npm run watch` to continually build as you save files.

## Publishing a new version

```
GH_TOKEN=xxx npx semantic-release --no-ci
```
