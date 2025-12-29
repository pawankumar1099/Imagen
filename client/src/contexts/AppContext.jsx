import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

const AppContext = createContext();


export const AppContextProvider = ( props ) => {
    const navigate = useNavigate();
    const [user , setUser] = useState(false);
    const [showLogin , setShowLogin] = useState(false);
    const [token , setToken] = useState(localStorage.getItem('token'));
    const [credits, setCredits] = useState(null)
    

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setUser(null);
    }

    const generateImage = async (prompt) => {
        try{
            if(credits===0){
                    navigate("/buy")
                    toast.error("Low Balance")
                    return 
                }
            const {data} = await axios.post(backendUrl+'/api/image/generate-image',{prompt},{headers:{token}})
            if(data.success){
                loadCreditsData()
                return data.resultImage

            }else{
                toast.error(data.message)
                
                if(data.credits===0){
                    navigate("/buy")
                }
            }
        }catch(err){
            
            toast.error(err.message)
            
        }

    }

    const loadCreditsData = async () =>{
        try {
            const {data} = await axios.get(backendUrl+'/api/user/credits',{headers :{token}});
            
            
            if(data.success){
                setCredits(data.credits)
                setUser(data.user)
            }
        } catch (err) {
            toast.error(err.message)
        }
    }

    useEffect(()=>{
        if(token){
            loadCreditsData();
        }
    },[token])


const value = {
        user, setUser, showLogin, setShowLogin, backendUrl, token , setToken , loadCreditsData ,logout, credits, generateImage, navigate
    }
    return(
        <AppContext.Provider value = {value}>
            {props.children}
        </AppContext.Provider>
    )

}
export default AppContext;