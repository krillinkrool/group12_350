import {motion} from "framer-motion";

const transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div
                className='fixed top-0 left-0 w-[100%] h-[100vh] origin-bottom bg-cod_gray'
                initial={{scaleY: 0}}
                animate={{scaleY: 0}}
                exit={{scaleY: 1}}
                transition={{duration: 3, ease: [0.22, 1, 0.36, 1] }}

            />
            <motion.div
                className="fixed top-0 left-0 w-[100%] h-[100vh] origin-top bg-cod_gray')]"
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                exit={{scaleY: 0}}
                transition={{duration: 3, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    )
}

export default transition;