import type { CodegenConfig } from '@graphql-codegen/cli';

// TODO: https://zenn.dev/izumin/articles/ffc84c1b4310be

// TODO: enable to access env via Vite and remove .env declaration
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const url = process.env.REACT_APP_GRAPHQL_API_URL!;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const apiKey = process.env.REACT_APP_GRAPHQL_API_KEY!;
const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [url]: {
        headers: { 'X-API-KEY': apiKey },
      },
    },
    '../terraform/modules/appsync/resources/appsync.graphql',
  ],
  generates: {
    './src/graphql/generated.ts': {
      documents: ['src/graphql/*.ts'],
      config: {
        skipTypename: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        fetcher: 'graphql-request',
        isReactHook: true,
        // exposeQueryKeys: true,
        // TODO: use custom fetcher to avoid boilartemplate like url and access key.
        // fetcher: '@/functions/query/custom-fetcher#customFetcher',
        // isReactHook: true,
        scalars: {
          AWSDate: 'string',
          AWSTime: 'string',
          AWSDateTime: 'string',
          AWSTimestamp: 'string',
          AWSEmail: 'string',
          AWSJSON: 'string',
          AWSURL: 'string',
          AWSPhone: 'string',
          AWSIPAddress: 'string',
        },
      },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
        {
          add: {
            content: [
              '/* eslint-disable @typescript-eslint/no-explicit-any */',
              '/* eslint-disable import/order */',
              '/* eslint-disable import/newline-after-import */',
              '/* eslint-disable no-use-before-define */',
            ],
          },
        },
      ],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write', 'yarn eslint'],
  },
};
// eslint-disable-next-line import/no-default-export
export default config;
