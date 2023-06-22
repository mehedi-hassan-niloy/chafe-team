import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingelFood from './SingelFood';

const Food = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('https://chef-recipe-hunter-server-neloy1435-gmailcom.vercel.app/foodData')
      .then(res => res.json())
      .then(data => setDatas(data))
  }, [])
  return (
    <div className='m-5 mt-4'>
      <h1 className='text-center mb-4 mt-4 text-primary'>Foo<span className='text-info'>d</span> </h1>
      <Row xs={1} md={4} className="g-4">
        {
          datas.map(data => <SingelFood
           key={data._id}
            data={data}

          />)
        }
      </Row>
    </div>
  );
};

export default Food;