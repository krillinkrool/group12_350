import Slider from "react-slick" 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./trialPage.css";

function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    return (
        <div className= "w-3/4 m-auto">
            <div className="mt-20">
            <Slider {...setting}>
                {data.map((d) => (
                   <div className="bg-white h-[450px] text-black rounded-xl">
                     <div className="rounded-txl bg-indigo-500 flex-center items-center">

                     <div>
                        <img src={d.img} alt="" clasName="h-44 w-44 rounded-full"/>
                     </div>
                                     
                     <div className="flex flex-col justify-center items-center gap-4 p-4">
                        <p className="bg-indigio-500 text-white text-lg px-6 py-1 roundeded-xl" >{d.name}</p>
                        <p>{d.review}</p>
                        <button>Read More</button>
                     </div>

                     </div>
                   </div> 
                ))}
            </Slider>   
            </div>
        </div>
    );
}

export default App;

const data = [
    {
        img: 'public/image/KIMMIE/photoshoot/img1'
    },

    {
        img: 'public/image/KIMMIE/photoshoot/img2'
    },

    {
        img: 'public/image/KIMMIE/photoshoot/img3'
    }
]