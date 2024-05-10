import axios from 'axios'
import { useEffect,useState } from 'react';





// limit, if 429 wait for 15 min and try again
// const url = 'https://course-api.com/react-store-products';

const FirstRequest =  async () => {
  const [word,setWord]=useState('');

  const options = {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
    params: {term: word},
    headers: {
      'X-RapidAPI-Key': '725fb5b942msh802001ec5ca8863p134943jsnec754daad71f',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

  return(
<form onSubmit={FirstRequest}>
  <input type='hidden '  name='chuks' value={word}  onChange={(e)=>{setWord(e.target.value)}}/>

</form>
  );










  // const fetchData=async () =>{
  //   try{
  //     const response= await axios(url);
  //     const data=response.data;
  //     console.log(data);
  
  //   }catch(e){
  //     console.log(e.response);
  
  //   }
  
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
