import React, { useEffect, useState } from 'react'
import UserInfo from './UserInfo';
import OrderHistoryItemContainer from './OrderHistoryItemContainer';
import styles from './UserProfilePage.module.css'
import { api } from '../../api';
import Spinner from '../ui/Spinner';

const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState({})
  const [loading, setLoading] = useState(false)
  const [orderItems, setOrderItems] = useState([])
  const [userData, setUserData] = useState(
    {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      city: "",
      state: "",
      address: "",
      phone: "",
    }
  )
  const [profileUpdated, setProfileUpdated] = useState(false)


  const fetchUserInfo = () => {
    setLoading(true)
    api.get('user_info')
    .then(res => {
      console.log(res.data)
      setUserInfo(res.data)
      setOrderItems(res.data.items)
      setLoading(false)
    })
    .catch(err => {
      console.log(err.message)
      setLoading(false)
    })
  }

  useEffect(fetchUserInfo, [profileUpdated]) // Fetch user info whenever it changes

  const handleProfileUpdate = () => {
    fetchUserInfo()
  }

  if (loading) {
    return <Spinner loading={loading} />
  }
  return (
    <section style={{ paddingTop: '80px' }}>
      <div className={styles.profilePage}>
        <div className={styles.sidebar}>
          <UserInfo userInfo={userInfo} setUserData={setUserData} userData={userData} handleProfileUpdate={handleProfileUpdate} />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.accountOverview}>
            <h5 className='text-primary'>Account Overview</h5>
            <div className={styles.accountDetails}>
              <div>
                <p><strong>First Name:</strong> {userInfo.first_name}</p>
                <p><strong>Last Name:</strong> {userInfo.last_name}</p>
                <p><strong>Email:</strong> {userInfo.email}</p>
                <p><strong>Phone:</strong> {userInfo.phone || "null"}</p>
              </div>
              <div>
                <p><strong>Address:</strong> {userInfo.address || "null"}</p>
                <p><strong>City:</strong> {userInfo.city || "null"}</p>
                <p><strong>State:</strong> {userInfo.state || "null"}</p>
                <p><strong>Country:</strong> {userInfo.country || "null"}</p>
              </div>
            </div>
          </div>
          <OrderHistoryItemContainer orderItems={orderItems} />
        </div>
      </div>
    </section>
  )
}

export default UserProfilePage;