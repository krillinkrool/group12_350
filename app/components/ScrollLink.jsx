import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";


function ScrollLink({id, children }) {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
        
        element.scrollIntoView({ behavior: 'smooth' });
    }};
    return (
        <Link href={`#${id}`} passHref>
        <div onClick={handleClick}>{children}</div>
        </Link>
    );
}
    
export default ScrollLink;