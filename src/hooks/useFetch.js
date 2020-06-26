import { useState, useEffect, useRef } from "react";

const useFetch = (api) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    let isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        async function callAPI() {
            try {
                setLoading(true);
                const response = await api();
                if (isMounted.current) {
                    setData(response.data);
                }
            } catch (error) {
                console.log();
            } finally {
                setLoading(false);
            }
        }
        callAPI();
    }, [api]);

    return [loading, data];
};

export default useFetch;
