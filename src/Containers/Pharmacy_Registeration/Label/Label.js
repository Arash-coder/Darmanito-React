import React, { Component } from 'react';

import person from '../../../assets/images/person.png';
import style from './Label.module.scss';

class Label extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className={style.label}>
                    <div className={style.time}>شبانه روزی</div>
                    <div>
                        <h3 className={style.name_phar}>نام داروخانه شما</h3>
                        <div className={style.adress}>
                            <h4>درمانیتو/سرویس داروخانه/داروخانه شما</h4>
                            <i className="material-icons icon">location_on</i>
                        </div>
                    </div>
                    <div className={style.pic}>
                        <img src={person} alt="img" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Label;