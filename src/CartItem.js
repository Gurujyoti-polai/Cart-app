import React from 'react'

class CartItem extends React.Component {
    
  // testing () {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('done');
  //     }, 5000);
  //   })

  //   promise.then(() => {
  //     // setState acts like a synchronus call
  //     this.setState({ qty: this.state.qty + 10 });

  //     this.setState({ qty: this.state.qty + 10 });

  //     this.setState({ qty: this.state.qty + 10 });

  //     console.log('state', this.state);
  //   });
  // }
increaseQuantity = () =>{
    // this.state.qty += 1;
    // console.log('this', this.state);
    // setState form 1
    // this.setState({
    //   qty: this.state.qty + 1
    // });

    // setState form 2 - if prevState required use this
    this.setState((prevState) => {
        return {
          qty: prevState.qty + 1
        }
      }, () => {
        console.log('this.state', this.state);
      });
}
decreaseQuantity = () => {
    const { qty } = this.state;

    if (qty === 0) {
      return;
    }
    // setState form 2 - if prevState required use this
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1
      }
    });
}
    render() {
        console.log('this.props', this.props);
        const { price, title, qty } = this.props.product;
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
                        <img
                         alt="increase" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1637384375~hmac=f93642a42c38b04921f62a15a94abfe0" 
                         onClick={this.increaseQuantity}
                        />
                        <img
                         alt="decrease" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/04/60/56/57/500_F_460565747_PE6uYbtfeXASxkZpibOoN6SKUWTUHPvY.jpg" 
                         onClick={this.decreaseQuantity}
                        />
                        <img
                         alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1637384550~hmac=e4cda09401617836b40f8606dd842bde" 
                        />
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