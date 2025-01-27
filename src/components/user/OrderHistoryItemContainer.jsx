import React from 'react';
import OrderHistoryItem from './OrderHistoryItem';
import styles from './OrderHistoryItemContainer.module.css';

const OrderHistoryItemContainer = ({orderItems}) => {
  return (
    <div className={styles.orderHistory}>
      <h5 className={`text-primary ${styles.header}`}>Order History</h5>
      <div className={styles.items} style={{overflow: 'scroll',height: '37.3vh'}}>
        {orderItems.map(item => <OrderHistoryItem key={item.id} item={item} />)}
        {/* <OrderHistoryItem orderItems={orderItems} /> */}
      </div>
    </div>
  );
};

export default OrderHistoryItemContainer;
