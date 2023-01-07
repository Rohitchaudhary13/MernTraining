import logo from './logo.svg';
import './App.css';
import curtain from '../src/images/curtain.png';
import { TextField } from '@mui/material';
import { useState } from 'react';
import Masonry from '@mui/lab/Masonry/Masonry';
import {FiArrowRight} from 'react-icons/fi';
import {MdOutlineLogin} from 'react-icons/md'


function App() {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);
  const submit = () => {
    fetchRequest();
    console.log(img);
  }
  const fetchRequest = async() => {
    const data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=hRxPX5bEuY_eXLrpeOmBjHGWIO5g65QrEj-IPKjd2OM`);
    const dataJ = await data.json();
    const result = dataJ.results;
    setRes(result);
    console.log(res);
  }
  return (
    <div className='bg-[#184642] text-[#978d61]'>
      <img src={curtain} alt="curtain" className='absolute' />
      <h1 className='milky text-9xl grid place-items-center h-screen'>IMAGISER</h1>
      <div className='text-center mb-10 mt-10'>
      <input placeholder='Enter Anything...' value={img} onChange={(e) => setImg(e.target.value)} className="px-4 py-2.5 z-1 rounded-r-full rounded-l-full bg-transparent border-white text-center" />
      <button onClick={submit} className="ml-4 place-items-center"><FiArrowRight size={30} /></button>
      <div className='absolute top-10 right-10'>
        <div><MdOutlineLogin size={30} /></div>
        <p className='mt-4 mr-2'>Scroll Down</p>
      </div>
      </div>
      <div className='m-auto'>
      <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
          spacing={{ xs: 1, sm: 2, md: 3 }}>
        {res.map((item, index) => (
          <div key={index}>
            <img
              src={`${item.urls.raw}?w=162&auto=format`}
              srcSet={`${item.urls.raw}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
      </div>
    </div>
  );
}

export default App;
