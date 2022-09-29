import React, { useEffect, useState } from 'react';
import CartList from '../../components/Cart/CartList';
import CartPayment from '../../components/Cart/CartPayment';
import styles from './Cart.module.scss';
import axios from 'axios';

function Cart() {
  const [cartData, setCartData] = useState([]);
  const [message, setMessage] = useState('');

  //user 장바구니 데이터 불러오기
  useEffect(() => {
    fetch('http://localhost:10010/cart', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartData(data.cart);
      });
  }, [cartData]);

  //장바구니 수량 및 가격 변경
  const increaseProductPriceAndAmount = e => {
    let copy = [...cartData];
    console.log(e.target.id);
    copy[e.target.id].quantity = copy[e.target.id].quantity + 1;
    copy[e.target.id].price =
      copy[e.target.id].quantity * copy[e.target.id].product_price;
    copy[e.target.id].allPrice =
      copy[e.target.id].quantity * copy[e.target.id].product_price +
      copy[e.target.id].delivery_fee;
    return setCartData(copy);
  };

  const decreaseProductPriceAndAmount = e => {
    let copy = [...cartData];
    copy[e.target.id].quantity = copy[e.target.id].quantity - 1;
    copy[e.target.id].price =
      copy[e.target.id].quantity * copy[e.target.id].product_price;
    copy[e.target.id].allPrice =
      copy[e.target.id].quantity * copy[e.target.id].product_price +
      copy[e.target.id].delivery_fee;
    return setCartData(copy);
  };

  function patchAmountChange(e) {
    try {
      axios.patch(
        'http://localhost:10010/cart',
        {
          cart_id: cartData[e.target.id].cart_id,
          quantity: cartData[e.target.id].quantity,
          price: cartData[e.target.id].price,
        },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
      );
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error:${err.message}`);
      }
    }
  }

  //장바구니 삭제
  const deleteCartList = e => {
    let copy = [...cartData];
    copy.splice(e.target.id, 1);
    setCartData(copy);
  };

  function deleteCartListData(e) {
    fetch('http://localhost:10010/cart', {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        cart_id: cartData[e.target.id].cart_id,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  //장바구니 결제
  function payForSales() {
    fetch('http://localhost:10010/payment', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(error => console.log(error));

    if (message === '구매가 완료 되었습니다.') {
      alert('구매가 완료 되었습니다.');
    }
  }

  return (
    <div className={styles.cart_wrapper}>
      <div className={styles.cart_title}>장바구니</div>
      <div className={styles.cart_list_payment_wrapper}>
        <div className={styles.cart_list_container}>
          <div className={styles.checked_all_container}>
            <input type="checkbox"></input>
            <span>전체선택</span>
          </div>
          <div className={styles.cart_list_wrapper}>
            {cartData.map((cartData, i) => {
              return (
                <CartList
                  key={i}
                  cartData={cartData}
                  id={i}
                  increaseProductPriceAndAmount={increaseProductPriceAndAmount}
                  decreaseProductPriceAndAmount={decreaseProductPriceAndAmount}
                  deleteCartList={deleteCartList}
                  patchAmountChange={patchAmountChange}
                  deleteCartListData={deleteCartListData}
                  payForSales={payForSales}
                />
              );
            })}
          </div>
        </div>

        <CartPayment cartData={cartData} payForSales={payForSales} />
      </div>
    </div>
  );
}
export default Cart;
