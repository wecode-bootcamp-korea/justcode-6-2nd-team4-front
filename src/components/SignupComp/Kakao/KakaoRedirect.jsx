import { useEffect } from 'react';
import axios from 'axios';

const KakaoRedirectHandler = () => {
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get('code'); // 인가코드 받는 부분
    let grant_type = 'authorization_code';
    let client_id = '2421507dafe955845cb57aea8ac410a9';

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?
        grant_type=${grant_type}
        &client_id=${client_id}
        &redirect_uri=	
        'http://localhost:3000/callback/'
        &code=${code}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      )
      .then(res => {
        console.log(res);
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
      })
      .then(data => {
        console.log(data);
      });
  }, []);
};

export default KakaoRedirectHandler;
