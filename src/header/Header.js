import { useCallback, useEffect, useMemo, useState } from "react";
import '../header/Header.css';
import {ReactComponent as Earth} from '../img/earth.svg';
import {ReactComponent as Search} from '../img/search.svg';
import {ReactComponent as Moon} from '../img/moon.svg';
import { useDispatch, useSelector } from "react-redux";

const Header = () =>{

    const [size, setSize] = useState(window.innerWidth);
    // const header = useMemo(()=>)
    const [header, setHeader] = useState('0');
    // const [scrollY, setScrollY] = useState(0);
    let bef = 0;
    let aft = 0;

    const dispatch = useDispatch();
    const state = useSelector(state=>state);

    const reSize = useCallback(()=>{
        setSize(window.innerWidth);
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
    
    return<>
        
        <div className={header ? "header_frame" : "header_frame_none"}>
            <div className="header_frame2">
                <p className="header_font">
                    blog
                </p>
            </div>

            {size > 1024 ?
                <div className="header_frame2">
                    <p className="header_font" style={{marginLeft:'12px'}}>
                        Web
                    </p>
                    <p className="header_font" style={{marginLeft:'12px'}}>
                        App
                    </p>
                    <p className="header_font" style={{marginLeft:'12px'}}>
                        Server
                    </p>
                </div>
                :
                <div className="header_frame2">
                </div>
            }

            <div className="header_frame2">
                <p className="header_font">
                    <Search width='25' heigh='25' />
                </p>
                <p className="header_font" style={{ marginLeft: '12px' }} >
                    <Earth width='25' height='25'/>
                </p>
                <p className="header_font" style={{ marginLeft: '12px' }} >
                    <Moon width='25' heigh='25'/>
                </p>
            </div>
        </div>

        <div style={{ display:'flex',flexDirection:'column', justifyContent:'center', padding:'0 32px', transition: '0.1s', borderRadius:'12px', borderBottom:'1px #eee solid', backgroundColor:'white', height:'60px', position:'sticky', top: header ? '60px' : 0 , zIndex:99}}>
            {/* <p style={{alignSelf:'center'}}> */}
            날짜
            {/* </p> */}
            
        </div>
    </>

}
export default Header;