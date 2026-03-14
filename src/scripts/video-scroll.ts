export function initVideoScroll() {

  const container = document.getElementById("intro-container") as HTMLElement | null;
  const video = document.getElementById("scroll-video") as HTMLVideoElement | null;
  const overlay = document.getElementById("intro-overlay") as HTMLElement | null;
  const heroSection = document.getElementById("hero-section") as HTMLElement | null;
  const navbar = document.querySelector("nav") as HTMLElement | null;

  if (!container || !video) return;

  /* Hide hero + navbar initially */

  if (navbar) {
    navbar.style.opacity = "0";
    navbar.style.pointerEvents = "none";
  }

  if (heroSection) {
    heroSection.style.opacity = "0";
    heroSection.style.pointerEvents = "none";
  }

  /* Wait until video metadata loads */

  const onReady = () => {
    updateVideoPlayback();
  };

  if (video.readyState >= 1) {
    onReady();
  } else {
    video.addEventListener("loadedmetadata", onReady, { once: true });
  }

  function updateVideoPlayback() {

    const scrollY = window.scrollY;
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollRange = Math.max(containerHeight - viewportHeight, 1);

    const relativeScroll = Math.min(
      Math.max(scrollY - containerTop, 0),
      scrollRange
    );

    const progress = relativeScroll / scrollRange;

    /* Sync video with scroll */

    if (!isNaN(video.duration) && video.duration > 0) {

      const targetTime = progress * video.duration;

      if (Math.abs(video.currentTime - targetTime) > 0.03) {
        video.currentTime = targetTime;
      }

    }

    /* Fade transition */

    const transitionStart = 0.85;

    if (progress >= transitionStart) {

      const transitionProgress =
        (progress - transitionStart) / (1 - transitionStart);

      const eased = Math.min(transitionProgress * transitionProgress, 1);

      if (overlay) overlay.style.opacity = eased.toString();

      if (heroSection) {
        heroSection.style.opacity = eased.toString();
        heroSection.style.pointerEvents = eased > 0.5 ? "auto" : "none";
      }

      if (navbar) {
        navbar.style.opacity = eased.toString();
        navbar.style.pointerEvents = eased > 0.5 ? "auto" : "none";
      }

    } else {

      if (overlay) overlay.style.opacity = "0";

      if (heroSection) {
        heroSection.style.opacity = "0";
        heroSection.style.pointerEvents = "none";
      }

      if (navbar) {
        navbar.style.opacity = "0";
        navbar.style.pointerEvents = "none";
      }

    }

  }

  /* Optimize scroll performance */

  let ticking = false;

  const onScroll = () => {

    if (!ticking) {

      requestAnimationFrame(() => {
        updateVideoPlayback();
        ticking = false;
      });

      ticking = true;

    }

  };

  window.addEventListener("scroll", onScroll, { passive: true });

  /* Initial update */

  updateVideoPlayback();

}