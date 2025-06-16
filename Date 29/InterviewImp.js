import { useState, useEffect } from "react";

type Errorval = {
  statusCode?: string,
  message: string,
}

function useFetch(url: string) {


  const [data, setData] = useState < any | null > (null);
  const [error, setError] = useState < null | Errorval > (null);
  const [loading, setLoading] = useState < boolean > (false);

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await fetch(url);
      const data = res.json();
      setData(data)
    } catch (err: any) {
      err && setError({message:err})
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return { data, error, loading }
}

const App = () => {

  const[url,setUrl] = useState('https://api.example.com')
  const { data, loading, error } = useFetch(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <div>{JSON.stringify(data)}</div>;
};