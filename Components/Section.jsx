import React from 'react'

const section = ({ sec, style, idx,ref1,ref2,ref3}) => {
    return (
        <section ref={idx == 0 ? ref1 : idx == 1 ? ref2 : ref3}>
            <div className={style.heading} >
                <h2>{sec.heading}</h2>
                <h1  >{sec.subHeading}</h1>
                <p>{sec.description}</p>
            </div>
            <div className={style.mobileVideo}>
                <video autoPlay loop muted src={`/Media/vid${idx + 1}.mp4`} />
            </div>
        </section>
    )
}

export default section