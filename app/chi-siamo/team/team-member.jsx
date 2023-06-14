"use client"

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function TeamMember({ member }) {
    const cardRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        gsap.set(card, { y: "200%", opacity: 0,});
        gsap.to(card, { y: "0%", duration: 1.5, ease: "power2.out", stagger:.5, opacity: 1,});
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