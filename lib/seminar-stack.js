"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeminarStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_cdk_lib_2 = require("aws-cdk-lib");
const aws_cdk_lib_3 = require("aws-cdk-lib");
class SeminarStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const bucket = new aws_cdk_lib_2.aws_s3.Bucket(this, "BuildBucket", {
            removalPolicy: aws_cdk_lib_1.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
        });
        const distribution = new aws_cdk_lib_3.aws_cloudfront.Distribution(this, "Distribution", {
            defaultBehavior: {
                origin: new aws_cdk_lib_3.aws_cloudfront_origins.S3Origin(bucket),
                viewerProtocolPolicy: aws_cdk_lib_3.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            },
            defaultRootObject: "index.html",
            errorResponses: [
                {
                    httpStatus: 403,
                    responseHttpStatus: 200,
                    responsePagePath: "/index.html",
                    ttl: aws_cdk_lib_3.Duration.minutes(5),
                },
            ],
        });
        new aws_cdk_lib_2.aws_s3_deployment.BucketDeployment(this, "deployReactApp", {
            sources: [aws_cdk_lib_2.aws_s3_deployment.Source.asset("./web/dist")],
            destinationBucket: bucket,
        });
    }
}
exports.SeminarStack = SeminarStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtaW5hci1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbWluYXItc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQStEO0FBRS9ELDZDQUF3RDtBQUN4RCw2Q0FBK0U7QUFFL0UsTUFBYSxZQUFhLFNBQVEsbUJBQUs7SUFDckMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLE1BQU0sR0FBRyxJQUFJLG9CQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDcEQsYUFBYSxFQUFFLDJCQUFhLENBQUMsT0FBTztZQUNwQyxpQkFBaUIsRUFBRSxJQUFJO1NBQ3hCLENBQUMsQ0FBQztRQUVILE1BQU0sWUFBWSxHQUFHLElBQUksNEJBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN6RSxlQUFlLEVBQUU7Z0JBQ2YsTUFBTSxFQUFFLElBQUksb0NBQXNCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDbkQsb0JBQW9CLEVBQ2xCLDRCQUFjLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCO2FBQ3hEO1lBQ0QsaUJBQWlCLEVBQUUsWUFBWTtZQUUvQixjQUFjLEVBQUU7Z0JBQ2Q7b0JBQ0UsVUFBVSxFQUFFLEdBQUc7b0JBQ2Ysa0JBQWtCLEVBQUUsR0FBRztvQkFDdkIsZ0JBQWdCLEVBQUUsYUFBYTtvQkFDL0IsR0FBRyxFQUFFLHNCQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDekI7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksK0JBQWlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQzdELE9BQU8sRUFBRSxDQUFDLCtCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkQsaUJBQWlCLEVBQUUsTUFBTTtTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUEvQkQsb0NBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVtb3ZhbFBvbGljeSwgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tIFwiYXdzLWNkay1saWJcIjtcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBhd3NfczMsIGF3c19zM19kZXBsb3ltZW50IH0gZnJvbSBcImF3cy1jZGstbGliXCI7XG5pbXBvcnQgeyBhd3NfY2xvdWRmcm9udCwgYXdzX2Nsb3VkZnJvbnRfb3JpZ2lucywgRHVyYXRpb24gfSBmcm9tIFwiYXdzLWNkay1saWJcIjtcblxuZXhwb3J0IGNsYXNzIFNlbWluYXJTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBidWNrZXQgPSBuZXcgYXdzX3MzLkJ1Y2tldCh0aGlzLCBcIkJ1aWxkQnVja2V0XCIsIHtcbiAgICAgIHJlbW92YWxQb2xpY3k6IFJlbW92YWxQb2xpY3kuREVTVFJPWSxcbiAgICAgIGF1dG9EZWxldGVPYmplY3RzOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGlzdHJpYnV0aW9uID0gbmV3IGF3c19jbG91ZGZyb250LkRpc3RyaWJ1dGlvbih0aGlzLCBcIkRpc3RyaWJ1dGlvblwiLCB7XG4gICAgICBkZWZhdWx0QmVoYXZpb3I6IHtcbiAgICAgICAgb3JpZ2luOiBuZXcgYXdzX2Nsb3VkZnJvbnRfb3JpZ2lucy5TM09yaWdpbihidWNrZXQpLFxuICAgICAgICB2aWV3ZXJQcm90b2NvbFBvbGljeTpcbiAgICAgICAgICBhd3NfY2xvdWRmcm9udC5WaWV3ZXJQcm90b2NvbFBvbGljeS5SRURJUkVDVF9UT19IVFRQUyxcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0Um9vdE9iamVjdDogXCJpbmRleC5odG1sXCIsXG5cbiAgICAgIGVycm9yUmVzcG9uc2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBodHRwU3RhdHVzOiA0MDMsXG4gICAgICAgICAgcmVzcG9uc2VIdHRwU3RhdHVzOiAyMDAsXG4gICAgICAgICAgcmVzcG9uc2VQYWdlUGF0aDogXCIvaW5kZXguaHRtbFwiLFxuICAgICAgICAgIHR0bDogRHVyYXRpb24ubWludXRlcyg1KSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgbmV3IGF3c19zM19kZXBsb3ltZW50LkJ1Y2tldERlcGxveW1lbnQodGhpcywgXCJkZXBsb3lSZWFjdEFwcFwiLCB7XG4gICAgICBzb3VyY2VzOiBbYXdzX3MzX2RlcGxveW1lbnQuU291cmNlLmFzc2V0KFwiLi93ZWIvZGlzdFwiKV0sXG4gICAgICBkZXN0aW5hdGlvbkJ1Y2tldDogYnVja2V0LFxuICAgIH0pO1xuICB9XG59XG4iXX0=