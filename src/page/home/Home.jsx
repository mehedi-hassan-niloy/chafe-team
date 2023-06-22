import React, { useEffect, useState } from 'react';
import HomeCard from './HomeCard';
import { Row } from 'react-bootstrap';

const Home = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-neloy1435-gmailcom.vercel.app/allData')
            .then(res => res.json())
            .then(data => setDatas(data))
            
            .catch(error => console.log(error))
            
    }, [])
    return (
        <div className='m-5 mt-5 pt-5'>
            <h2 className='text-center text-primary'>Chef <span className='text-info'>Team</span> </h2>
            <Row xs={1} md={3} className="g-4">
                {
                    datas.map(data => <HomeCard
                        key={data._id}
                        data={data}
                    />)
                }

            </Row>


        </div>
    );
};

export default Home;