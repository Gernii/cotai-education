import type { AwsResourceCondition, AwsResourceDependsOn } from '@serverless/typescript';

export interface Resource {
	Type: string;
	Properties?: {
		[k: string]: unknown;
	};
	CreationPolicy?: {
		[k: string]: unknown;
	};
	DeletionPolicy?: string;
	DependsOn?: AwsResourceDependsOn;
	Metadata?: {
		[k: string]: unknown;
	};
	UpdatePolicy?: {
		[k: string]: unknown;
	};
	UpdateReplacePolicy?: string;
	Condition?: AwsResourceCondition;
}

export interface Output {
	[k: string]: unknown;
}
