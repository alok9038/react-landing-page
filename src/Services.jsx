import React from "react";

const data = [
    {
        name:"Web Developement",
        imgSrc:'https://nextgensolutions.co.ke/tech/wp-content/uploads/2020/07/web-dev.jpg'
    },
    {
        name:"AI Developement",
        imgSrc:'https://www.gettingsmart.com/wp-content/uploads/2018/12/artificial-intelligence-education.jpg'
    },
    {
        name:"Android Developement",
        imgSrc:'https://developer.android.com/studio/images/studio-icon.svg'
    },
]
const Service = ()=>{
    return (
        <>
            <div className="container pt-5 mt-3">
                <div className="h1 fw-light text-center mb-4">Our Services</div>
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-3 gy-4">
                    {
                        data.map((value,key)=>{
                            return (
                            <div className="col" key={key}>
                            <div className="card border-0 shadow round-25">
                            <img src={value.imgSrc} alt={value.imgSrc} className="img-fluid card-img-top"/>
                                <div className="card-body">
                                    <div className="foot">
                                        <h4 className="fw-light text-center">{value.name}</h4>
                                    </div>
                                </div>
                            </div>
                            </div>
                            )  
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Service;