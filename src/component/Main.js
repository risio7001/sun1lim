import axios from "axios";
import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import '../component/Main.css'

const Main = () => {

    const state = useSelector((state) => state);
    const [ooo, setOoo] = useState(false);
    const [reSizing, setReSizing] = useState(window.innerWidth < 1024);
    const [data, setData] = useState([]);

    const ppp = useCallback(() => {
        setOoo(state.header);
    }, []);

    const reSize = useCallback(()=>{
        setReSizing(state.isMobile);
    },[])

    const getDB = () => {
        try {
            axios({
                method: 'get',
                url: 'http://localhost:3002/hello'
            })
                .then((res) => {
                    setData(res.data);
                })
        }
        catch (err) {
            console.log("server err => " + err)
        }
    };

    useEffect(()=>{
        getDB();
    },[])

    useEffect(() => {
        window.addEventListener('scroll', ppp)
        return () => { window.removeEventListener('scroll', ppp) }
    }, [ppp])

    useEffect(()=>{
        window.addEventListener('resize', reSize)
        return ()=>{window.removeEventListener('resize', reSize)}
    },[reSize]);

    const dummy = [
        {
            "title": "1",
            'cate':'web',
            'content': '456',
        },
        {
            "title": "2",
            'cate':'web',
            'content': '1',
        },
        {
            "title": "3",
            'cate':'web',
            'content': '123dgsdfgw43t43gdfsg',
        },
        {
            "title": "4",
            'cate':'server',
            'content': '123dgsdfgw43t43gdfsg',
        },
        {
            "title": "5",
            'cate':'app',
            'content': '123dgsdfgw43t43gdfsg',
        },
        {
            "title": "6",
            'cate':'app',
            'content': '123dgsdfgw43t43gdfsg',
        },
        {
            "title": "7",
            'cate':'server',
            'content': '123dgsdfgw43t43gdfsg',
        },
    ]

    

    return <>
        {
            reSizing ?
            
                <div className="M_frame">
                    
                    {data.map((items, index) => (
                        <div key={index} onClick={() => console.log('123')} className="M_frame_A_block" style={{ maxHeight: window.innerHeight * 7 / 10 }} >
                            <div className="M_frame_A_block_head">
                                <div className="M_frame_A_block_head_cate">
                                    {items.cate.toUpperCase()}
                                </div>
                                <div className="M_frame_A_block_head_state">
                                    <div className="M_frame_A_block_head_state_font" style={{ backgroundColor: items.edate === '' ? 'rgb(69,153,223)' : 'grey'}}>
                                        {items.edate === '' ? '진행중' : '종료'}
                                    </div>
                                </div>
                            </div>
                            <div className="M_frame_A_block_title">
                                {items.title}
                            </div>
                            <div className="M_frame_A_block_tech">
                                {items.tech.map((item, index)=>(
                                    <div key={index} style={{color:'grey'}}>
                                        #{item}&nbsp;&nbsp;
                                    </div>
                                ))}
                            </div>
                            <div>
                                img
                                </div>
                        </div>
                    ))}

                </div>
                :
                <div>
                    <div className="frame">
                        <div className="frame_A_block" style={{ height: ooo ? `${window.innerHeight - 140}px` : `${window.innerHeight - 80}px`, top: ooo ? '128px' : '68px' }}>
                            <div style={{}}>
                                {dummy[0].title}
                            </div>
                        </div>
                        <div style={{ width: '40%', flexDirection: 'column' }}>
                            {dummy.map((items, index) => (
                                <div key={index} style={{ paddingTop: index === 0 ? '0' : '32px' }}>

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
                                <div key={index} style={{ paddingTop: index === 0 ? '0' : '32px' }}>

                                    {index === 0 ? null :
                                        <div className="frame_B_block" style={{ marginLeft: '8px' }}>
                                            {items.title}
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>

                        <div className="frame_A_block_inset" style={{ height: ooo ? `${window.innerHeight - 128}px` : `${window.innerHeight - 68}px`, top: ooo ? '128px' : '68px' }}>
                            <div style={{}}>

                            </div>
                        </div>
                    </div>
                </div>
        }

    </>
}

export default Main