import { useState, forwardRef, useImperativeHandle } from 'react';
import DaumPostCode from 'react-daum-postcode';

const DaumPost = forwardRef((props, refVal) => {
  const [adress, setAdress] = useState('');

  const handler = data => {
    setAdress(`${data.address}`);
  };

  useImperativeHandle(refVal, () => ({
    getChild: () => {
      return adress;
    },
  }));

  return (
    <div>
      <DaumPostCode onComplete={handler} autoClose={false} />
    </div>
  );
});
export default DaumPost;
