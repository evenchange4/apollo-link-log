/* eslint no-console: 0 */
// @flow
import { ApolloLink } from 'apollo-link';
import { print } from 'graphql/language';
import chalk from 'chalk';

export type LoggerParams = {
  operationName: ?string,
  query: string,
  variables: Object,
  operation: Object,
};

export type Options = {
  logger?: (params: LoggerParams) => void,
  enabled?: boolean,
};

export function DEFAULT_LOGGER({
  operationName,
  query,
  variables,
}: LoggerParams): void {
  console.log(
    chalk.gray(`
==================== [apollo-link-log] START ==================
operationName: ${operationName || 'null'}

${query}
variables: ${JSON.stringify(variables, null, 2)}
==================== [apollo-link-log] END ====================
    `),
  );
}

const createLogLink = ({
  logger = DEFAULT_LOGGER,
  enabled = true,
}: Options = {}): any =>
  new ApolloLink((operation, forward) =>
    forward(operation).map(result => {
      if (!enabled) return result;
      const { operationName, query, variables } = operation;

      logger({ operationName, query: print(query), variables, operation });

      return result;
    }),
  );

export default createLogLink;
