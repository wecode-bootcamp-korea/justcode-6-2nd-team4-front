const CLIENT_ID = 'e7b4643c322b0a5f4b47dd3b5f7b9dec';
const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
