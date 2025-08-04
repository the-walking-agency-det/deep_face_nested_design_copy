# 00_GLOBAL.md - Universal Project Rules

## 1. Project Structure & Scaffolding
### 1.1. Directory Layout
- **`src/`**: Main application source code.
  - **`components/`**: Reusable UI components.
    - **`common/`**: Basic, generic components (Button, Input, etc.).
    - **`layout/`**: Structural components (Header, Footer, Sidebar, etc.).
    - **`specific/`**: Components tied to specific features.
  - **`pages/`**: Top-level page components.
  - **`store/`**: State management (Zustand stores).
  - **`hooks/`**: Custom React hooks.
  - **`styles/`**: Global styles and Tailwind configuration.
  - **`utils/`**: Utility functions.
  - **`types/`**: TypeScript type definitions.
  - **`assets/`**: Static assets (images, fonts, etc.).
- **`tests/`**: Test files, mirroring `src/` structure.
- **`docs/`**: Project documentation.
- **`.ai_rules/`**: AI agent configuration and rules.
  - **`rules/`**: Rule files for AI agents.
  - **`agents/`**: Agent definition files.

### 1.2. File Naming Conventions
- **Components**: `PascalCase.tsx` (e.g., `Button.tsx`).
- **Pages**: `PascalCase.tsx` (e.g., `HomePage.tsx`).
- **Hooks**: `useCamelCase.ts` (e.g., `useAuth.ts`).
- **Stores**: `camelCaseStore.ts` (e.g., `authStore.ts`).
- **Tests**: `*.test.tsx` or `*.spec.tsx`.

### 1.3. PRD -> Task -> Sub-task -> Prompt Hierarchy
- **PRD (Product Requirements Document)**: High-level project goals.
- **Task**: A major feature or component (e.g., "Modular Dashboard Layouts").
- **Sub-task**: A smaller part of a task (e.g., "Drag-and-drop widget rearrangement").
- **Prompt**: A specific instruction to an AI agent (e.g., "Create a `Widget` component with drag-and-drop functionality using Framer Motion.").

### 1.4. Automatic Scaffolding
- When a new feature is requested, the AI agent should:
  1.  Create the necessary files and directories based on the conventions above.
  2.  Generate boilerplate code with `TODO:` placeholders for implementation details.
  3.  Present the scaffolded structure to the user for confirmation.

## 2. Code Style & Formatting
- **Language**: TypeScript.
- **Framework**: React.
- **Styling**: Tailwind CSS.
- **Formatting**: Prettier (or equivalent) should be used to maintain consistent code style.
- **Linting**: ESLint should be used to enforce code quality.

## 3. Commit Messages
- Use conventional commit messages (e.g., `feat: add user authentication`).

## 4. Branching Strategy
- **`main`**: Production-ready code.
- **`develop`**: Integration branch for features.
- **`feature/...`**: Branches for new features.
- **`fix/...`**: Branches for bug fixes.
- **`chore/...`**: Branches for maintenance tasks.
