import { useState, forwardRef, useImperativeHandle } from 'react';
import DaumPostCode from 'react-daum-postcode';

const DaumPost = forwardRef((props, _ref) => {
  const [adress, setAdress] = useState('');

  const handle = data => {
    setAdress(`${data.address}`);
    console.log(`
            주소: ${data.address},
            우편번호: ${data.zonecode}
        `);
  };

  useImperativeHandle(_ref, () => ({
    getChild: () => {
      return adress;
    },
  }));

  return (
    <div>
      <DaumPostCode
        onComplete={handle} // 값을 선택할 경우 실행되는 이벤트
        autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
      />
    </div>
  );
});
export default DaumPost;
