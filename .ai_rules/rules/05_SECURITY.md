# 05_SECURITY.md - Security Rules

## 1. Authentication & Authorization
- **Authentication**: Implement secure user authentication using a library like `lucia-auth` or a service like Auth0.
- **Authorization**: Implement role-based access control to restrict access to certain parts of the application.
- **Passwords**: Hash and salt passwords using a strong hashing algorithm like Argon2.

## 2. Data Security
- **Input Validation**: Validate all user input on both the client and server to prevent XSS and other injection attacks.
- **Output Encoding**: Encode all output to prevent XSS attacks.
- **HTTPS**: Use HTTPS to encrypt all communication between the client and server.

## 3. Dependencies
- **Vulnerability Scanning**: Use a tool like `npm audit` to scan for vulnerabilities in dependencies.
- **Dependency Updates**: Keep dependencies up-to-date to patch security vulnerabilities.
