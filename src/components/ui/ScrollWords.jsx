import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-linked text reveal: each word animates from muted grey to full black
 * as the block travels through the viewport.
 */
export default function ScrollWords({ text, className = '', wordClassName = '' }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(' ');

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      // 0 when the block's top edge enters the bottom of the viewport,
      // 1 when its bottom edge leaves the top.
      const total = viewport + rect.height;
      const travelled = viewport - rect.top;
      setProgress(Math.min(1, Math.max(0, travelled / total)));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((word, idx) => {
        const start = words.length === 1 ? 0 : (idx / words.length) * 0.85;
        const local = Math.min(1, Math.max(0, (progress - start) / 0.18));
        return (
          <span key={`${word}-${idx}`}>
            <span
              className={`inline-block ${wordClassName}`.trim()}
              style={{
                color: `color-mix(in srgb, #0A0A0A ${local * 100}%, #C9C9C9)`,
                opacity: 0.35 + local * 0.65,
                transition: 'color 120ms linear',
              }}
            >
              {word}
            </span>
            {idx < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </p>
  );
}