# 04_TESTING.md - Testing Rules

## 1. Jest & React Testing Library
- **Unit Tests**: Use Jest and React Testing Library to write unit tests for all components, hooks, and utility functions.
- **Integration Tests**: Use Jest and React Testing Library to write integration tests for all pages and user flows.
- **Queries**: Use `getBy`, `findBy`, and `queryBy` queries to find elements in the DOM.
- **Assertions**: Use `jest-dom` matchers for assertions.

## 2. Test Coverage
- **Minimum Coverage**: Aim for a minimum of 80% test coverage for all code.
- **Coverage Reports**: Generate coverage reports to identify areas of the code that are not well-tested.

## 3. Mocking
- **API Requests**: Use `jest.mock` to mock API requests.
- **Modules**: Use `jest.mock` to mock modules.
