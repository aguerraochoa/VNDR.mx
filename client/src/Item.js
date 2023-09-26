import React from 'react';

const Item = (props) => {
    return (
        <div className="col mb-5">
            <div className="item-card card h-100">
                <img className="item-image card-img-top p-2" src={props.image} alt="..." />
                <div className="card-body p-4">
                    <div className="item-desc text-center">
                        <h5 className="fw-bolder">{props.title}</h5>
                        {props.price}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="item-btn mt-auto" target="_blank" href={props.site}>Comprar</a></div>
                </div>
            </div>
        </div>
    );
};

export default Item;