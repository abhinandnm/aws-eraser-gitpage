# AWS Eraser 🧹

!!! warning "IRREVERSIBLE DELETION NOTICE"
    This tool is highly destructive. Executing deletion commands will permanently delete AWS resources (including EC2 instances, S3 buckets, RDS databases, and NAT gateways). Always verify your target AWS account credentials before typing `yes`.

The **fastest and simplest solution** to scan, audit, and clean active billing resources across all 25+ global AWS regions. A single-file, zero-cloud-setup Python CLI utility to stop unexpected AWS billing charges instantly.

[![Release](https://img.shields.io/badge/Release-v1.1.0-blue.svg)](https://github.com/abhinandnm/aws-eraser/releases)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/abhinandnm/aws-eraser/blob/main/LICENSE)
[![Python](https://img.shields.io/badge/Python-3.8%2B-brightgreen.svg)](https://www.python.org/)

---

## What is AWS Eraser?

AWS Eraser (formerly known as AWS Terminator) is an open-source command-line tool built with `boto3`. It dynamically scans all active and opted-in global AWS regions, detects resources quietly generating hourly or monthly charges, presents a numbered interactive summary list, and permits **selective resource deletion** (`1, 3, 5-8`) or complete account nuking.

### Key Highlights

- **Multi-Region Coverage**: Scans 25+ AWS regions globally (us-east-1, eu-central-1, ap-south-1, etc.) in parallel.
- **Selective Deletion**: Choose specific resources by item number/range (`1, 3, 5-8`) or purge everything.
- **Zero Cloud Footprint**: Single Python script (`aws_eraser.py`) running locally. No CloudFormation templates required.
- **EBS Wait Handler**: Automatically polls and purges volumes locked in `VolumeInUse` attached to shutting-down instances.
- **S3 Bucket Purger**: Recursively empties all objects, historical versions, and delete markers before bucket deletion.

---

## Quick Links

- [📥 Download Latest Release on GitHub](https://github.com/abhinandnm/aws-eraser)
- [⚡ Quick Start Guide](getting-started.md)
- [🛠 Supported AWS Resources](resources.md)
- [🔑 IAM Permissions & Billing Setup](iam-setup.md)
