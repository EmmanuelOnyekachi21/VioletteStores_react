import React, { useState } from 'react';
import styles from './UserInfo.module.css';
import dog from '../../assets/images/dog.jpg'
import { api } from '../../api';

const UserInfo = ({ userInfo, userData, setUserData, handleProfileUpdate }) => {
  const [showModal, setShowModal] = useState(false);

  const handleChange = function (e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  const handleOpenModal = () => {
    // Populate userData with userInfo when opening the modal
    setUserData(userInfo)
    setShowModal(true)
  }

  function handleSaveChanges() {
    api.put('edit_profile/', userData)
    .then(res => {
      console.log(res.data)
      setShowModal(false);

      if (handleProfileUpdate) {
        handleProfileUpdate(); // notify parent aboout update.
      }
    })
    .catch(err => console.log(err.message))
  }
  return (
    <div className={styles.userInfo}>
      <img
        src={dog}
        alt="User Profile"
        className={styles.profileImage}
      />
      <h4 className={styles.userName}>{userInfo.username}</h4>
      <p className={styles.userEmail}>{userInfo.email}</p>
      <button className={styles.editButton} onClick={handleOpenModal} >Edit Profile</button>


      {showModal && (<div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        tabIndex='-1'
        role='dialog'
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={() => setShowModal(false)} // close modal if user clicks outside
      >
        <div className={`modal-dialog ${styles.moddialog}`} role='document' onClick={(e) => e.stopPropagation()}>
          <div className={`modal-content ${styles.modcontent}`}>
            {/* Header */}
            <div className={`modal-header ${styles.modheader}`}>
              <h5 className={`modal-title ${styles.modtitle}`}>Edit Profile</h5>
              <button type="button" className={`${styles.btnclose} btn-close`} onClick={() => setShowModal(false)}></button>
            </div>

            {/* modal body */}
            <div className={`modal-body ${styles.modbody}`}>
              <form>
                <div className={`formRow ${styles.formRow}`}>
                  <label className={`form-label ${styles.formlabel}`}>Username</label>
                  <input
                    type="text"
                    className={`form-control ${styles.formcontrol}`}
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                  />
                </div>

                <div className={`formRow ${styles.formRow}`}>
                  <label className={`form-label ${styles.formlabel}`}>Email</label>
                  <input
                    type="email"
                    className={`form-control ${styles.formcontrol}`}
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={`formRow ${styles.formRow}`}>
                  <label className={`form-label ${styles.formlabel}`}>First Name</label>
                  <input
                    type="text"
                    className={`form-control ${styles.formcontrol}`}
                    name="first_name"
                    value={userData.first_name}
                    onChange={handleChange}
                  />
                </div>

                <div className={`formRow ${styles.formRow}`}>
                  <label className={`form-label ${styles.formlabel}`}>Last Name</label>
                  <input
                    type="text"
                    className={`form-control ${styles.formcontrol}`}
                    name="last_name"
                    value={userData.last_name}
                    onChange={handleChange}
                  />
                </div>

                <div className={`formRow ${styles.formRow}`}>
                  <label className={`form-label ${styles.formlabel}`}>Phone Number</label>
                  <input
                    type="tel"
                    className={`form-control ${styles.formcontrol}`}
                    name="phone"
                    value={userData.phone || ""}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className={`formRow ${styles.formRow}`}>
                  <label className={`form-label ${styles.formlabel}`}>City</label>
                  <input
                    type="text"
                    className={`form-control ${styles.formcontrol}`}
                    name="city"
                    value={userData.city || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className={`formRow ${styles.formRow}`}>
                  <label className={`form-label ${styles.formlabel}`}>State</label>
                  <input
                    type="text"
                    className={`form-control ${styles.formcontrol}`}
                    name="state"
                    value={userData.state || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className={`formRow ${styles.formRow}`}>
                  <label className={`form-label ${styles.formlabel}`}>Address</label>
                  <input
                    type="text"
                    className={`form-control ${styles.formcontrol}`}
                    name="address"
                    value={userData.address || ""}
                    onChange={handleChange}
                  />
                </div>

              </form>
            </div>
            <div className={`modal-footer ${styles.modfooter}`}>
              <button
                type="button"
                className={`btn btn-secondary`}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className={`btn btn-primary`}
              onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </div>
          </div>

        </div>
      </div>)}







    </div>
  );
};

export default UserInfo;
