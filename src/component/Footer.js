import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

const Footer = () => {
    
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const state = useSelector((state=>state));

    useEffect(()=>{
        setIsMobile(state.isMobile);
    }, [state]);

    return <>
        <div>
            <div>

            </div>
            <div style={{ color: 'grey', padding: '14px 32px', margin:'32px 0'}}>
                Tistory : <a href="https://sunil1.tistory.com/">https://sunil1.tistory.com/</a>
                <br />
                {isMobile !== 0 ?
                    <p onClick={() => console.log('2')}>관리자</p>
                    : null}
                <br />
                © 2022. Lim Sun Il. All rights reserved.
            </div>
        </div>
    </>
}
export default Footer