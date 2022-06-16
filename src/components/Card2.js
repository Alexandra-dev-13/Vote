import React from 'react'
import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Card2() {
    return (
        <div>
            <div className="container-fluid myCard">
                <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-5" >
                    <div className="col-lg-6 question">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                            <div className="d-flex flex-row h-100 p-5 pb-3 text-white text-shadow-1">
                                <button className="btn btn-primary m-5">Créer un vote</button>
                                <button className="btn btn-primary m-5">Prendre part à un vote</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 question">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                            <div className="d-flex flex-row h-100 p-5 pb-3 text-white text-shadow-1">
                                <button className="btn btn-secondary m-5">Activité sur un titre foncier</button>
                                <button className="btn btn-secondary m-5">Transférer mon titre</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

