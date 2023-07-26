// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(item => {
        total += item.price * item.quantity
      })

      return (
        <>
          <div className="summary-container">
            <h1 className="order-heading">
              <span className="span-order">Order Total:</span> Rs {total}
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button type="button" className="check-out-btn d-sm-none">
              Checkout
            </button>
          </div>
          <button type="button" className="check-out-btn d-lg-none">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
