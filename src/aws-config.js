import AWS from "aws-sdk";

AWS.config.region = "us-east-1"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-1:cc9fadcf-503b-41f1-a7c1-7f1da0b9a014"
});

export let rekognition = new AWS.Rekognition({ apiVersion: "2016-06-27" });
