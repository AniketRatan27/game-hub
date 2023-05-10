import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id:number;
    name:string;
    slug:string;
}

export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[]
    metacritic:number;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

   
  const useHooks = () => {    
      const [games, setGames] = useState<Game[]>([]);
        const [error, setError] = useState("");
        const [isloding,setLoding]=useState(false)
      
      useEffect(() => {
          const contoller=new AbortController();
          
          setLoding(true);
          apiClient
            .get<FetchGamesResponse>("/games",{signal:contoller.signal})
            .then((res) => {
              setGames(res.data.results)
              setLoding(false);
            })
            .catch((err) => {
                if(err instanceof CanceledError) return;
                setError(err.message)
                setLoding(false);
            });
           
          return() => contoller.abort();  
        },[]);

        return {games,error ,isloding}
  }
  
  export default useHooks



