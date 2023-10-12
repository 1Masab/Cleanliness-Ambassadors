export function applyIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const TargetedElements = document.querySelectorAll(".OnScrollAnimation");
  TargetedElements.forEach((element) => observer.observe(element));
}
