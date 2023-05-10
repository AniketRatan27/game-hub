import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id:number;
    name:string;
}

interface FetchGenresResponse{
    count:number;
    results:Genre[];
}

const useGenres=()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isloding,setLoding]=useState(false)
  
  useEffect(() => {
      const contoller=new AbortController();
      
      setLoding(true);
      apiClient
        .get<FetchGenresResponse>("/genres",{signal:contoller.signal})
        .then((res) => {
          setGenres(res.data.results)
          setLoding(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoding(false);
        });
       
      return() => contoller.abort();  
    },[]);

    return {genres,error ,isloding}
}

export default useGenres;