const CLIENT_ID = '2421507dafe955845cb57aea8ac410a9';
const REDIRECT_URI = 'http://localhost:3000/callback';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
