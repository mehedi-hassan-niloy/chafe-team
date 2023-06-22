import React from 'react';

const Work = ({ data }) => {
    const { picture, name, details } = data
    return (
        <div>
            <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded" style={{ maxWidth: "540px;" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={picture} style={{ height: "200px", width: '300px' }} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8 ">
                        <div className="card-body">
                            <h5 className="card-title mt-4 mb-4">{name}</h5>
                            <p className="card-text mt-4">{details}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;