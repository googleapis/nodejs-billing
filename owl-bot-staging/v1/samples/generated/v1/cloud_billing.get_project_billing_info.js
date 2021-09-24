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

function main(name) {
  // [START billing_v1_generated_CloudBilling_GetProjectBillingInfo_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the project for which billing information is
   *  retrieved. For example, `projects/tokyo-rain-123`.
   */
  // const name = 'abc123'

  // Imports the Billing library
  const {CloudBillingClient} = require('@google-cloud/billing').v1;

  // Instantiates a client
  const billingClient = new CloudBillingClient();

  async function getProjectBillingInfo() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await billingClient.getProjectBillingInfo(request);
    console.log(response);
  }

  getProjectBillingInfo();
  // [END billing_v1_generated_CloudBilling_GetProjectBillingInfo_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));