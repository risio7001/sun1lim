import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function Test (){

    const [data, setData] = useState();

    useEffect(()=>{
        getDB();
    },[])

    const getDB = () => {
        try {
            axios({
                method: 'get',
                url: 'http://localhost:3002/hello'
            })
            .then((res)=>setData(res.data));
        }
        catch (err) {
            console.log("server err => " + err)
        }
    };
    return<>
    <div>
        {data.map((items, index)=>(
            <div key={index}>
                {items.title}
            </div>
        ))}
    </div>
    </>
}
export default Test;