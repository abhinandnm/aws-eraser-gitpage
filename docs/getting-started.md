# Getting Started

Getting started with **AWS Eraser** takes less than 60 seconds.

## Prerequisites

- **Python 3.8+** installed on your system.
- An AWS Account with Access Keys (`AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`).

---

## Installation Options

=== "Windows (One-Click)"

    For Windows users, download the repository and run `run.bat`. It will automatically check for Python, install `boto3`, and launch the CLI:

    ```cmd
    .\run.bat
    ```

=== "Python / Linux / macOS"

    Install `boto3` manually via `pip` and run the script directly:

    ```bash
    pip install boto3
    python aws_eraser.py
    ```

=== "Git Clone"

    Clone the GitHub repository to keep up to date with future releases:

    ```bash
    git clone https://github.com/abhinandnm/aws-eraser.git
    cd aws-eraser
    pip install -r requirements.txt
    python aws_eraser.py
    ```

---

## AWS Credential Setup

AWS Eraser offers flexible credential detection:

1. **Automatic Local Detection**: Checks if a local `credentials.json` or standard AWS configuration file (`~/.aws/credentials`) exists.
2. **Terminal Prompt**: If no local credentials file is found, the CLI interactively prompts for:
    - **AWS Access Key ID**
    - **AWS Secret Access Key**
    - **AWS Session Token** *(Optional, for temporary STS credentials)*

!!! note "Security Guarantee"
    When entered via terminal prompt, keys are used strictly in memory for the active session and are **never saved to disk**.
