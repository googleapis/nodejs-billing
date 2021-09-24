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

function main(name, account) {
  // [START billing_v1_generated_CloudBilling_UpdateBillingAccount_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the billing account resource to be updated.
   */
  // const name = 'abc123'
  /**
   *  Required. The billing account resource to replace the resource on the server.
   */
  // const account = ''
  /**
   *  The update mask applied to the resource.
   *  Only "display_name" is currently supported.
   */
  // const updateMask = ''

  // Imports the Billing library
  const {CloudBillingClient} = require('@google-cloud/billing').v1;

  // Instantiates a client
  const billingClient = new CloudBillingClient();

  async function updateBillingAccount() {
    // Construct request
    const request = {
      name,
      account,
    };

    // Run request
    const response = await billingClient.updateBillingAccount(request);
    console.log(response);
  }

  updateBillingAccount();
  // [END billing_v1_generated_CloudBilling_UpdateBillingAccount_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));