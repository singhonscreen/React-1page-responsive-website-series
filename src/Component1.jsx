import React from 'react'
import Card from './Card';
import './App.css';
import Adata from './Adata'

console.log(Adata[0].pname)

function Component1() {
    return (
        <div className='head'>
            <div className="heading">
                <h1>Top-4 Netflix Series</h1>
            </div>
            <div className="mainContainer">
                {Adata.map((val) => {
                    return (
                        <Card
                            key={val.key}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            pname={val.pname}
                            watch={val.watch}
                            link={val.link}
                            altimg={val.altimg}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Component1;
