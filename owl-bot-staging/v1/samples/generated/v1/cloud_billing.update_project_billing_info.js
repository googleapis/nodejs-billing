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
  // [START billing_update_project_billing_info_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the project associated with the billing information
   *  that you want to update. For example, `projects/tokyo-rain-123`.
   */
  // const name = 'abc123'
  /**
   *  The new billing information for the project. Read-only fields are ignored;
   *  thus, you can leave empty all fields except `billing_account_name`.
   */
  // const projectBillingInfo = ''

  // Imports the Billing library
  const {CloudBillingClient} = require('@google-cloud/billing').v1;

  // Instantiates a client
  const billingClient = new CloudBillingClient();

  async function updateProjectBillingInfo() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await billingClient.updateProjectBillingInfo(request);
    console.log(response);
  }

  updateProjectBillingInfo();
  // [END billing_update_project_billing_info_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
