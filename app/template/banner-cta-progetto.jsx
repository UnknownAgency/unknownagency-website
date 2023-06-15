import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const BannerCtaProgetto = () => {

    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=> {
        gsap.from ("h4", {
            x: 150,
            stagger:2,
            scrollTrigger: {
                trigger: ".wrapper-banner-cta-progetto",
                start: "top 60%",
                end: "bottom 40%",
                scrub: 3,
            }
        })
    }, [])

    return (
        <section className="wrapper-banner-cta-progetto">
            <div className="wrapper-boxed">
                <h4>Ci</h4>
                <h4>piacerebbe</h4>
                <h4>saperne</h4>
                <h4>di</h4>
                <h4>più</h4>
                <h4>sul</h4>
                <h4>vostro</h4>
                <h4>progetto</h4>
            </div>
        </section>
    )
}

export default BannerCtaProgetto