export const authTokenPreVersion4 =
  ({
    type = 'Bearer',
    value = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjc3JmIjoiOWI2OWE0Y2VhNm' +
    'FhNTIwNGJkMmFiZGNhMTZmZWU2OWQzYjliYTZkNGE4ODliYTQyOWJjMGJhYWFlMDhkNTYwO' +
    'SIsImV4cCI6MTUzNTk3NTQ0MSwiaXNBZG1pbiI6dHJ1ZSwidGVhbU5hbWUiOiJtYWluIn0.' +
    'QFx9M1dq9SVcxVjqjcjFNhKhZLwXfYiY2v-r1G7kPESz5F_Lw0cRawBqihm14MokJwFquzE' +
    'kdpKitf2Lwj0lwSd5vMwEycCBuan-eLksekFvdu3TNg4beXr4Y27QV-i7FhUNq21-ZLwNcz' +
    'IHFSJ9IHdnDHOmX8-40Tw_L4P5x8okkdVWlsSWs3tt4b9TE2YN08oekJKifAnEIwg8Kb2mV' +
    'ubTeOxNxopC3HEhmu0xOMpjRNSTV9vtiyXw0oR6Lk50HHZmX4gD1Z0XKAz-pUK1GutTjDn2' +
    'WU9RYM4l0Q5MML-_7OwuMFG86nJ7qwITyv0PTLdRFLgOPykuyYAtcSWXEDOTaHwFqTxwoe_' +
    'uwbZG4BxtDrHEgJ0yPBxjnf5YVHMgkTNe9FdDRlYx9XEzt62-Kaf1BvGhXFC-NEFI-jUOZg' +
    'gI7XTTWtaTuYUWqTCsFirX5iZqph-m_9A7EOIHfpjZpzWB0nxTkCzp-VsB9jfKErf4wjSH8' +
    'LzAH4PP88sNe83IGonqgRa4bLmM-P-MW60Tkd2HllpZdHPsLLQkFNmkzZtgl3vGKf_gm19z' +
    'v9waOSTg-0PjMzrFtU930tHKwJHyRCfY5YDLXQmXHXm96osn0ViircSCFAOFQH8mY0gyoz2' +
    'iUpLnB7TMUOQvsTuHMPPSXans5LkZTxoBz__P0LQVo0Y'
  } = {}) => ({
    type,
    value
  })

export const authTokenPreVersion6 =
  ({
    accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJjc3Jm' +
    'IjoiYzQ5NTQwYTYwMjI0Yjk4MDAwMDgwYzNhZjlkZDI2MjE4OTNlYjgwMWMzZGEyYWMzOGJ' +
    'hNWEwZWM1ZmE1ZTJhYyIsImVtYWlsIjoiYWRtaW5pc3RyYXRvciIsImV4cCI6MTUzNjUyOT' +
    'A3NSwiaXNfYWRtaW4iOnRydWUsIm5hbWUiOiIiLCJzdWIiOiJDZzFoWkcxcGJtbHpkSEpoZ' +
    'Ec5eUVnVnNiMk5oYkEiLCJ0ZWFtcyI6WyJtYWluIl0sInVzZXJfaWQiOiJhZG1pbmlzdHJh' +
    'dG9yIiwidXNlcl9uYW1lIjoiYWRtaW5pc3RyYXRvciJ9.E3eo7uuqhp3r9NKHpvdajTqVbE' +
    'ZAMUh1mvbLieuY3Uck51TbMHhmSoPgaa6sRUoNfMwOs2Vv3UR6dsa69ZoQn4zGcOtQys-KS' +
    'A54OBUfxOS32yp8sCCaX3N7-KBot4hZZY9MmVIJ0F2a9dDjAqUtJwCCmrLJJBily7SbYeL9' +
    'yni3aj8HkCIH9skqVpeLiemNcMc3rcHfHg8GLrwyEg2HRaSomSwjN_5nWxpYPTBkQW9eZz1' +
    'rN5i1zpgn4iNmY5d084Ommlf9iBUiQgtSvBOeasoW2YZe4ZYzT7ovAQo1sW0uVobk8WRCZa' +
    'GaUh75pjjf6f-_kJ7wOqX-tSaOSysHNxZM91GVm5hcFOz2W3m54acs7SrA6LS9biPWD5z0U' +
    '24-0Tk2_GxD8yzIWWcYYNyd61F2vuEANGGpCTJo58uwTLeGOx8hIqUQH-RYv6usqFbkkfU8' +
    '-7rcNZ6TgCjbBjFAqySiH0YEk_boe6GNCw-T4Khg8nHlQq-FowS8TRlibOq9wdI_7D-aEXD' +
    'M23yN1jBkt4N4_WP9kC8_l5-FKzVYmi-w_M3FX6rDp5Dbfyi2hKcLcg8eBO6hIwC6MkNcer' +
    'hl76Y4FhfgpHcFXqJWDwjsKR6abQqGRh9d446VmB3CP86OM03iiZf0qQV4pAxBwHgi7DbZR' +
    'lK1ak3Up4x9eB_VzCc',
    tokenType = 'Bearer',
    expiry = '2018-09-08T22:37:55.973487291Z'
  } = {}) => ({
    access_token: accessToken,
    token_type: tokenType,
    expiry
  })

export const authTokenPostVersion6 =
  ({
    idToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJjc3Jm' +
    'IjoiYzQ5NTQwYTYwMjI0Yjk4MDAwMDgwYzNhZjlkZDI2MjE4OTNlYjgwMWMzZGEyYWMzOGJ' +
    'hNWEwZWM1ZmE1ZTJhYyIsImVtYWlsIjoiYWRtaW5pc3RyYXRvciIsImV4cCI6MTUzNjUyOT' +
    'A3NSwiaXNfYWRtaW4iOnRydWUsIm5hbWUiOiIiLCJzdWIiOiJDZzFoWkcxcGJtbHpkSEpoZ' +
    'Ec5eUVnVnNiMk5oYkEiLCJ0ZWFtcyI6WyJtYWluIl0sInVzZXJfaWQiOiJhZG1pbmlzdHJh' +
    'dG9yIiwidXNlcl9uYW1lIjoiYWRtaW5pc3RyYXRvciJ9.E3eo7uuqhp3r9NKHpvdajTqVbE' +
    'ZAMUh1mvbLieuY3Uck51TbMHhmSoPgaa6sRUoNfMwOs2Vv3UR6dsa69ZoQn4zGcOtQys-KS' +
    'A54OBUfxOS32yp8sCCaX3N7-KBot4hZZY9MmVIJ0F2a9dDjAqUtJwCCmrLJJBily7SbYeL9' +
    'yni3aj8HkCIH9skqVpeLiemNcMc3rcHfHg8GLrwyEg2HRaSomSwjN_5nWxpYPTBkQW9eZz1' +
    'rN5i1zpgn4iNmY5d084Ommlf9iBUiQgtSvBOeasoW2YZe4ZYzT7ovAQo1sW0uVobk8WRCZa' +
    'GaUh75pjjf6f-_kJ7wOqX-tSaOSysHNxZM91GVm5hcFOz2W3m54acs7SrA6LS9biPWD5z0U' +
    '24-0Tk2_GxD8yzIWWcYYNyd61F2vuEANGGpCTJo58uwTLeGOx8hIqUQH-RYv6usqFbkkfU8' +
    '-7rcNZ6TgCjbBjFAqySiH0YEk_boe6GNCw-T4Khg8nHlQq-FowS8TRlibOq9wdI_7D-aEXD' +
    'M23yN1jBkt4N4_WP9kC8_l5-FKzVYmi-w_M3FX6rDp5Dbfyi2hKcLcg8eBO6hIwC6MkNcer' +
    'hl76Y4FhfgpHcFXqJWDwjsKR6abQqGRh9d446VmB3CP86OM03iiZf0qQV4pAxBwHgi7DbZR' +
    'lK1ak3Up4x9eB_VzCc',
    accessToken = 'access-token-123',
    tokenType = 'Bearer',
    expiry = '2018-09-08T22:37:55.973487291Z'
  } = {}) => ({
    id_token: idToken,
    access_token: accessToken,
    token_type: tokenType,
    expiry
  })

export const info =
  ({
    version = '3.14.1',
    workerVersion = '2.1'
  } = {}) => ({
    version,
    worker_version: workerVersion
  })

export const teamAuthentication =
  ({
    users = ['local:some-user'],
    groups = ['github:some-group']
  } = {}) => ({
    users,
    groups
  })

export const team =
  ({
    id = 1,
    name = 'example-team',
    auth = teamAuthentication()
  } = {}) => ({
    id,
    name,
    auth
  })

export const pipeline =
  ({
    id = 53,
    name = 'example-pipeline',
    isPaused = false,
    isPublic = false,
    teamName = 'example-team'
  } = {}) => ({
    id,
    name,
    paused: isPaused,
    'public': isPublic,
    team_name: teamName
  })

export const resource =
  ({
    name = 'example-resource',
    pipelineName = 'example-pipeline',
    teamName = 'example-team',
    type = 'git',
    lastChecked = 1524830894
  } = {}) => ({
    name,
    pipeline_name: pipelineName,
    team_name: teamName,
    type,
    last_checked: lastChecked
  })

export const resourceTypeSource =
  ({
    repository = 'cfcommunity/slack-notification-resource',
    tag = 'latest'
  } = {}) => ({
    repository,
    tag
  })

export const resourceType =
  ({
    name = 'example-resource-type',
    type = 'example-type',
    source = resourceTypeSource(),
    version = 'ffc6f68716afa5ad585e6ec90922ff3233fd077f',
    privileged = false,
    tags = null,
    params = null
  } = {}) => ({
    name,
    type,
    source,
    version,
    privileged,
    tags,
    params
  })

export const resourceVersionMetadata =
  ({
    name = 'version',
    value = '1.2.3'
  } = {}) => ({
    name,
    value
  })

export const resourceVersionVersion =
  ({
    ref = 'cbc6ccd3c257fe3ac17d98eb258b1c5b70ee660c'
  } = {}) => ({
    ref
  })

export const resourceVersion =
  ({
    id = 29963,
    type = 'git',
    metadata = resourceVersionMetadata(),
    resource = 'example-resource',
    enabled = true,
    version = resourceVersionVersion()
  } = {}) => ({
    id,
    type,
    metadata,
    resource,
    enabled,
    version
  })

export const resourceVersionCause =
  ({
    versionedResourceId = '123',
    buildId = '456'
  } = {}) => ({
    versioned_resource_id: versionedResourceId,
    build_id: buildId
  })

export const container =
  ({
    id = '663c9baf-f6e8-4abd-7fcd-fabf51d3b7de',
    workerName = '7f3b5c6591bc',
    type = 'get',
    stepName = 'notify',
    pipelineId = 47,
    jobId = 347,
    buildId = 18331,
    pipelineName = 'webapp',
    jobName = 'publish',
    buildName = '78',
    workingDirectory = '/tmp/notify/get'
  } = {}) => ({
    id,
    worker_name: workerName,
    type,
    step_name: stepName,
    pipeline_id: pipelineId,
    job_id: jobId,
    build_id: buildId,
    pipeline_name: pipelineName,
    job_name: jobName,
    build_name: buildName,
    working_directory: workingDirectory
  })

export const volume =
  ({
    id = '44177fd7-2a5a-4bef-4e0f-c78042e5c21d',
    workerName = '01b1290c5352',
    type = 'container',
    containerHandle = '9a5767ce-369d-4145-43ab-4767bdd4de08',
    path = '/',
    parentHandle = '75ecca0e-1e84-4da9-5bf8-538d717794d0',
    resourceType = null,
    baseResourceType = null,
    pipelineName = '',
    jobName = '',
    stepName = ''
  } = {}) => ({
    id,
    worker_name: workerName,
    type,
    container_handle: containerHandle,
    path,
    parent_handle: parentHandle,
    resource_type: resourceType,
    base_resource_type: baseResourceType,
    pipeline_name: pipelineName,
    job_name: jobName,
    step_name: stepName
  })

export const workerResourceType =
  ({
    type = 'bosh-deployment',
    image = '/concourse-work-dir/3.14.1/assets/resource-images/bosh-deployment/rootfs',
    version = 'ffc6f68716afa5ad585e6ec90922ff3233fd077f',
    privileged = false
  } = {}) => ({
    type,
    image,
    version,
    privileged
  })

export const worker =
  ({
    addr = '10.240.3.194:45821',
    baggageclaimUrl = 'http://10.240.3.194:45995',
    activeContainers = 3,
    activeVolumes = 0,
    resourceTypes = [workerResourceType()],
    platform = 'linux',
    tags = null,
    team = '',
    name = '9aa6920cfc41',
    startTime = 1532162932,
    state = 'running',
    version = '2.1'
  } = {}) => ({
    addr,
    baggageclaim_url: baggageclaimUrl,
    active_containers: activeContainers,
    active_volumes: activeVolumes,
    resource_types: resourceTypes,
    platform,
    tags,
    team,
    name,
    version,
    start_time: startTime,
    state
  })

export const build =
  ({
    id = 10416,
    name = '81',
    status = 'succeeded',
    teamName = 'example-teamName',
    pipelineName = 'example-pipeline',
    jobName = 'example-job',
    apiUrl = '/api/v1/builds/10416',
    startTime = 1524830894,
    endTime = 1524831161
  } = {}) => ({
    id,
    team_name: teamName,
    name,
    status,
    job_name: jobName,
    api_url: apiUrl,
    pipeline_name: pipelineName,
    start_time: startTime,
    end_time: endTime
  })

export const input =
  ({
    name = 'example-input',
    resource = 'example-resource',
    trigger = true
  } = {}) => ({
    name,
    resource,
    trigger
  })

export const output =
  ({
    name = 'example-output',
    resource = 'example-resource'
  } = {}) => ({
    name,
    resource
  })

export const job =
  ({
    id = 288,
    name = 'build',
    pipelineName = 'example-pipeline',
    teamName = 'example-team-name',
    nextBuild = null,
    finishedBuild = build(),
    inputs = [input()],
    outputs = [output()],
    groups = null
  } = {}) => ({
    id,
    name,
    pipeline_name: pipelineName,
    team_name: teamName,
    next_build: nextBuild,
    finished_build: finishedBuild,
    inputs,
    outputs,
    groups
  })
