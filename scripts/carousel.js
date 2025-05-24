function scrollCountries(direction) {
  const container = document.querySelector('.country-grid');
  const scrollAmount = container.offsetWidth;
  container.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
}