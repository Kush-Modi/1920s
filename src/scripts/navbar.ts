export function initNavbar() {

  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const openIcon = document.getElementById("menu-open");
  const closeIcon = document.getElementById("menu-close");

  if (!(toggle instanceof HTMLElement)) return;
  if (!(mobileMenu instanceof HTMLElement)) return;

  const closeLinks = document.querySelectorAll<HTMLElement>("[data-close-menu]");

  let isOpen = false;

  function openMenu() {
    mobileMenu.classList.remove("hidden");

    if (openIcon instanceof HTMLElement) {
      openIcon.classList.add("hidden");
    }

    if (closeIcon instanceof HTMLElement) {
      closeIcon.classList.remove("hidden");
    }

    toggle.setAttribute("aria-expanded", "true");

    isOpen = true;
  }

  function closeMenu() {
    mobileMenu.classList.add("hidden");

    if (openIcon instanceof HTMLElement) {
      openIcon.classList.remove("hidden");
    }

    if (closeIcon instanceof HTMLElement) {
      closeIcon.classList.add("hidden");
    }

    toggle.setAttribute("aria-expanded", "false");

    isOpen = false;
  }

  function toggleMenu() {
    isOpen ? closeMenu() : openMenu();
  }

  toggle.addEventListener("click", toggleMenu);

  closeLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

}