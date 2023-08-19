export const createAnchorHref = (href: string) => `#${href}`;

// Smooth scrolling for all anchors
export const smoothScrollToAnchor = () => {
  const anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);
      const block = document.getElementById(blockID);

      if (block) {
        block.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
};
