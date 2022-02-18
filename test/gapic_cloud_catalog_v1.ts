// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as cloudcatalogModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v1.CloudCatalogClient', () => {
  it('has servicePath', () => {
    const servicePath = cloudcatalogModule.v1.CloudCatalogClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = cloudcatalogModule.v1.CloudCatalogClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = cloudcatalogModule.v1.CloudCatalogClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new cloudcatalogModule.v1.CloudCatalogClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new cloudcatalogModule.v1.CloudCatalogClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new cloudcatalogModule.v1.CloudCatalogClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.cloudCatalogStub, undefined);
    await client.initialize();
    assert(client.cloudCatalogStub);
  });

  it('has close method for the initialized client', done => {
    const client = new cloudcatalogModule.v1.CloudCatalogClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.initialize();
    assert(client.cloudCatalogStub);
    client.close().then(() => {
      done();
    });
  });

  it('has close method for the non-initialized client', done => {
    const client = new cloudcatalogModule.v1.CloudCatalogClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.cloudCatalogStub, undefined);
    client.close().then(() => {
      done();
    });
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new cloudcatalogModule.v1.CloudCatalogClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new cloudcatalogModule.v1.CloudCatalogClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('listServices', () => {
    it('invokes listServices without error', async () => {
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.v1.ListServicesRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.billing.v1.Service()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Service()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Service()),
      ];
      client.innerApiCalls.listServices = stubSimpleCall(expectedResponse);
      const [response] = await client.listServices(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listServices as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listServices without error using callback', async () => {
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.v1.ListServicesRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.billing.v1.Service()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Service()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Service()),
      ];
      client.innerApiCalls.listServices =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listServices(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.billing.v1.IService[] | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listServices as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listServices with error', async () => {
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.v1.ListServicesRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedError = new Error('expected');
      client.innerApiCalls.listServices = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listServices(request), expectedError);
      assert(
        (client.innerApiCalls.listServices as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listServicesStream without error', async () => {
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.v1.ListServicesRequest()
      );
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.billing.v1.Service()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Service()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Service()),
      ];
      client.descriptors.page.listServices.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listServicesStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.billing.v1.Service[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.billing.v1.Service) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.listServices.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listServices, request)
      );
    });

    it('invokes listServicesStream with error', async () => {
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.v1.ListServicesRequest()
      );
      const expectedError = new Error('expected');
      client.descriptors.page.listServices.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listServicesStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.billing.v1.Service[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.billing.v1.Service) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.listServices.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listServices, request)
      );
    });

    it('uses async iteration with listServices without error', async () => {
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.v1.ListServicesRequest()
      );
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.billing.v1.Service()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Service()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Service()),
      ];
      client.descriptors.page.listServices.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.billing.v1.IService[] = [];
      const iterable = client.listServicesAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.listServices.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
    });

    it('uses async iteration with listServices with error', async () => {
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.v1.ListServicesRequest()
      );
      const expectedError = new Error('expected');
      client.descriptors.page.listServices.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.listServicesAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.billing.v1.IService[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.listServices.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
    });
  });

  describe('listSkus', () => {
    it('invokes listSkus without error', async () => {
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.v1.ListSkusRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.billing.v1.Sku()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Sku()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Sku()),
      ];
      client.innerApiCalls.listSkus = stubSimpleCall(expectedResponse);
      const [response] = await client.listSkus(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listSkus as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listSkus without error using callback', async () => {
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.v1.ListSkusRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.billing.v1.Sku()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Sku()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Sku()),
      ];
      client.innerApiCalls.listSkus =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listSkus(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.billing.v1.ISku[] | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listSkus as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listSkus with error', async () => {
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.v1.ListSkusRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.listSkus = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.listSkus(request), expectedError);
      assert(
        (client.innerApiCalls.listSkus as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listSkusStream without error', async () => {
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.v1.ListSkusRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.billing.v1.Sku()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Sku()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Sku()),
      ];
      client.descriptors.page.listSkus.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listSkusStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.billing.v1.Sku[] = [];
        stream.on('data', (response: protos.google.cloud.billing.v1.Sku) => {
          responses.push(response);
        });
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.listSkus.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listSkus, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listSkus.createStream as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('invokes listSkusStream with error', async () => {
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.v1.ListSkusRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listSkus.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listSkusStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.billing.v1.Sku[] = [];
        stream.on('data', (response: protos.google.cloud.billing.v1.Sku) => {
          responses.push(response);
        });
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.listSkus.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listSkus, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listSkus.createStream as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listSkus without error', async () => {
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.v1.ListSkusRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.billing.v1.Sku()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Sku()),
        generateSampleMessage(new protos.google.cloud.billing.v1.Sku()),
      ];
      client.descriptors.page.listSkus.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.billing.v1.ISku[] = [];
      const iterable = client.listSkusAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (client.descriptors.page.listSkus.asyncIterate as SinonStub).getCall(0)
          .args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listSkus.asyncIterate as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listSkus with error', async () => {
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.v1.ListSkusRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listSkus.asyncIterate = stubAsyncIterationCall(
        undefined,
        expectedError
      );
      const iterable = client.listSkusAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.billing.v1.ISku[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (client.descriptors.page.listSkus.asyncIterate as SinonStub).getCall(0)
          .args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listSkus.asyncIterate as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });
  });

  describe('Path templates', () => {
    describe('service', () => {
      const fakePath = '/rendered/path/service';
      const expectedParameters = {
        service: 'serviceValue',
      };
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.servicePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.servicePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('servicePath', () => {
        const result = client.servicePath('serviceValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.servicePathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchServiceFromServiceName', () => {
        const result = client.matchServiceFromServiceName(fakePath);
        assert.strictEqual(result, 'serviceValue');
        assert(
          (client.pathTemplates.servicePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('sku', () => {
      const fakePath = '/rendered/path/sku';
      const expectedParameters = {
        service: 'serviceValue',
        sku: 'skuValue',
      };
      const client = new cloudcatalogModule.v1.CloudCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.skuPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.skuPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('skuPath', () => {
        const result = client.skuPath('serviceValue', 'skuValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.skuPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchServiceFromSkuName', () => {
        const result = client.matchServiceFromSkuName(fakePath);
        assert.strictEqual(result, 'serviceValue');
        assert(
          (client.pathTemplates.skuPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSkuFromSkuName', () => {
        const result = client.matchSkuFromSkuName(fakePath);
        assert.strictEqual(result, 'skuValue');
        assert(
          (client.pathTemplates.skuPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
