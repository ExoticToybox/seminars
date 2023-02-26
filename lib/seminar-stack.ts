import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { aws_s3, aws_s3_deployment } from "aws-cdk-lib";
import { aws_cloudfront, aws_cloudfront_origins, Duration } from "aws-cdk-lib";

export class SeminarStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new aws_s3.Bucket(this, "BuildBucket", {
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const distribution = new aws_cloudfront.Distribution(this, "Distribution", {
      defaultBehavior: {
        origin: new aws_cloudfront_origins.S3Origin(bucket),
        viewerProtocolPolicy:
          aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: "index.html",

      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: "/index.html",
          ttl: Duration.minutes(5),
        },
      ],
    });
    new aws_s3_deployment.BucketDeployment(this, "deployReactApp", {
      sources: [aws_s3_deployment.Source.asset("./web/dist")],
      destinationBucket: bucket,
    });
  }
}
