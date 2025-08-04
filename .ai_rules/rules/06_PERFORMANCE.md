# 06_PERFORMANCE.md - Performance Rules

## 1. Rendering
- **Memoization**: Use `React.memo`, `useMemo`, and `useCallback` to prevent unnecessary re-renders.
- **Virtualization**: Use a library like `react-window` or `react-virtualized` to render large lists and tables.
- **Code Splitting**: Use `React.lazy` and `Suspense` to code-split the application and load components on demand.

## 2. Network
- **Bundle Size**: Keep the bundle size as small as possible by using tree-shaking and code-splitting.
- **Image Optimization**: Optimize images by using a format like WebP and compressing them.
- **Caching**: Use caching to reduce the number of requests to the server.

## 3. Animations
- **CSS Transitions & Animations**: Use CSS transitions and animations for simple animations.
- **Framer Motion**: Use Framer Motion for complex animations.
- **Hardware Acceleration**: Use the `transform` and `opacity` properties to leverage hardware acceleration.
