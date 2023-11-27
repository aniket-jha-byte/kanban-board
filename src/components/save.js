import { createContext, useContext, useEffect, useState } from 'react';

const MyContext = createContext();

 //To Save the user's view state even after page reload,store the state in localstorage so that it can be preserved

export function MyContextProvider({ children }) {
  const [groupBy, setGroupBy] = useState(localStorage.getItem('group') || 'status');

  const [ordering, setOrdering] = useState(localStorage.getItem('order') || 'title');

  useEffect(() => {
    const savedState =
    { 
      group: localStorage.getItem('group'),
      order: localStorage.getItem('order')
    }
    if (savedState) {
      setGroupBy(savedState.group);
      setOrdering(savedState.order);
    }
  }, []);

  // Save state to localStorage on change
  useEffect(() => {
    localStorage.setItem('group', groupBy);
    localStorage.setItem('order', ordering);

    console.log(localStorage.getItem('group'), localStorage.getItem('order'))
  }, [groupBy, ordering]);


  return (
    <MyContext.Provider value={{ groupBy, setGroupBy, ordering, setOrdering }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}