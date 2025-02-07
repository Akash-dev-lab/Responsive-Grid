// Initialize GSAP & ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".product").forEach((product, index) => {
    gsap.fromTo(product, 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: product,
                start: "top 85%",
                end: "top 60%",
                toggleActions: "play none none reverse"
            }
        }
    );
});
