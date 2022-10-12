import React from "react";

function Home() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item">
                                    <a href="">Uplon</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    Dashboard
                                </li>
                            </ol>
                        </div>
                        <h4 className="page-title">Dashboard</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 col-xl-3">
                    <div className="card-box tilebox-one">
                        <i className="icon-layers float-right m-0 h2 text-muted"></i>
                        <h6 className="text-muted text-uppercase mt-0">
                            Orders
                        </h6>
                        <h3 className="my-3" data-plugin="counterup">
                            1,587
                        </h3>
                        <span className="badge badge-success mr-1"> +11% </span>{" "}
                        <span className="text-muted">From previous period</span>
                    </div>
                </div>

                <div className="col-md-6 col-xl-3">
                    <div className="card-box tilebox-one">
                        <i className="icon-paypal float-right m-0 h2 text-muted"></i>
                        <h6 className="text-muted text-uppercase mt-0">
                            Revenue
                        </h6>
                        <h3 className="my-3">
                            $<span data-plugin="counterup">46,782</span>
                        </h3>
                        <span className="badge badge-danger mr-1"> -29% </span>{" "}
                        <span className="text-muted">From previous period</span>
                    </div>
                </div>

                <div className="col-md-6 col-xl-3">
                    <div className="card-box tilebox-one">
                        <i className="icon-chart float-right m-0 h2 text-muted"></i>
                        <h6 className="text-muted text-uppercase mt-0">
                            Average Price
                        </h6>
                        <h3 className="my-3">
                            $<span data-plugin="counterup">15.9</span>
                        </h3>
                        <span className="badge badge-pink mr-1"> 0% </span>{" "}
                        <span className="text-muted">From previous period</span>
                    </div>
                </div>

                <div className="col-md-6 col-xl-3">
                    <div className="card-box tilebox-one">
                        <i className="icon-rocket float-right m-0 h2 text-muted"></i>
                        <h6 className="text-muted text-uppercase mt-0">
                            Product Sold
                        </h6>
                        <h3 className="my-3" data-plugin="counterup">
                            1,890
                        </h3>
                        <span className="badge badge-warning mr-1"> +89% </span>{" "}
                        <span className="text-muted">Last year</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
