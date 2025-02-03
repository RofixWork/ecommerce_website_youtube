import { useState , useEffect, useCallback, useMemo} from 'react'
import axios from '../api' 
import {isAxiosError} from 'axios'
const useAxios = (url, method = 'GET', options = {}) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    const stableOptions = useMemo(() => JSON.stringify(options), [options]);

    const fetchData = useCallback(async () => {
        setIsLoading(true)
        setError(null)
        try {
            const {data} = await axios({
                url,
                method,
               ...options
            })
            console.log(
                '%cRESPONSE',
                'color: green; font-family: sans-serif;font-size:30px'
              );
              console.log(data);
              
              console.log(
                '%cEND RESPONSE',
                'color: green; font-family: sans-serif;font-size:30px'
              );
            
            setData(data)
        }
        catch(err) {
            let error = null;

            if(isAxiosError(err)) {
                console.error('AXIOS ERROR', error.response.data.message)
                error = err.response.data.message
            } else {
                console.error('API ERROR', err)
                error = err.message|| 'An error occurred while fetching data.'
            }
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }, [url, method, stableOptions])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return {data, isLoading, error}
}

export default useAxios