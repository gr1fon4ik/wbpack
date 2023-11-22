import { useState } from 'react';
import styles from  './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import Cloud from '@/assets/cloud-showers-svgrepo-com.svg'
import { error } from 'console';

const fof=()=>{
    fof2();
}

const fof2=()=>{
    throw new Error;
}

export const App = () => {
    const [counter, setcounter]=useState<number>(0);

    const increment =()=>{
        // setcounter(prev=>prev+1)
        fof()
    }

    return (
        <div>
            <h1>PLAT={__PLATFORM__}</h1>
            {/* <div><Cloud /></div> */}
            <Link to ={'/about'}>about</Link>
            <br/>
            <Link to ={'/shop'}>shop</Link>
            hi mAN
            <h1 className={styles.header}>{counter}</h1>
            <button className={styles.button} onClick={increment}><span>BIMBIM</span></button>
            <Outlet/>
        </div>
    ); 
};
