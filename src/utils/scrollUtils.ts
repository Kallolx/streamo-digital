/**
 * Scrolls to a section by ID with smooth behavior
 * @param sectionId The ID of the section to scroll to
 * @param setMenuOpen Optional function to close mobile menu
 */
export const scrollToSection = (sectionId: string, setMenuOpen?: (isOpen: boolean) => void) => {
  // Close mobile menu if it's open
  if (setMenuOpen) {
    setMenuOpen(false);
  }

  // Small delay to allow menu to close before scrolling
  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else if (window.location.pathname !== '/services') {
      // If we're not on the services page, navigate to it first and then scroll
      window.location.href = `/services#${sectionId}`;
    }
  }, setMenuOpen ? 300 : 0); // Add delay only if menu was open
};

/**
 * Checks if the URL has a hash and scrolls to that section after page load
 */
export const handleHashScroll = () => {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash;
    if (hash) {
      // Remove the # character
      const sectionId = hash.substring(1);
      
      // Wait for page to fully load
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    }
  }
}; 