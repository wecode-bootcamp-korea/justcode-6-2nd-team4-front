import { BASE_URL } from '../../config.js';

export async function getProduct() {
  // const res = await fetch(`${BASE_URL}/product`, {
  const res = await fetch(`/mocks/ProductDetail/product1.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(() => alert('제품을 불러오는데 실패하였습니다.'));

  return res.json();
}
