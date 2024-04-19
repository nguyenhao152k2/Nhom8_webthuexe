import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Api = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/products')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

  return (
    <div>api</div>
  )
}
