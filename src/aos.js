class AOS {
  constructor() {
    this.elements = document.querySelectorAll('[data-aos]');
    this.options = {
      duration: 1000,
      offset: 100,
      once: true,
    };
    this.init();
  }

  init() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.handleScroll();
  }

  handleScroll() {
    this.elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const offset = this.options.offset;
      const duration = this.options.duration;

      if (rect.top < window.innerHeight - offset && rect.bottom > offset) {
        element.classList.add('aos-animate');
        if (this.options.once) {
          element.dataset.aosOnce = 'true';
        }
      } else if (!this.options.once || element.dataset.aosOnce !== 'true') {
        element.classList.remove('aos-animate');
      }
    });
  }
}

export default new AOS();