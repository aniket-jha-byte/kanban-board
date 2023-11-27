                                                                              
   //function to fetch api 
 export const fetchInfo = ()=>{
      return fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res)=>res.json())
      .then(data => data);
  }