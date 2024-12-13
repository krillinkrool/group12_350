import styles from "../styles/carousel.module.css";
import Image from "next/image";


function Carousel() {
  return (
      <div className={styles.wrapper}>
        <div className={styles.carousel}>

          <Image
            src="/images/KIMMIE/photoshoot/img1.jpg"
            alt="Photo"
            width={450}
            height={450}/>

          <Image
            src="/images/KIMMIE/photoshoot/img2.jpg"
            alt="Photo"
            width={450}
            height={450}/>

          <Image
            src="/images/KIMMIE/photoshoot/img3.jpg"
            alt="Photo"
            width={450}
            height={450}/>
        </div>
      </div>
  )
}

export default Carousel