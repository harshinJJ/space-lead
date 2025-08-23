export function formatCurrency(num) {
  if (isNaN(num)) return "";
  const formatted = Number(num).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatted;
}

export const scrollToTop = (duration = 3000, id) => {
  const target = document?.getElementById(id);
  const start = window.pageYOffset;
  const startTime = performance.now();

  const targetPosition =
    target && target.getBoundingClientRect().top + window.pageYOffset; // absolute position
  const distance = targetPosition - start;

  const animateScroll = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Smooth easing
    const easeInOutCubic =
      progress < 0.5
        ? 4 * progress ** 3
        : (progress - 1) * (id ? distance : 2 * progress - 2) ** 2 + 1;

    // Calculate where to scroll
    const val = start + (id ? distance : 0 - start) * easeInOutCubic;
    window.scrollTo(0, val);

    // Continue animation until done
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };
  requestAnimationFrame(animateScroll);
};
