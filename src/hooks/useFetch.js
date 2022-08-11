import { useState, useEffect } from "react";

export default function useFetch(url, params) {
  const [data, SetData] = useState(null);

  useEffect(() => {
    (() => {
      try {
        fetch(`${url}${params}`)
          .then((response) => response.json())
          .then((data) => SetData(data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [url, params]);


  return data
}





