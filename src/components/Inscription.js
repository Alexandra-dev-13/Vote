import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from './Nav'

export default function Inscription() {
    return (
        <div className="container-fluid">
            <Nav />

            <div className="card o-hidden border-0 shadow-lg my-5" style={{ height: '80vh' }}>
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Crer un compte</h1>
                                </div>
                                <form className="user">
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-3">
                                            <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                placeholder="Nom" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                placeholder="Prénom" />
                                        </div>
                                    </div>
                                    <div className="form-group mb-sm-3">
                                        <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                            placeholder="Email" />
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-2">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Mot de passe" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleRepeatPassword" placeholder="Retaper Mot de passe" />
                                        </div>
                                    </div>
                                    <a href="login.html" className="btn btn-primary btn-center">
                                        Register Account
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
