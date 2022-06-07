import axios from "axios";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import '../component/Main.css'
import { db } from '../firebase.js';


const Main = () => {

    const state = useSelector((state) => state);
    const [reSizing, setReSizing] = useState(state.isMobile);
    const [data, setData] = useState([]);

    useEffect(() => {
        getDB();
        // console.log(state.isMobile);
        setReSizing(state.isMobile);
    }, [state]);

    // const ppp = useCallback(() => {
    //     setOoo(state.header);
    // }, []);

    // const reSize = useCallback(() => {
        // console.log(state.isMobile)
        // setReSizing(state.isMobile);
    // }, [])


    const getDB = async () => {
        // firebase 직접연결
        let temp = [];
        let tempTech = [];
        try {
            //             .collection("dd")
            //     .where("cate", "==", "web")

            const querySnapshot = await getDocs(query(collection(db, "dd"), where("cate", "==", "web")));
            querySnapshot.forEach((doc) => {
                temp.push(doc.data());
            });
            setData(temp);
        }
        catch (err) {
            console.log(err);
        }

        // Express 연결
        // try {
        //     axios({
        //         method: 'get',
        //         url: 'http://portpolio.cafe24app.com/hello'
        //     })
        //         .then((res) => {
        //             setData(res.data);
        //         })
        // }
        // catch (err) {
        //     console.log("server err => " + err)
        // }
    };

    useEffect(() => {
        getDB();
        // console.log(data);
    }, [])

    // useEffect(() => {
    //     window.addEventListener('scroll', ppp)
    //     return () => { window.removeEventListener('scroll', ppp) }
    // }, [ppp])

    // useEffect(() => {
    //     window.addEventListener('resize', reSize)
    //     return () => { window.removeEventListener('resize', reSize) }
    // }, [reSize]);
    const [pppp, setPppp] = useState('');
    return <>
        {
            // reSizing ?

                <div className="M_frame">

                    {data.map((items, index) => (

                            <div key={index} onClick={() => setPppp(index)} className="M_frame_A_block" style={{ maxHeight:reSizing === 2 ? "240px" : "446px", maxWidth:reSizing===2? "260px":"666px",  margin:"8px 12px" }} >
                            {/* {reSizing ? 'mobile': 'web' } */}
                            <div style={{ transform: pppp === index ? reSizing === 2 ? 'translateY(-265px)' : 'translateY(-450px)' : '', transition: '0.2s' }}>
                                <div style={{height:'50%'}}>

                                    <div className="M_frame_A_block_head">
                                        <div className="M_frame_A_block_head_cate">
                                            {items.cate.toUpperCase()}
                                        </div>
                                        <div className="M_frame_A_block_head_state">
                                            <div className="M_frame_A_block_head_state_font" style={{ backgroundColor: items.edate === '' ? 'rgb(69,153,223)' : 'grey' }}>
                                                {items.edate === '' ? '진행중' : '종료'}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="M_frame_A_block_title">
                                        {items.title}
                                    </div>
                                    <div className="M_frame_A_block_tech">
                                        {items.tech.map((item, index) => (
                                            <span key={index} style={{ color: 'grey', overflow:"hidden", whiteSpace:'nowrap', textOverflow:'ellipsis' }}>
                                                #{item}&nbsp;&nbsp;
                                            </span>
                                        ))}
                                    </div>
                                    <div>
                                        <img src={items.img_path} width={'100%'} height={'100%'} alt="img" />

                                    </div>

                                </div>
                                
                                    <br/>
                                    <br/>
                                <div>
                                The HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element).
                                </div>
                                
                                </div>
                                
                                

                            </div>
                    ))}

                </div>
                // :

                // <div className="M_frame">

                //     {data.map((items, index) => (
                //         <div key={index} onClick={() => console.log('123')} className="M_frame_A_block" style={{ maxHeight: '530px', margin: '8px 12px' }} >
                //             <div className="M_frame_A_block_head">
                //                 <div className="M_frame_A_block_head_cate">
                //                     {items.cate.toUpperCase()}
                //                 </div>
                //                 <div className="M_frame_A_block_head_state">
                //                     <div className="M_frame_A_block_head_state_font" style={{ backgroundColor: items.edate === '' ? 'rgb(69,153,223)' : 'grey' }}>
                //                         {items.edate === '' ? '진행중' : '종료'}
                //                     </div>
                //                 </div>
                //             </div>
                //             <div className="M_frame_A_block_title">
                //                 {items.title}
                //             </div>
                //             <div className="M_frame_A_block_tech">
                //                 {items.tech.map((item, index) => (
                //                     <div key={index} style={{ color: 'grey' }}>
                //                         #{item}&nbsp;&nbsp;
                //                     </div>
                //                 ))}
                //             </div>
                //             <div>

                //                 <img src={items.img_path} width={'100%'} height={'100%'} alt="img" />

                //             </div>
                //         </div>
                //     ))}

                // </div>
            // <div>
            //     <div className="frame">
            //         <div className="frame_A_block" style={{ height: ooo ? `${window.innerHeight - 140}px` : `${window.innerHeight - 80}px`, top: ooo ? '128px' : '68px' }}>
            //             <div style={{}}>
            //                 {data[0].title}
            //             </div>
            //         </div>
            //         <div style={{ width: '40%', flexDirection: 'column' }}>
            //             {data.map((items, index) => (
            //                 <div key={index} style={{ paddingTop: index === 0 ? '0' : '32px' }}>

            //                     {index === 0 ? null :
            //                         <div className="frame_B_block">
            //                             {items.title}
            //                         </div>
            //                     }
            //                 </div>
            //             ))}
            //         </div>
            //     </div>

            //     <div className="frame">
            //         <div style={{ width: '40%', flexDirection: 'column' }}>
            //             {data.map((items, index) => (
            //                 <div key={index} style={{ paddingTop: index === 0 ? '0' : '32px' }}>

            //                     {index === 0 ? null :
            //                         <div className="frame_B_block" style={{ marginLeft: '8px' }}>
            //                             {items.title}
            //                         </div>
            //                     }
            //                 </div>
            //             ))}
            //         </div>

            //         <div className="frame_A_block_inset" style={{ height: ooo ? `${window.innerHeight - 128}px` : `${window.innerHeight - 68}px`, top: ooo ? '128px' : '68px' }}>
            //             <div style={{}}>

            //             </div>
            //         </div>
            //     </div>
            // </div>
        }

    </>
}

export default Main