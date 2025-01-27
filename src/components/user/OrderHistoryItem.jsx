import React from 'react';
import styles from './OrderHistoryItem.module.css';
import { BASEURL } from '../../api';
import { FormatDate } from '../../formatDate';

const OrderHistoryItem = ({item}) => {
  return (
    <div className={styles.orderItem} >
      <img
        src={`${BASEURL}${item.product.image}`}
        alt="Order Item"
        className={styles.itemImage}
      />
      <div className={styles.details}>
        <h6 className={`styles.itemName`}>
          <b>{item.product.name}</b>
        </h6>
        <p><b>Order Date:</b> {FormatDate(item.order_date)}</p>
        <p><b>Order ID:</b> {item.order_id}</p>
      </div>
      <div className={styles.quantity}>
        <h6><b>Quantity:</b> {item.quantity}</h6>
      </div>
      <div className={styles.price}>
        <h6><b>Price:</b> ${item.product.price}</h6>
      </div>
    </div>
  );
};

export default OrderHistoryItem;
