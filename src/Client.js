import camelcaseKeysDeep from 'camelcase-keys-deep'
import { find, propEq, reject, isNil } from 'ramda'

import TeamClient from './subclients/TeamClient'
import {
  func,
  integer,
  uri,
  schemaFor,
  validateOptions
} from './support/validation'
import {
  allBuildsUrl,
  allJobsUrl,
  allPipelinesUrl,
  allResourcesUrl,
  allTeamsUrl,
  allWorkersUrl,
  buildUrl, teamAuthTokenUrl
} from './support/urls'
import { createHttpClient } from './support/http/factory'
import { parseJson } from './support/http/transformers'
import BuildClient from './subclients/BuildClient'

export default class Client {
  static instanceFor (apiUrl, teamName, username, password) {
    const credentials = {
      url: teamAuthTokenUrl(apiUrl, teamName),
      username: username,
      password: password
    }
    const httpClient = createHttpClient({ credentials })

    return new Client({ apiUrl, httpClient })
  }

  constructor (options) {
    const validatedOptions = validateOptions(
      schemaFor({
        apiUrl: uri().required(),
        httpClient: func().required()
      }), options)

    this.apiUrl = validatedOptions.apiUrl
    this.httpClient = validatedOptions.httpClient
  }

  async listTeams () {
    const { data: teams } = await this.httpClient
      .get(allTeamsUrl(this.apiUrl), {
        transformResponse: [parseJson, camelcaseKeysDeep]
      })

    return teams
  }

  async forTeam (teamId) {
    const teams = await this.listTeams()
    const team = find(propEq('id', teamId), teams)

    if (!team) {
      throw new Error(`No team for ID: ${teamId}`)
    }

    return new TeamClient({
      apiUrl: this.apiUrl,
      httpClient: this.httpClient,
      team
    })
  }

  async listWorkers () {
    const { data: workers } = await this.httpClient
      .get(allWorkersUrl(this.apiUrl), {
        transformResponse: [parseJson, camelcaseKeysDeep]
      })

    return workers
  }

  async listPipelines () {
    const { data: pipelines } = await this.httpClient
      .get(allPipelinesUrl(this.apiUrl), {
        transformResponse: [parseJson, camelcaseKeysDeep]
      })

    return pipelines
  }

  async listJobs () {
    const { data: jobs } = await this.httpClient
      .get(allJobsUrl(this.apiUrl), {
        transformResponse: [parseJson, camelcaseKeysDeep]
      })

    return jobs
  }

  async listBuilds (options = {}) {
    const validatedOptions = validateOptions(
      schemaFor({
        limit: integer().min(1),
        since: integer().min(1),
        until: integer().min(1)
      }), options)

    const params = reject(isNil, {
      limit: validatedOptions.limit,
      since: validatedOptions.since,
      until: validatedOptions.until
    })

    const { data: builds } = await this.httpClient
      .get(allBuildsUrl(this.apiUrl), {
        params,
        transformResponse: [parseJson, camelcaseKeysDeep]
      })

    return builds
  }

  async getBuild (buildId) {
    const { data: build } = await this.httpClient
      .get(buildUrl(this.apiUrl, buildId), {
        transformResponse: [parseJson, camelcaseKeysDeep]
      })

    return build
  }

  async forBuild (buildId) {
    let build
    try {
      build = await this.getBuild(buildId)
    } catch (e) {
      if (e.response && e.response.status === 404) {
        throw new Error(`No build for ID: ${buildId}`)
      } else {
        throw e
      }
    }

    return new BuildClient({
      apiUrl: this.apiUrl,
      httpClient: this.httpClient,
      build
    })
  }

  async listResources () {
    const { data: resources } = await this.httpClient
      .get(allResourcesUrl(this.apiUrl), {
        transformResponse: [parseJson, camelcaseKeysDeep]
      })

    return resources
  }
}
