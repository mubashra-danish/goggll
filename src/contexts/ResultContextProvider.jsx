import React,{createContext, useContext, useState} from 'react'

const ResultContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com/'
const ResultContextProvider = ({children}) => {  
  const [results,setResults] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [searchTerm,setSearchTerm] = useState('JS Mastery');
  
  const getResult = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`,{
     method: 'GET',
     headers: {
      'X-RapidAPI-Key': '341056d356mshac2a182c572059dp19fa62jsnf85809d4ac96',
      'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
    }
    })
    const data = await response.json();
  console.log(data);
    setResults(data);
    setIsLoading(false);
  }
return (
    <ResultContext.Provider value={{getResult,results,searchTerm,setSearchTerm,isLoading}}>
    {children}
    </ResultContext.Provider>
  )
}

export default ResultContextProvider
export const useResultContext = () => useContext(ResultContext);