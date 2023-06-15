"use client"

import { gsap } from 'gsap';
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const ScrollTriggerGSAP = () => {

    const ScrollTriggerPage = useRef(null), ScrollTriggerPage2 = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let sectiontwo = document.querySelector("#two");
        /* Animazione 1
        let ctx = gsap.context(() => {
            gsap.from(".box", {
                x: ()=> sectiontwo.offsetWidth, 
                rotate: 30,
                duration: 3,
                scrollTrigger: {
                    trigger: ".box", // classe trigger
                    start: "top center", // Significa che l'animazione parte quando il top dell'elemento "trigger" incontra la metà dello schermo.
                    end: () => `+=${document.querySelector(".descrizione").offsetHeight}`, // qui inserisco l'altezza di un elemento preso tramite regola js. 
                    markers: { // Mostra a schermo dei segni che indicano l'inizio e fine dell'animazione.
                        startColor: "white",
                        endColor: "black",
                        fontSize: "1rem",
                        indent: 10,
                    },
                    toggleClass: "custom-box", // Questo viene applicato alla classe trigger
                },
            })
        }, ScrollTriggerPage )
        */

        let ctx = gsap.context(() => {
            gsap.to(".box", {
                x: ()=> sectiontwo.offsetWidth,
                rotate: 30,
                duration: 3,
                scrollTrigger: {
                    trigger: ".box2", // classe trigger
                    start: "top 60%",
                    end: "top 50%",
                    toggleActions: "play pause resume reverse",
                    //       onEnter | onLeave | onEnterBack | onLeaveBack
                    /*
                    Modalità possibili:
                    play - pause - resume - reverse - restart - reset - complete - none
                    */
                    markers: { // Mostra a schermo dei segni che indicano l'inizio e fine dell'animazione.
                        startColor: "white",
                        endColor: "white",
                        fontSize: "1rem",
                        indent: 10,
                    },
                },
            }),
            gsap.from(".box3", {
                x: ()=> sectiontwo.offsetWidth,
                y: 300,
                rotate: 30,
                duration: 3,
                scrollTrigger: {
                    trigger: ".box3", // classe trigger
                    start: "top 65%",
                    end: "top 55%",
                    scrub: 5, // l'animazione avanza e ritorna indietro in base al settaggio dell'inizio e fine, dando un numero diventa più fluido perché aggiunge un tempo all'arrivo effettivo al punto designato dalla fine. 
                    markers: { // Mostra a schermo dei segni che indicano l'inizio e fine dell'animazione.
                        startColor: "blue",
                        endColor: "blue",
                        fontSize: "1rem",
                    },
                },
            }),
            gsap.to(".box5", {
                rotate: 90,
                scrollTrigger: {
                    trigger: ".box4", // classe trigger
                    start: "bottom 75%",
                    end: "bottom 60%",
                    pin: ".box4",
                    pinSpacing: true, 
                    scrub:2,
                    markers: { // Mostra a schermo dei segni che indicano l'inizio e fine dell'animazione.
                        startColor: "red",
                        endColor: "red",
                        fontSize: "1rem",
                    },
                },
            })
        })

        return () => ctx.revert();
    }, []);

    return(
        <div className="wrapper-st">
            <div className='container-st' ref={ScrollTriggerPage2}>
                <section id="one">GSAP SCROLLTRIGGER</section>
                <section id="two">
                    <div className="descrizione">
                        Il box 1 viene animato in base alla posizione del box2. L'animazione è controllata staticamente tramite i comandi inseriti nel toogleAction. Il toogleAction ha 4 parametri in cui è possibile importare un certo tipo di animazione.
                    </div>
                    <div className="box"></div>
                    <div className="box2"></div>
                </section>
            </div>
            <div className='container-st' ref={ScrollTriggerPage}>
                <section id="three">
                    <div className="descrizione">
                        Il box 3 viene animato automaticamente, andando avanti e indietro, in base alla posizione di questo rispetto all'inizio e fine dell'impostazione dello scroller. 
                    </div>
                    <div className="box3"></div>
                </section>
            </div>
            <div className='container-st' ref={ScrollTriggerPage}>
                <section id="fourth">
                    <div className="descrizione">
                    
                    </div>
                    <div className="box4"></div>
                    <div className="box5"></div>
                </section>
            </div>
        </div>
    )
}

export default ScrollTriggerGSAP