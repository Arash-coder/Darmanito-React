import React from 'react';
import style from './Cart.module.scss';

const Cart = (props) => {
    return (
        <div className={style.grid_item}>
            <div className={[style.grid_item_detail, style.speci3].join(' ')}>
                <div className={style.pic}>
                    <img src={props.pic} alt={props.pic} />
                </div>
                <p className={style.desc}>{ props.name}</p>
            </div>
        </div>
    );
}

export default Cart;