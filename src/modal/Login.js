import { collection, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import "../modal/Login.css"

const Login = ({setIsLogin, navigation}) =>{

    const loginRef = useRef(null);

    useEffect(()=>{
        function handleClickOutside (e){
            if(loginRef.current && !loginRef.current.contains(e.target)){
                setIsLogin(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{document.removeEventListener("mousedown", handleClickOutside)}
    },[loginRef])

    const [id, setID] = useState();
    const [pass, setPass] = useState();
    const dispatch = useDispatch();

    const handleSubmit = async ()=>{
        let temp;
        const dbRef = await getDocs(collection(db, 'admin'));
        dbRef.forEach((doc)=>{
            temp = doc.data();
        })
        if (temp.id === id && temp.pass === pass) {
            setIsLogin(false);
            dispatch({ type: "SET_LOGIN", login: true })
            navigation('/admin')
        }
    }

    return<>
        <div className="modal" >
            <div className="modal_block" ref={loginRef}>
                <div className="modal_block_cancel">
                    <p onClick={()=>setIsLogin(false)} className="modal_block_cancel_btn">X
                    </p>
                </div>
                <p style={{ textAlign: 'center', height: '10%' }}>
                    관리자
                </p>
                <input placeholder="ID" onChange={(e)=>setID(e.target.value)} style={{textAlign:'center', margin:'4px'}}/>
                <input placeholder="PASS" onChange={(e)=>setPass(e.target.value)} style={{textAlign:'center', margin:'4px'}}/>
                <button onClick={()=>handleSubmit()}>로그인</button>
            </div>
        </div>
    </>

}
export default Login