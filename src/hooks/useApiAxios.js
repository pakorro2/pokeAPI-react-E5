import axios from 'axios';
import { useState, useEffect } from "react";


const useApiAxios = ({ url, URL }) => {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [typeSelected, setTypeSelected] = useState('All pokemons')

  const fetchData = () => {
    setIsLoading(true)
    axios.get(url)
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchData()
  }, [url]);

  useEffect(() => {
    setIsLoading(true)
    if (typeSelected !== 'All pokemons') {
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setResponse(result)
        })
        .catch(err => setError(err))
        .finally(() => {
          setIsLoading(false);
        });

    } else {
      axios.get(URL)
        .then(res => setResponse(res.data.results))
        .catch(err => setError(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [typeSelected])

  return { response, error, isLoading, setTypeSelected };
}

export default useApiAxios