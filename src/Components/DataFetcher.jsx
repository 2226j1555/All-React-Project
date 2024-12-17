import React, { useEffect, useState } from "react";
function DataFetcher(){
    const[data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>response.json())
        .then((data)=>setData(data.slice(0,5)))
        .catch((error)=>console.error("Error fetching data; ",error));

    }, []);
    return(
        <>
            <h3>Posts</h3>
            <ul>
                {data.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

        </>

    );
}
export default DataFetcher;