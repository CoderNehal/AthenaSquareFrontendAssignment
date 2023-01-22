import React, { useState, useEffect } from 'react'
import { useInView } from "react-intersection-observer";
// user imports
import style from '../styles/Container.module.scss'
import Section from './Section'
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
    }, [inView1, inView2, inView3])

    return (
        <div className={style.container}>
            <div className={style.text}>
                {data && data.map((sec, idx) =>
                    <Section key={idx} idx={idx} sec={sec} style={style} ref1={ref1} ref2={ref2} ref3={ref3} />
                )}
            </div>
            <div className={style.video}>
                <video autoPlay loop muted src={`/Media/vid${video}.mp4`} />
            </div>
        </div>
    )
}

export default Container