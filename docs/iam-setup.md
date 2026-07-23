# IAM & Billing Access Setup

If AWS Eraser displays a Cost Explorer permission warning during execution, follow this guide to grant billing read access.

---

## Troubleshooting `DataUnavailableException` or Permission Warnings

### Step 1: Enable IAM Billing Access (Root User Action)

By default, AWS root accounts block IAM users from accessing billing data even if they hold Administrator access.

1. Sign in to the AWS Console as the **Root User** (primary account email).
2. Navigate to the [AWS Account Settings Page](https://console.aws.amazon.com/billing/home?#/account).
3. Scroll down to **IAM User and Role Access to Billing Information** and click **Edit**.
4. Check **Activate IAM Access** and click **Update**.

---

### Step 2: Attach Managed IAM Policy

Attach the AWS-managed billing read policy to your execution IAM user or role:

1. Open the [IAM Console](https://console.aws.amazon.com/iam/home?#/users).
2. Select your IAM user, click **Add Permissions** > **Attach policies directly**.
3. Search for **`AWSBillingReadOnlyAccess`** and attach it.

!!! note "Initial Initialization Delay"
    If AWS Cost Explorer reports `DataUnavailableException`, AWS is initializing billing records for a new account (up to 24 hours). AWS Eraser automatically detects this exception and proceeds with resource scanning without aborting.
