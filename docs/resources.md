# Supported AWS Resources

AWS Eraser targets high-cost billing infrastructure across 15+ AWS service categories.

---

## Cleaned Resources Matrix

| Category | Supported Resource Type | Cleanup Behavior |
| :--- | :--- | :--- |
| **Compute** | EC2 Instances | Issues `terminate_instances` call across all regions. |
| **Compute** | Lightsail Instances | Purges Lightsail virtual servers and attached disks. |
| **Storage** | S3 Buckets | Empties all object versions, delete markers, and deletes bucket. |
| **Storage** | EBS Volumes | Deletes unattached volumes and handles locked `VolumeInUse` status. |
| **Storage** | EBS Snapshots | Purges user-created EC2 EBS volume snapshots. |
| **Database** | RDS Instances | Deletes RDS DB instances, manual snapshots, and automated backups. |
| **Database** | DynamoDB Tables | Deletes DynamoDB NoSQL tables and indexes. |
| **Networking** | NAT Gateways | Deletes hourly NAT Gateways. |
| **Networking** | Elastic IPs (EIP) | Releases unattached or allocated Elastic IP addresses. |
| **Networking** | Load Balancers | Deletes ALB, NLB, and Classic Load Balancers. |
| **Security** | WAFv2 Web ACLs | Removes Global (CloudFront) and Regional Web ACL rules. |

---

## Safely Preserved Resources (Limitations)

To prevent accidental lockouts and account corruption, AWS Eraser explicitly **does NOT delete**:

- **IAM Credentials**: IAM Users, Roles, Groups, and Access Keys are preserved so the running CLI session remains active.
- **KMS Keys**: Customer Managed Keys (KMS) require a mandatory 7 to 30 day deletion waiting period in AWS.
- **Savings Plans & Financial Contracts**: Marketplace subscriptions and Reserved Instance contracts cannot be deleted via API.
- **CloudWatch Logs**: System log groups are preserved for historical audit security.
