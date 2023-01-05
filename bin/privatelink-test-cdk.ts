#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {PrivatelinkEcsAppStack, PrivatelinkPipelineStack} from '../lib/privatelink-pipeline-stack';

const app = new cdk.App();
const privatelinkStack = new PrivatelinkPipelineStack(app, 'PrivatelinkTestPipelineStack', {
});
new PrivatelinkEcsAppStack(app, "PrivatelinkEcsStackDeployedInPipeline",{
    image: privatelinkStack.tagParameterContainerImage
})