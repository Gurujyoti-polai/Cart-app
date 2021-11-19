import React from 'react'

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }
    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.images} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs {price}</div>
                    <div style={ { color: '#777' } }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img alt="increase" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740679.png?token=exp=1637325555~hmac=7475e847db09019e1a4891ac1956dd6b" />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3524/premium/3524388.png?token=exp=1637325598~hmac=64493e1a6deb44dabb034e060eeee472" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1637325636~hmac=13e5bca3947f8566e3d59e4df6788047" />
                    </div>
                </div> 
            </div>
        )
    }
}

const styles = {
    images: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}



export default CartItem