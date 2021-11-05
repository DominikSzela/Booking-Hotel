import React from 'react';
import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';

function Hotel() {
    return (
        <div className={`card ${styles.hotel}`}>
            <div className="card-body">
                <div className="row">
                    <div className="col-4">
                        <img src={hotelImg}
                            alt=""
                            className="img-fluid img-thumbnail" />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <p className={styles.title}>Hotel</p>
                                <span>Warszawa</span>
                            </div>
                            <div className="col text-right">
                                <p>ocena: 4.8/5.0</p>
                                <a href="#" className="btn btn-primary mt-2 px-5">pokaż</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className={styles.description}>
                            cos opis coscos opis coscos opis cos
                            cos opis coscos opis coscos opis cos
                            cos opis coscos opis coscos opis cos
                            cos opis coscos opis coscos opis cos
                        </p>
                    </div>
                </div >
            </div>
        </div>
    );
}

export default Hotel;