# 02_REACT.md - React & TypeScript Rules

## 1. Component Structure
- **Functional Components**: Use functional components with hooks instead of class components.
- **File Structure**: Each component should be in its own file, with the file name matching the component name.
- **Exports**: Use named exports for components, and a default export for the main component in a file.

## 2. State Management
- **Local State**: Use the `useState` hook for local component state.
- **Global State**: Use Zustand for global state management.
- **Derived State**: Use the `useMemo` hook to memoize derived state.

## 3. Side Effects
- **Data Fetching**: Use the `useEffect` hook for data fetching, with a cleanup function to cancel pending requests.
- **Subscriptions**: Use the `useEffect` hook for subscriptions, with a cleanup function to unsubscribe.

## 4. TypeScript
- **Props**: Use TypeScript to define the props for each component.
- **State**: Use TypeScript to define the state for each component.
- **Events**: Use TypeScript to define the event handlers for each component.
- **Strict Mode**: Enable strict mode in `tsconfig.json` to catch common errors.
