import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function TeamMember({ member }) {

    gsap.registerPlugin(ScrollTrigger);

    const cardRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        gsap.from(card, {
            y: 200,
            scrollTrigger: {
                trigger: card,
                start: "top 75%",
                end: "top 55%",
                scrub: 5,
                markers: { // Mostra a schermo dei segni che indicano l'inizio e fine dell'animazione.
                    startColor: "blue",
                    endColor: "blue",
                    fontSize: "1rem",
                },
            },
        })
        // gsap.fromTo(card, { y: "100%", duration: 1.5, ease: "power2.out", opacity: 0,},{ y: "0%", duration: 1.5, ease: "power2.out", opacity: 1,});
        gsap.from(imgRef.current, { rotate: 60, duration: 1})
    }, []);

    return (
        <div className={`team-member ${member.subteam} ${member.class}`} ref={cardRef}>
            <img ref={imgRef} src={member.image} width={300} height={300} alt={member.name} loading="lazy" />
            <h3 className="team-member-title">{member.name}</h3>
            <a href={member.lavoraconnoi} className={`team-member-subteam`}>{member.subteam}</a>
            <p className="team-member-position">{member.position}</p>
        </div>
    );
}