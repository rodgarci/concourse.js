import { onConstructionOf } from '../testsupport/dsls/construction'
import BuildClient from '../../src/subclients/BuildClient'
import data from '../testsupport/data'
import axios from 'axios'
import faker from 'faker'
import build from '../testsupport/builders'
import { bearerAuthHeader } from '../../src/support/http/headers'
import { expect } from 'chai'
import MockAdapter from 'axios-mock-adapter'

const buildValidBuildClient = () => {
  const apiUrl = data.randomApiUrl()
  const bearerToken = data.randomBearerToken()

  const httpClient = axios.create({
    headers: bearerAuthHeader(bearerToken)
  })
  const mock = new MockAdapter(httpClient)

  const theBuild = build.client.build(data.randomBuild())

  const client = new BuildClient({ apiUrl, httpClient, build: theBuild })

  return {
    client,
    httpClient,
    mock,
    apiUrl,
    bearerToken,
    build: theBuild
  }
}

describe('BuildClient', () => {
  describe('construction', () => {
    it('throws an exception if the API URI is not provided', () => {
      onConstructionOf(BuildClient)
        .withArguments({
          build: data.randomBuild(),
          httpClient: axios
        })
        .throwsError('Invalid parameter(s): ["apiUrl" is required].')
    })

    it('throws an exception if the API URI is not a string', () => {
      onConstructionOf(BuildClient)
        .withArguments({
          apiUrl: 25,
          build: data.randomBuild(),
          httpClient: axios
        })
        .throwsError('Invalid parameter(s): ["apiUrl" must be a string].')
    })

    it('throws an exception if the API URI is not a valid URI', () => {
      onConstructionOf(BuildClient)
        .withArguments({
          apiUrl: 'spinach',
          build: data.randomBuild(),
          httpClient: axios
        })
        .throwsError('Invalid parameter(s): ["apiUrl" must be a valid uri].')
    })

    it('throws an exception if the provided HTTP client is not an object',
      () => {
        onConstructionOf(BuildClient)
          .withArguments({
            build: data.randomBuild(),
            apiUrl: faker.internet.url(),
            httpClient: 35
          })
          .throwsError(
            'Invalid parameter(s): ["httpClient" must be a Function].')
      })

    it('throws an exception if the build is not provided', () => {
      onConstructionOf(BuildClient)
        .withArguments({
          apiUrl: faker.internet.url(),
          httpClient: axios
        })
        .throwsError('Invalid parameter(s): ["build" is required].')
    })

    it('throws an exception if the build is not an object', () => {
      onConstructionOf(BuildClient)
        .withArguments({
          apiUrl: faker.internet.url(),
          httpClient: axios,
          build: 'wat'
        })
        .throwsError('Invalid parameter(s): ["build" must be an object].')
    })
  })

  describe('listResources', () => {
    it('gets all resources for build',
      async () => {
        const { client, mock, apiUrl, bearerToken, build: theBuild } =
          buildValidBuildClient()

        const resourceData = data.randomResource()

        const resourceFromApi = build.api.resource(resourceData)
        const resourcesFromApi = [resourceFromApi]

        const convertedResource = build.client.resource(resourceData)
        const expectedResources = [convertedResource]

        mock.onGet(
          `${apiUrl}/builds/${theBuild.id}/resources`,
          {
            headers: {
              ...bearerAuthHeader(bearerToken)
            }
          })
          .reply(200, resourcesFromApi)

        const actualResources = await client.listResources()

        expect(actualResources).to.eql(expectedResources)
      })
  })
})
