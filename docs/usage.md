# Usage & Selective Deletion

AWS Eraser provides an interactive, terminal-based execution flow that lets you review costs and pick exact resources before any deletion takes place.

---

## Execution Workflow

1. **Credentials Validation**: Validates AWS Access Key and Secret Key against AWS STS (`get_caller_identity`).
2. **Monthly Cost Explorer Fetch**: Queries AWS Cost Explorer to display accrued monthly spending by service.
3. **Multi-Region Scan**: Iterates across all 25+ global AWS regions and collects active billing items.
4. **Interactive Deletion Prompt**: Displays a numbered list of all discovered resources.

---

## Deletion Modes

When scanning completes, AWS Eraser presents 3 options:

```text
[?] Select Deletion Mode:
    [1] Nuke ALL Discovered Resources
    [2] Select Specific Items Manually (e.g. 1, 3, 5-8)
    [3] Cancel and Exit
```

### Mode 1: Nuke ALL Resources
Purges every discovered active billing resource across all scanned regions simultaneously.

### Mode 2: Selective Manual Pick
Allows you to enter item numbers, comma-separated lists, or ranges:

- **Single item**: `3`
- **Multiple items**: `1, 4, 7`
- **Item range**: `5-12`
- **Combined selection**: `1, 3, 5-8, 11`

### Mode 3: Cancel and Exit
Safely exits without modifying any AWS infrastructure.

---

## Instant Re-Scan Loop

At the end of a deletion run, AWS Eraser keeps you in an active verification loop:

```text
Press [ENTER] to re-scan account | Press [ESC] or type 'exit' to quit.
```

Pressing `[ENTER]` immediately re-triggers a global scan across all regions to verify that resources have reached a `terminated` or `deleted` state.
