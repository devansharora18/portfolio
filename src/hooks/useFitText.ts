import { useCallback, useLayoutEffect, useRef } from "react";

/**
 * Scales every [data-fit] child so its text spans the full width of the
 * container — the letterpress "nameplate" effect. Re-runs on resize and once
 * webfonts have landed (metrics change after Anton loads).
 */
export function useFitText<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const fit = useCallback(() => {
    const wrap = ref.current;
    if (!wrap) return;
    const target = wrap.clientWidth;
    if (!target) return;

    const nodes = wrap.querySelectorAll<HTMLElement>("[data-fit]");
    nodes.forEach((node) => {
      node.style.fontSize = "100px";
      const width = node.getBoundingClientRect().width;
      if (!width) return;
      node.style.fontSize = `${((target / width) * 100).toFixed(3)}px`;
    });
  }, []);

  useLayoutEffect(() => {
    fit();

    const wrap = ref.current;
    const ro = new ResizeObserver(fit);
    if (wrap) ro.observe(wrap);

    if (document.fonts) {
      document.fonts.ready.then(fit).catch(() => {});
      // Some engines never settle `fonts.ready`; guard with a retry.
      const t = window.setTimeout(fit, 600);
      return () => {
        window.clearTimeout(t);
        ro.disconnect();
      };
    }
    return () => ro.disconnect();
  }, [fit]);

  return ref;
}
