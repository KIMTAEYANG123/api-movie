import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {X_Naver_Client_Id, X_Naver_Client_Secret,API_URL} from '../Config';
import CarView from "./CarView";
import './Search.css';

function Search() {

    useEffect(() => {
        
    
    }, [])

    const [Value, setValue] = useState('');
    const [MovieLists, setMovieList] = useState([]);

    console.log(MovieLists)
    const onClickHandler = (e)=>{
        axios.get(API_URL,{ params:{ 'query': Value, 'display': 20 },
         headers: { 
            'X-Naver-Client-Id': X_Naver_Client_Id, 
            'X-Naver-Client-Secret': X_Naver_Client_Secret }
         })
         .then( response => {
            setMovieList(response.data.items)
         })
        
    }

    const onChangeHandler = (e) =>{
        setValue(e.currentTarget.value);
        console.log(Value);
    }
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{width:'85%', display:'flex',justifyContent: 'center', margin:'5rem auto'}}>
                <div style={{ width:'100%',display:'flex', flexDirection:'column',justifyContent: 'center', alignItems:'center'}}>
                    <h1>영화 검색</h1>
                    <div style={{width:'25%', display:'flex',justifyContent: 'center', border:'1px solid #dddddd',height:'2vw'}}>
                        <input type="text" placeholder="영화 제목을 입력하세요" style={{border:'none',width:'100%' }} onChange={onChangeHandler}/>
                        <button style={{cursor:'pointer', width:'14%',border:'1px solid #dddddd', backgroundColor:'transparent'}} onClick={onClickHandler}>검색</button>
                    </div>
                    
                </div>
            </div>

            <div style={{width:'85%', display:'flex',justifyContent: 'center', margin:'5rem auto', flexWrap:'wrap'}}>
            { MovieLists && MovieLists.map((movielist, index) => (
                    <a href={movielist.link}style={{width:'18%', display:'flex',flexDirection:'column',margin: '1rem 2rem'}}><CarView movielist={movielist} key={index}/></a>
                ))  
                }
            </div>
            
            
        </div>
        
        
    )
}

export default Search
