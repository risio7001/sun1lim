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
            <div className="frame_A_block" style={{ height:ooo ? `${window.innerHeight-140}px` : `${window.innerHeight-80}px`, top: ooo ? '128px' : '68px'}}>
                <div style={{}}>
                    {dummy[0].title}
                </div>
            </div>
            <div style={{ width:'40%', flexDirection:'column'}}>
                {dummy.map((items, index) => (
                    <div key={index} style={{ paddingTop:index === 0 ?'0': '32px' }}>

                        {index === 0 ? null :
                            <div className="frame_B_block">
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
                    <div key={index} style={{ paddingTop:index === 0 ?'0': '32px' }}>

                        {index === 0 ? null :
                            <div className="frame_B_block" style={{marginLeft:'8px'}}>
                                {items.title}
                            </div>
                        }
                    </div>
                ))}
            </div>
            
            <div className="frame_A_block_inset" style={{ height:ooo ? `${window.innerHeight-128}px` : `${window.innerHeight-68}px`, top: ooo ? '128px' : '68px'}}>
                <div style={{}}>

                </div>
            </div>
        </div>
        
    </>
}

export default Main