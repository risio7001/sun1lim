import { useCallback, useEffect, useMemo, useState } from "react";
import '../header/Header.css';
import {ReactComponent as Earth} from '../img/earth.svg';
import {ReactComponent as Search} from '../img/search.svg';
import {ReactComponent as Moon} from '../img/moon.svg';
import {ReactComponent as Admin} from '../img/admin.svg';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Login from "../modal/Login";

const Header = () =>{

    let navigation = useNavigate();

    const [isLogin, setIsLogin] = useState(false);
    const [size, setSize] = useState(window.innerWidth);
    // const header = useMemo(()=>)
    const [header, setHeader] = useState('0');
    // const [scrollY, setScrollY] = useState(0);
    let bef = 0;
    let aft = 0;

    let date = new Date();


    const selectOption = ['All', 'Web', 'Server', 'App'];
    // const [selected, setSelected] = useState(0);
    const state = useSelector((state)=>state);

    const dispatch = useDispatch();


    // 웹 크기 변할때 반응
    const reSize = useCallback(()=>{
        setSize(window.innerWidth);
        if(window.innerWidth < 1440){
            if(window.innerWidth < 715 ){   // mobile 2
                dispatch({type:"SET_DISPLAY", isMobile:2})
            }
            else{       // mobile 1
                dispatch({type:"SET_DISPLAY", isMobile:1})
            }
        }
        else{           // web
            dispatch({type:"SET_DISPLAY", isMobile:0})
        }
    },[])

    useEffect(()=>{
        window.addEventListener('resize', reSize);
        return ()=>{window.removeEventListener('resize', reSize)}
    },[reSize])

    const scroll = useCallback(() => {
        bef = aft;

        aft = window.scrollY;

        if (bef > aft) {
            setHeader(true);
            dispatch({type:"SET_HEADER", header:true});
        }
        else {
            setHeader(false);
            dispatch({type:"SET_HEADER", header:false});
        }
    },[]);

    useEffect(()=>{
        window.addEventListener('scroll', scroll);
        return ()=>{window.removeEventListener('scroll', scroll)}
    },[scroll])

    const handleSelect = (e) => {
        alert(e.target.value);
        dispatch({type:'SET_CATE', cate:e.target.value.toLowerCase()});
    }
    
    return<>
        
        <div className={header ? "header_frame" : "header_frame_none"}>
            <div className="header_frame2">
                <p className="header_font">
                    blog
                </p>
            </div>

            {size > 1024 ?
                <div className="header_frame2">
                    
                    <select defaultValue={selectOption[0] } onChange={(e)=>handleSelect(e)}  style={{border:'0px solid red', height:'50%', alignSelf:'center' }}>
                        <option value={selectOption[0]}>All</option>
                        <option value={selectOption[1]} >Web</option>
                        <option value={selectOption[2]}>Server</option>
                        <option value={selectOption[3]}>App</option>
                    </select>
                    {/* <p className="header_font" style={{marginLeft:'12px'}}>
                        Web
                    </p>
                    <p className="header_font" style={{marginLeft:'12px'}}>
                        App
                    </p>
                    <p className="header_font" style={{marginLeft:'12px'}}>
                        Server
                    </p> */}
                </div>
                :
                <div className="header_frame2">
                </div>
            }

            <div className="header_frame2">
                {size > 1024 ?
                    <div className="header_frame2">
                        <p className="header_font">
                            <Search width='25' heigh='25' />
                        </p>
                        <p className="header_font" style={{ marginLeft: '12px' }} >
                            <Earth width='25' height='25' />
                        </p>
                        {/* <Link to={'/admin'}> */}
                            <p onClick={()=>setIsLogin(true)} className="header_font" style={{ marginLeft: '12px' }} >
                                <Admin width='25' heigh='25' />
                            </p>
                        {/* </Link> */}
                    </div>
                    : 
                    <select defaultValue={selectOption[0] } onChange={(e)=>handleSelect(e)} style={{border:'0px solid red', height:'50%', alignSelf:'center' }}>
                        <option value={selectOption[1]}>All</option>
                        <option value={selectOption[1]} >Web</option>
                        <option value={selectOption[2]}>Server</option>
                        <option value={selectOption[3]}>App</option>
                    </select>
                }
                
            </div>
        </div>

        <div style={{ display:'flex',flexDirection:'column', justifyContent:'center', padding:'0 32px', transition: '0.1s', borderRadius:'12px', borderBottom:'1px #eee solid', backgroundColor:'white', height:'60px', position:'sticky', top: header ? '48px' : 0 , zIndex:99, fontSize:'24px', fontWeight:'700'}}>
            {/* <p style={{alignSelf:'center'}}> */}
            {date.getMonth()+1+"월"+" "+date.getDate()+"일"}
            {/* </p> */}
            
        </div>
        {isLogin ? <Login setIsLogin={setIsLogin} navigation={navigation}/> : null}
    </>

}
export default Header;