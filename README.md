# apollo-link-log

> Log side effect for Apollo Link.

[![Travis][build-badge]][build]
[![Codecov Status][codecov-badge]][codecov]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads]][npm]

[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

## Installation

```sh
$ yarn add apollo-link-log apollo-link graphql
```

## Usage

```js
import createLogLink from 'apollo-link-log';

// Default
ApolloLink.concat(createLogLink());

// With options
ApolloLink.concat(createLogLink({
  enabled: process.env.NODE_ENV !== 'production',
  logger: ({ operation, operationName, query, variables }) => {...};
}));
```

## Snapshot

![](./docs/snapshot.png)

## Options

```js
type Options = {
  enabled?: boolean,
  logger?: (params: {
    operation: Object,
    operationName: ?string,
    query: string,
    variables: Object,
  }) => void,
};
```

## Inspiration

- https://github.com/blackxored/apollo-link-logger

## Development

### Requirements

- node >= 11.6.0
- yarn >= 1.13.0

* apollo-link ^1.0.0
* graphql ^14.0.0

```sh
$ yarn install --pure-lockfile
$ yarn start
```

## Test

```sh
$ yarn run format
$ yarn run eslint
$ yarn run flow
$ yarn run test:watch
$ yarn run build
```

## Publish

```bash
$ npm version patch
$ npm run changelog
git commit & push
```

---

## CONTRIBUTING

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.
- Pull requests must be accompanied by passing automated tests.

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)

[build-badge]: https://img.shields.io/travis/evenchange4/apollo-link-log/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/apollo-link-log
[npm-badge]: https://img.shields.io/npm/v/apollo-link-log.svg?style=flat-square
[npm]: https://www.npmjs.org/package/apollo-link-log
[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/apollo-link-log.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/apollo-link-log?branch=master
[npm-downloads]: https://img.shields.io/npm/dt/apollo-link-log.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/apollo-link-log.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
