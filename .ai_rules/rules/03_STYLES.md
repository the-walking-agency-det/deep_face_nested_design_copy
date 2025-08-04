# 03_STYLES.md - Styling & CSS Rules

## 1. Tailwind CSS
- **Utility-First**: Use Tailwind's utility classes for all styling.
- **Customization**: Customize Tailwind's default theme in `tailwind.config.js` to match the design system.
- **Directives**: Use the `@apply` directive to extract repeated utility patterns into custom classes.

## 2. CSS-in-JS
- **Styled Components**: Do not use styled-components or other CSS-in-JS libraries. All styling should be done with Tailwind CSS.

## 3. Global Styles
- **`src/index.css`**: Use this file for global styles and Tailwind's base, components, and utilities directives.
- **Component-Specific Styles**: Do not create separate CSS files for individual components. All styling should be done with Tailwind's utility classes.
