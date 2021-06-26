/* eslint-disable react/prop-types */

import React, { useCallback, useState, useRef } from 'react'
import { GetAllProduct, DecreaseQuantity, AddCart, DeleteCart } from '../../reduxcart/actions'
import { connect } from 'react-redux'
import HeaderBar from '../components/headercpn'
import styles from './shoppingcart.module.css'
import QualityInput from '../components/qualityinput'
import { calculateTotalMoney, formatNumberToMoney } from '../../utils/utils'
import Modal from 'react-modal'
import CartItem from '../components/cartitem'
// Modal.setAppElement('#root')

function ShoppingCart ({ products, decreaseQuantity, addCart, deleteCart }) {
  const [idOpenAlert, setOpenAlert] = useState(false)
  const { Carts = [] } = products?.payload?._todoProduct

  const selectedItem = useRef(null)
  // const [totalMoney, setTotalMoney] = useState(0)
  const totalMoney = calculateTotalMoney(Carts)
  console.log('total money ' + totalMoney)
  const [reload, setReload] = useState(0)

  const toggleAlertModal = () => {
    setOpenAlert(!idOpenAlert)
  }

  const onDeleteItem = () => {
    deleteCart({ id: selectedItem.current })
    toggleAlertModal()
  }

  const renderDialog = () => {
    return (
      <div className={styles.dialogView}>
          <div></div>
          <div className={styles.dialogHeader}>
            <span>Bạn muốn xoá sản phẩm này ?</span>
          </div>
          <div className={styles.buttonAction}>
            <button onClick={toggleAlertModal} className={styles.close}>Không</button>
            <button onClick={onDeleteItem} className={styles.action}>Xoá</button>
          </div>
      </div>
    )
  }

  const onChangeQuality = ({ id, quality = 1, type }) => {
    selectedItem.current = id
    if (type === 'delete') {
      toggleAlertModal()
    } else if (type === 'minus') {
      decreaseQuantity({ id: id, quality: quality })
      setReload(reload + 1)
    } else if (type === 'add') {
      addCart({ id: id, quality: quality })
      setReload(reload + 1)
    }
  }

  return (
        <>
            <HeaderBar/>
            <div className={styles.container}>
              <div className={styles.infoView}>
                  <div className={styles.cartView}>
                      <div>
                          {Carts.map((item, index) => (<CartItem key={item.id} item={item} callback={onChangeQuality}/>))}
                      </div>
                      {/* <div className={styles.totalView} >
                          <span>Tạm tính:</span><h4>{formatNumberToMoney(totalMoney, 0, 'đ')}</h4>
                      </div> */}
                  </div>
                  <div className={styles.sumView}>
                    <div className={styles.totalPrice}>
                      <div className={styles.price}>
                        <span>Tạm tính</span>
                        <span>{formatNumberToMoney(totalMoney, 0, 'đ')}</span>
                      </div>
                      <div className={styles.price}>
                        <span>Giảm giá</span>
                        <span>{}</span>
                      </div>
                    </div>

                  </div>
                </div>
                <Modal
                    isOpen={idOpenAlert}
                    onRequestClose={toggleAlertModal}
                    contentLabel="My dialog"
                    className={styles.mymodal}
                    overlayClassName={styles.myoverlay}
                    closeTimeoutMS={500}
                  >
                  {renderDialog()}
                </Modal>
            </div>
        </>
  )
}

const mapStateToProps = state => ({
  products: GetAllProduct(state)
})

const mapDispatchToProps = {
  decreaseQuantity: DecreaseQuantity,
  addCart: AddCart,
  deleteCart: DeleteCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
