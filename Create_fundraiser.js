import React from 'react'

export default function Create_fundraiser() {
    return (
        <div>
            <div className="container my-4 shadow-lg p-3 mb-5 bg-body rounded">
                <hr />
                <h2 className="text-center">Create your Fundraiser</h2>
                <div className="container">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div className="col">
                            <div className="p-3 border bg-light">Orphanage</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Animals</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Patient</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Old Age</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Education</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">PHysically Challanged</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Row column</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Row column</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Row column</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Row column</div>
                        </div>
                    </div>
                    <div className="container my-3">
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-dark" data-bs-toggle="modal" data-bs-Target="#CreateFudR" type="button">Create Fundraiser</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="modal" id="CreateFudR" tabindex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">

                                    <form className="row g-3">
                                        <div className="col-12">
                                            <label for="inputAddress" className="form-label">Name of Organizaiton</label>
                                            <input type="text" className="form-control" id="inputOrg" placeholder="XYZ organization" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="inputName" className="form-label">Name</label>
                                            <input type="text" className="form-control" placeholder="Name" aria-label="name"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="inputEmail4" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="inputEmail4" />
                                        </div>                                        
                                        <div className="col-12">
                                            <label for="inputAddress" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                        </div>
                                        <div className="col-12">
                                            <label for="inputAddress2" className="form-label">Address 2</label>
                                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="inputCity" className="form-label">City</label>
                                            <input type="text" className="form-control" id="inputCity" />
                                        </div>
                                        <div className="col-md-4">
                                            <label for="inputState" className="form-label">State</label>
                                            <select id="inputState" className="form-select">
                                                <option selected>Choose...</option>
                                                <option>Andra Pradesh</option>
                                                <option>Assam</option>
                                                <option>Delhi</option>
                                                <option>Maharashtra</option>
                                                <option>Madhya Pradesh</option>
                                                <option>Rajasthan</option>
                                                <option>Gujrat</option>
                                                <option>Punjab</option>
                                            </select>
                                        </div>
                                        <div className="col-md-2">
                                            <label for="inputZip" className="form-label">Zip</label>
                                            <input type="text" className="form-control" id="inputZip" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="inputCate" className="form-label">Category</label>
                                            <input type="text" className="form-control" id="inputC" />
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                <label className="form-check-label" for="gridCheck">
                                                    Check me out
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary">Sign in</button>
                                        </div>
                                    </form>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
