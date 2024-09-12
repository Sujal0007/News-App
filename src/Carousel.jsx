import React,{useState , useEffect} from "react";

export default function Carousel(){
    const [currIndex , setCurrIndex] = useState(0);

    var imageURL = ["https://tpc.googlesyndication.com/simgad/16766253156028027248",
        "https://tpc.googlesyndication.com/simgad/6775196253997996317",
        "https://tpc.googlesyndication.com/simgad/9106248503617969167",
        "https://tpc.googlesyndication.com/simgad/3887663933158356825",
        "https://tpc.googlesyndication.com/simgad/14909476908590662061"
      
    ];

    useEffect(()=>{
        const imgInterval = setInterval(()=>{
            setCurrIndex((prevIndex)=> prevIndex === imageURL.length - 1 ? 0 : prevIndex + 1)
        }, 2000);

        return ()=> clearInterval(imgInterval);
    }, [imageURL.length])

    return(
        <>
        <hr />
        <div className="carousel"><img src={imageURL[currIndex]} alt=""  style={{height: '250px' , width:"80vw"}} /></div>
        <hr />
        
        </>
    )
}