const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const toggle = item.querySelector('.toggle');

  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    accordions.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.toggle').textContent = '+';
    });

    if (!isActive) {
      item.classList.add('active');
      toggle.src = 'assets/minus-icon.svg';
    } else {
      item.classList.remove('active');
      toggle.src = 'assets/plus-icon.svg';
    }
  });
});

/* =================================== */
/* 🚀 On-Scroll Animations 🚀     */
/* =================================== */
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".reveal-on-scroll");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                // To re-trigger animation every time, uncomment the line below
                // hideScrollElement(el); 
            }
        })
    }
    
    // For a more performant approach, we use the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Optional: Stop observing the element once it's visible
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    scrollElements.forEach((element) => {
        observer.observe(element);
    });

});