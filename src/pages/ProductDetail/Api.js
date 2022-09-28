import { BASE_URL } from '../../config.js';

export async function getProduct(productId) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${BASE_URL}/products/${productId}`, {
    // const res = await fetch(`/mocks/ProductDetail/product${productId}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).catch(() => alert('제품을 불러오는데 실패하였습니다.'));

  return res.json();
}

export async function getReviews(productId) {
  const res = await fetch(`${BASE_URL}/productreviews/${productId}`, {
    // const res = await fetch(`/mocks/ProductDetail/reviews.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(() => alert('제품을 불러오는데 실패하였습니다.'));

  return res.json();
}

export async function patchProductLike(productId) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${BASE_URL}/products/${productId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).catch(() => alert('제품 좋아요를 실패하였습니다.'));

  return res.json();
}

export async function postProductCart(data) {
  console.log(data);
  const token = localStorage.getItem('token');
  if (!token) {
    alert('로그인해주세요.');
    return;
  }
  const res = await fetch(`${BASE_URL}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  }).catch(() => alert('장바구니 추가를 실패하였습니다.'));

  return res;
}
