import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchResponse<T>{
    count:number;
    results:T[];
}

const useData=<T>(endpoint:string)=>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isloding,setLoding]=useState(false)
  
  useEffect(() => {
      const contoller=new AbortController();
      
      setLoding(true);
      apiClient
        .get<FetchResponse<T>>(endpoint,{signal:contoller.signal})
        .then((res) => {
          setData(res.data.results)
          setLoding(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoding(false);
        });
       
      return() => contoller.abort();  
    },[]);

    return {data,error ,isloding}
}

export default useData;