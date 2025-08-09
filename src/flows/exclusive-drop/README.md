# Exclusive Drop with Limited Codes: Demo-to-Production Specification

## 1. Overview

This document outlines the specification for the "Exclusive Drop with Limited Codes" feature. The goal of this feature is to create a scarcity-based fan edition with code redemption.

The flow will be initially implemented as a front-end state machine, with mock backend interactions. This will allow for rapid prototyping and demonstration, with the ability to easily swap in a real backend later.

- **Entry Point:** `/flow/exclusive`

## 2. State Machine

The feature will be implemented as a state machine with the following states:

1.  **Setup:** The initial state where the drop is configured.
2.  **GenerateCodes:** The state where the unique codes are generated based on the configuration.
3.  **Publish:** The state where the drop is live and users can redeem codes.
4.  **RedeemTracking:** A sub-state of `Publish` that continuously checks the redemption status.
5.  **Close:** The final state when the drop is closed (e.g., all codes are redeemed).

## 3. UI

The user interface will consist of the following components:

-   **Drop Configuration Form:** A form to set up the exclusive drop.
    -   **Code Limit:** A number input to specify the maximum number of codes to be generated.
-   **Progress Bar:** A visual representation of the remaining codes.
    -   This should update in real-time as codes are redeemed.
-   **Redemption Page:** A page where users can enter their code to redeem it.
-   **Stats View:** A view to display live statistics about the drop.

## 4. Persistence

The state of the exclusive drop will be persisted in the browser's local storage for the demo version. This allows the state to be preserved across page reloads.

-   **Key:** `indii.exclusiveDrop.v1`
-   **Value:** A JSON object with the following structure:
    ```json
    {
      "config": {
        "codeLimit": 1000
      },
      "codes": {
        "generated": ["CODE1", "CODE2", ...],
        "redeemed": ["CODE1", ...]
      },
      "status": "Published"
    }
    ```

## 5. Analytics

The following analytics events should be tracked:

-   `drop_published`: Fired when the drop is published.
-   `code_redeemed`: Fired when a user successfully redeems a code.
-   `drop_closed`: Fired when the drop is closed.

## 6. Backend API (Mocked)

The following backend functions will be mocked in `src/utils/backend.ts`:

-   `generateCodes(n: number): Promise<string[]>`: Generates `n` unique codes.
-   `publishLanding(config: object): Promise<boolean>`: Publishes the landing page with the given configuration.
-   `checkRedemptionStats(): Promise<{ redeemedCount: number, totalCount: number }>`: Fetches the latest redemption statistics.

## 7. Feature Flags

The following feature flags should be available in `src/utils/featureFlags.ts`:

-   `enableRateLimit`: A boolean to enable or disable rate limiting for code redemption.

## 8. Edge Cases & Risks

-   **Bots:** Malicious bots could try to redeem codes at a high rate.
    -   **Mitigation:** Implement rate limiting (controlled by the `enableRateLimit` flag) and consider CAPTCHA.
-   **Code Leaks:** Unique codes could be leaked before the drop is published.
    -   **Mitigation:** Codes should only be generated when the drop is about to be published.

## 9. Success Metrics

The success of the feature will be measured by the following metrics:

-   **Sell-out time:** The time it takes for all codes to be redeemed.
-   **Redemption rate:** The percentage of generated codes that are redeemed.

## 10. Acceptance Criteria

-   The number of redeemable codes must be capped at the configured limit.
-   The redemption statistics (e.g., the progress bar) must update in real-time.
