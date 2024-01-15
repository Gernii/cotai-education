import type { Output, Resource } from './types';

export const CognitoUserPoolResourceName = 'CognitoUserPool';
export const CognitoUserPoolOutputName = `${CognitoUserPoolResourceName}Id`;
export const CognitoUserPoolExportName = `${CognitoUserPoolResourceName}-\${sls:stage}`;

export const CognitoUserPoolResource: Resource = {
	Type: 'AWS::Cognito::UserPool',
	Properties: {
		UserPoolName: '${self:provider.stackName}-pool',
		AliasAttributes: ['email', 'preferred_username'],
		AutoVerifiedAttributes: ['email']
	}
};

export const CognitoUserPoolOutput: Output = {
	Description: 'The ID of the User Pool',
	Value: {
		Ref: CognitoUserPoolResourceName
	},
	Export: {
		Name: CognitoUserPoolExportName
	}
};

export const CognitoUserPoolClientResourceName = 'CognitoUserPoolClient';
export const CognitoUserPoolClientOutputName = `${CognitoUserPoolClientResourceName}Id`;
export const CognitoUserPoolClientExportName = `${CognitoUserPoolClientResourceName}-\${sls:stage}`;

export const CognitoUserPoolClientResource: Resource = {
	Type: 'AWS::Cognito::UserPoolClient',
	Properties: {
		ClientName: '${self:provider.stackName}-client',
		UserPoolId: {
			Ref: CognitoUserPoolResourceName
		},
		GenerateSecret: false,
		ExplicitAuthFlows: [
			'ALLOW_CUSTOM_AUTH',
			'ALLOW_ADMIN_USER_PASSWORD_AUTH',
			'ALLOW_REFRESH_TOKEN_AUTH',
			'ALLOW_USER_PASSWORD_AUTH'
		]
	}
};

export const CognitoUserPoolClientOutput: Output = {
	Description: 'The ID of the User Pool Client',
	Value: {
		Ref: CognitoUserPoolClientResourceName
	},
	Export: {
		Name: CognitoUserPoolClientExportName
	}
};
