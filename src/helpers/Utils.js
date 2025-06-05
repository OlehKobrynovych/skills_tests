export const scrollToSection = (id, offset = -100) => {
  const section = document.getElementById(id);
  if (section) {
    const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export const handleGetRandomId = () => {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
};
