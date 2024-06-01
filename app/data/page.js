"use client";
import React, { useEffect, useState } from 'react'

function Data() {
    const [product,setProduct] = useState([]);
    useEffect(() =>{
        async function fetchdata() {
            let data = await fetch("https://jsonplaceholder.typicode.com/posts");
            data= await data.json();
            setProduct(data);
        }
        fetchdata();
    },[]);
  return (
    <ul>
        {product?.map((p) => (
            <li className='border px-9' key={p.id}>{p.title}</li>
        ))}
    </ul>
  );
}

export default Data