import React, { useState, useEffect } from 'react'
import style from '../styles/Container.module.css'
import { useInView } from "react-intersection-observer";
const Container = ({ data }) => {
    const [video, setVideo] = useState(1);
    const [ref1, inView1] = useInView(
        {
            threshold: 0.3,
        }
    );
    const [ref2, inView2] = useInView(
        {
            threshold: 0.3,
        }
    );
    const [ref3, inView3] = useInView(
        {
            threshold: 0.3,
        }
    );
    useEffect(() => {
        if (inView1) {
            setVideo(1)
        }
        if (inView2) {
            setVideo(2)
        }
        if (inView3) {
            setVideo(3)
        }

        // console.log(video)
    }, [inView1, inView2, inView3])

    return (
        <div className={style.container}>
            <div className={style.text}>
                {data && data.map((sec, idx) =>
                    <section key={idx} ref={idx==0?ref1:idx==1?ref2:ref3}>
                        <div className={style.heading}>
                            <h2>{sec.heading}</h2>
                            <h1  >{sec.subHeading}</h1>
                            <p>{sec.description}</p>
                        </div>
                        <div className={style.mobileVideo}>
                            <video autoPlay loop muted src={`/Media/vid${idx+1}.mp4`} />
                        </div>
                    </section>
                    )}
            </div>
            <div >
                <div className={style.video}>
                    <video autoPlay loop muted src={`/Media/vid${video}.mp4`} />
                </div>
            </div>
        </div>
    )
}

export default Container