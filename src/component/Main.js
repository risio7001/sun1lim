import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import '../component/Main.css'

const Main = () => {

    const [ooo, setOoo] = useState(false);
    const state = useSelector((state)=>state);

    const ppp = useCallback(() =>{
        setOoo(state.header);
    },[]);

    useEffect(()=>{
        window.addEventListener('scroll', ppp)
        return()=>{window.removeEventListener('scroll', ppp)}
    },[ppp])

    const dummy = [
        {
            "title":"123",
            'content':'456',
        },
        {
            "title":"adfads",
            'content':'1',
        },
        {
            "title":"dfgd1",
            'content':'123dgsdfgw43t43gdfsg',
        },
    ]

    return <>
        <div className="frame">
            <div style={{ border:'1px solid', borderRadius:'12px', margin:'8px 4px', height:'200px', width:'60%', flexDirection:'column', position:'sticky', transition:'0.2s', top: ooo ? '128px' : '68px'}}>
                <div style={{}}>

                </div>
            </div>
            <div style={{ width:'40%', flexDirection:'column'}}>
                {dummy.map((items, index) => (
                    <div key={index} style={{padding:'8px 4px'}}>

                        <div style={{borderRadius:'12px', border:'1px solid', height: '200px' }}>

                        </div>
                        
                    </div>
                ))}
            </div>

        </div>

        <div className="frame">
            <div style={{ width: '40%', flexDirection: 'column' }}>
                {dummy.map((items, index) => (
                    <div  key={index}>

                        <div style={{ border: '1px solid', height: '200px' }}>

                        </div>

                    </div>
                ))}
            </div>
            <div style={{ border:'1px solid', borderRadius:'12px', margin:'8px 4px', height:'200px', width:'60%', flexDirection:'column', position:'sticky', transition:'0.2s', top: ooo ? '128px' : '68px'}}>
                <div style={{ backgroundColor: 'grey', height: '200px' }}>
                    <p style={{fontSize:'22px', margin:0}}>App</p>
                </div>
            </div>
        </div>
        
    </>
}

export default Main