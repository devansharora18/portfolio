import { useEffect } from "react";

/**
 * One IntersectionObserver for the whole document: elements marked with
 * [data-reveal] or [data-rule] get `.is-in` the first time they enter the
 * viewport. A MutationObserver picks up nodes added later (the work index
 * expands on demand).
 */
export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 }
    );

    const scan = () => {
      const nodes = document.querySelectorAll<HTMLElement>("[data-reveal], [data-rule]");
      nodes.forEach((node) => {
        if (seen.has(node) || node.classList.contains("is-in")) return;
        seen.add(node);
        if (reduce) node.classList.add("is-in");
        else io.observe(node);
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
