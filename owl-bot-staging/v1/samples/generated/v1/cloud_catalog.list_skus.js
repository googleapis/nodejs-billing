// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent) {
  // [START billing_list_skus_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the service.
   *  Example: "services/DA34-426B-A397"
   */
  // const parent = 'abc123'
  /**
   *  Optional inclusive start time of the time range for which the pricing
   *  versions will be returned. Timestamps in the future are not allowed.
   *  The time range has to be within a single calendar month in
   *  America/Los_Angeles timezone. Time range as a whole is optional. If not
   *  specified, the latest pricing will be returned (up to 12 hours old at
   *  most).
   */
  // const startTime = ''
  /**
   *  Optional exclusive end time of the time range for which the pricing
   *  versions will be returned. Timestamps in the future are not allowed.
   *  The time range has to be within a single calendar month in
   *  America/Los_Angeles timezone. Time range as a whole is optional. If not
   *  specified, the latest pricing will be returned (up to 12 hours old at
   *  most).
   */
  // const endTime = ''
  /**
   *  The ISO 4217 currency code for the pricing info in the response proto.
   *  Will use the conversion rate as of start_time.
   *  Optional. If not specified USD will be used.
   */
  // const currencyCode = 'abc123'
  /**
   *  Requested page size. Defaults to 5000.
   */
  // const pageSize = 1234
  /**
   *  A token identifying a page of results to return. This should be a
   *  `next_page_token` value returned from a previous `ListSkus`
   *  call. If unspecified, the first page of results is returned.
   */
  // const pageToken = 'abc123'

  // Imports the Billing library
  const {CloudCatalogClient} = require('@google-cloud/billing').v1;

  // Instantiates a client
  const billingClient = new CloudCatalogClient();

  async function listSkus() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await billingClient.listSkusAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listSkus();
  // [END billing_list_skus_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
