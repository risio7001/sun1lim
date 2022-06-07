import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = () =>{

    const state = useSelector((state)=>state);
    let navigation = useNavigate();

    useEffect(()=>{
        if(!state.login){
            alert("잘못된 접근입니다.");
            navigation('/');
        }
    },[]);

    return<>
        <div>
            어드민 로그인 페이지
            {/* <input type={text}/> */}
        </div>
    </>
}

export default Admin