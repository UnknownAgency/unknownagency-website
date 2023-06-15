import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function FilterMember({ onFilterChanged }) {

    gsap.registerPlugin(ScrollTrigger);

    const [activeFilter, setActiveFilter] = useState("all");

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        onFilterChanged(filter);
    };

    const filterWrapper = useRef(null);

    useEffect(() => {
        const filter = filterWrapper.current;
        gsap.set(filter, { y: "200%", opacity: 0,});
        gsap.to(filter, { y: "0%", duration: 1.5, ease: "power2.out", stagger:.5, opacity: 1,}),
        gsap.from(filter, { scrollTrigger: {
            trigger: filter,
            start: "top 40%",
            end: "top 60%",
        },
        markers: {
            startColor: "red",
            endColor: "red",
            fontSize: "1rem",
        },
    })
    }, []);

    return (
        <div ref={filterWrapper} className="filter-member">
            <ul>
                <li className={`single-filter ${activeFilter === "all" ? "active" : ""}`}>
                    <button onClick={() => handleFilterClick("all")}><img src="https://digitalcanali.com/cep/team/logo-cep.png" alt="Logo Canali & Partner | Solo &" /></button>
                </li>
                <li className={`single-filter ${activeFilter === "Direzione" ? "active" : ""}`}>
                    <button onClick={() => handleFilterClick("Direzione")}>Direzione</button>
                </li>
                <li className={`single-filter ${activeFilter === "Amminitrazione" ? "active" : ""}`}>
                    <button onClick={() => handleFilterClick("Amminitrazione")}>Amminitrazione</button>
                </li>
                <li className={`single-filter ${activeFilter === "Digital" ? "active" : ""}`}>
                    <button onClick={() => handleFilterClick("Digital")}>Digital</button>
                </li>
                <li className={`single-filter ${activeFilter === "Creativi" ? "active" : ""}`}>
                    <button onClick={() => handleFilterClick("Creativi")}>Creativi</button>
                </li>
                <li className={`single-filter ${activeFilter === "Account" ? "active" : ""}`}>
                    <button onClick={() => handleFilterClick("Account")}>Account</button>
                </li>
                <li className={`single-filter ${activeFilter === "Social" ? "active" : ""}`}>
                    <button onClick={() => handleFilterClick("Social")}>Social</button>
                </li>
                <li className={`single-filter ${activeFilter === "PR&Stampa" ? "active" : ""}`}>
                    <button onClick={() => handleFilterClick("PR&Stampa")}>PR&Stampa</button>
                </li>
                <li className={`single-filter ${activeFilter === "Reception" ? "active" : ""}`}>
                    <button onClick={() => handleFilterClick("Reception")}>Reception</button>
                </li>
            </ul>
        </div>
    );
}