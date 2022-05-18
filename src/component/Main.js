import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import '../component/Main.css'

const Main = () => {

    const [ooo, setOoo] = useState(false);
    const state = useSelector((state)=>state);

    const ppp = useCallback(() =>{
        setOoo(state.header);
        console.log(state.header);
    },[]);

    useEffect(()=>{
        window.addEventListener('scroll', ppp)
        return()=>{window.removeEventListener('scroll', ppp)}
    },[ppp])

    const dummy = [
        {
            "title":"1",
            'content':'456',
        },
        {
            "title":"2",
            'content':'1',
        },
        {
            "title":"3",
            'content':'123dgsdfgw43t43gdfsg',
        },
        {
            "title":"4",
            'content':'123dgsdfgw43t43gdfsg',
        },
        {
            "title":"5",
            'content':'123dgsdfgw43t43gdfsg',
        },
        {
            "title":"6",
            'content':'123dgsdfgw43t43gdfsg',
        },
        {
            "title":"7",
            'content':'123dgsdfgw43t43gdfsg',
        },
    ]

    return <>
        <div className="frame">
            <div style={{ border:'1px solid', borderRadius:'12px', margin:'8px 4px', height:ooo ? `${window.innerHeight-140}px` : `${window.innerHeight-80}px`, width:'60%', flexDirection:'column', position:'sticky', transition:'0.2s', top: ooo ? '128px' : '68px'}}>
                <div style={{}}>
                    {dummy[0].title}
                </div>
            </div>
            <div style={{ width:'40%', flexDirection:'column'}}>
                {dummy.map((items, index) => (
                    <div key={index} style={{ padding:index === 0 ?'0': '8px 4px' }}>

                        {index === 0 ? null :
                            <div style={{ borderRadius: '12px', border: '1px solid', height: '200px' }}>
                                {items.title}
                            </div>
                        }


                    </div>
                ))}
            </div>
        </div>

        <div className="frame">
            <div style={{ width: '40%', flexDirection: 'column' }}>
                {dummy.map((items, index) => (
                    <div key={index} style={{padding:'8px 4px'}}>
                        <div style={{borderRadius:'12px', border:'1px solid', height: '200px' }}>

                        </div>
                    </div>
                ))}
            </div>
            
            <div style={{ border:'1px solid', borderRadius:'12px', margin:'8px 4px', height:'200px', width:'60%', flexDirection:'column', position:'sticky', transition:'0.2s', top: ooo ? '128px' : '68px'}}>
                <div style={{}}>

                </div>
            </div>
        </div>
        
    </>
}

export default Main