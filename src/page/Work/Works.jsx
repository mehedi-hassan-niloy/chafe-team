import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Work from './Work';

const Works = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-neloy1435-gmailcom.vercel.app/workData')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    return (
        <div className='m-5 '>
            <h1 className='text-center mt-5 mb-5 text-primary'>How it <span className='text-info'>Works?</span> </h1>
            <Row xs={1} md={2} className="g-4">
                {
                    datas.map(data => <Work
                    key={data._id}
                        data={data}
                    />)
                }
            </Row>
        </div>
    );
};

export default Works;