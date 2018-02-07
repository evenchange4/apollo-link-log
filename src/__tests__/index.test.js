// @flow
import gql from 'graphql-tag';
import { ApolloLink, execute, Observable, makePromise } from 'apollo-link';
import createLogLink from '../index';

it('default', async () => {
  const query = gql`
    query queryFoo {
      foo {
        bar
      }
    }
  `;

  const mockLink = new ApolloLink(() => Observable.of({ results: 'data' }));
  const link = (createLogLink: any)().concat(mockLink);
  try {
    const data = await makePromise(execute(link, { query }));
    expect(data).toEqual({ results: 'data' });
  } catch (error) {
    expect(error).toBeUndefined();
  }
});

it('custom logger', async () => {
  const query = gql`
    query queryFoo {
      foo {
        bar
      }
    }
  `;

  const mockLogger = jest.fn();
  const mockLink = new ApolloLink(() => Observable.of({ results: 'data' }));
  const link = createLogLink({
    logger: mockLogger,
  }).concat(mockLink);
  try {
    const data = await makePromise(execute(link, { query }));
    expect(data).toEqual({ results: 'data' });
    expect(mockLogger).toMatchSnapshot();
  } catch (error) {
    expect(error).toBeUndefined();
  }
});

it('disabled', async () => {
  const query = gql`
    query queryFoo {
      foo {
        bar
      }
    }
  `;

  const mockLogger = jest.fn();
  const mockLink = new ApolloLink(() => Observable.of({ results: 'data' }));
  const link = createLogLink({
    logger: mockLogger,
    enabled: false,
  }).concat(mockLink);
  try {
    const data = await makePromise(execute(link, { query }));
    expect(data).toEqual({ results: 'data' });
    expect(mockLogger).not.toHaveBeenCalled();
  } catch (error) {
    expect(error).toBeUndefined();
  }
});
