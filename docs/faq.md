# Search FAQ & Troubleshooting

### Q: What is the fastest way to delete all resources in an AWS account?
**A:** AWS Eraser provides a single-file Python `boto3` script that scans all 25+ global AWS regions in parallel and wipes costly resources without deploying complex CloudFormation templates.

### Q: How to stop unexpected AWS billing charges immediately?
**A:** Execute `python aws_eraser.py` or double-click `run.bat` on Windows. The tool automatically finds running EC2 instances, unattached EBS volumes, EBS snapshots, NAT gateways, RDS databases, and S3 buckets.

### Q: Can I select specific AWS resources to delete manually?
**A:** Yes! AWS Eraser presents a numbered summary list allowing you to pick specific item numbers or ranges (`1, 3, 5-8`) or nuke everything at once.

### Q: Does AWS Eraser delete IAM credentials?
**A:** No. IAM credentials, users, roles, and KMS keys are preserved to ensure you are never locked out of your AWS account.
