import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import useIsScroll from '../hooks/useIsScroll';
import useOnScreen from '../hooks/useOnScreen';

function ScrollComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const screenRef = useRef();

  const isVisible = useOnScreen(screenRef);
  const isScroll = useIsScroll();

  const getData = useCallback(async (page) => {
    try {
      setLoading(true);
      const result = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`);
      setData(data => [...data, ...result.data]);
      setLoading(false);
    } catch (error) {
      console.lor(error);
    }
  }, []);

  useEffect(() => {
    if (!isVisible || !isScroll) return;
    setPage(page => page + 1);
  }, [isScroll, isVisible]);

  useEffect(() => {
    getData(page);
  }, [getData, page]);

  return (
    <div>
      {data.length > 0 && data.map((item, index) => (
        <div key={index} style={{width: 100, height: 200, margin: 'auto'}}>{item.title}</div>
      ))}
      <div ref={screenRef} style={{visibility: data.length > 0 && loading ? 'block' : 'none'}}>Loading ...</div>
    </div>
  );
};

export default ScrollComponent;