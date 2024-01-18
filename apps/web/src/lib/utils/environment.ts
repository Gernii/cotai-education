export const API_ID = '429hms92i2';
export const API_REGION = 'ap-southeast-1';
// export const BASE_URL = `https://${API_ID}.execute-api.${API_REGION}.amazonaws.com`;
export const BASE_URL = `http://localhost:4000`;

export const AUTH_PATH = '/auth';

export const COGNITO_REGION = 'ap-southeast-1';
export const COGNITO_POOLNAME = 'gvayT1iZQ';
export const COGNITO_CLIENT_ID = '466smaoga23790vpgs6r07q39b';
export const COGNITO_URL = `https://cognito-idp.${COGNITO_REGION}.amazonaws.com`;

export const ACCESS_TOKEN = `${COGNITO_CLIENT_ID}_access_token`;
export const ID_TOKEN = `${COGNITO_CLIENT_ID}_id_token`;
export const REFRESH_TOKEN = `${COGNITO_CLIENT_ID}_refresh_token`;
