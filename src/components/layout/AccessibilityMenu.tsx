"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Accessibility,
  ArrowUpDown,
  BookA,
  Contrast,
  ImageOff,
  Link2,
  MessageSquareText,
  MousePointer2,
  MoveHorizontal,
  PauseCircle,
  RotateCcw,
  Type,
  X,
} from "lucide-react";

/**
 * Accessibility menu (Ctrl+U). Each option toggles a class on <html>; the matching rules live in globals.css.
 * Choices are remembered in localStorage (wrapped in try/catch: it can be unavailable in private windows).
 */
type Key = "contrast" | "links" | "spacing" | "pause" | "images" | "dyslexia" | "cursor" | "tooltips" | "height";
type State = { text: 0 | 1 | 2 | 3 } & Record<Key, boolean>;

const STORAGE_KEY = "kkem-a11y";
const initial: State = {
  text: 0,
  contrast: false,
  links: false,
  spacing: false,
  pause: false,
  images: false,
  dyslexia: false,
  cursor: false,
  tooltips: false,
  height: false,
};

const toggles: { key: Key; label: string; Icon: typeof Contrast }[] = [
  { key: "contrast", label: "Contrast +", Icon: Contrast },
  { key: "links", label: "Highlight Links", Icon: Link2 },
  { key: "spacing", label: "Text Spacing", Icon: MoveHorizontal },
  { key: "pause", label: "Pause Animations", Icon: PauseCircle },
  { key: "images", label: "Hide Images", Icon: ImageOff },
  { key: "dyslexia", label: "Dyslexia Friendly", Icon: BookA },
  { key: "cursor", label: "Large Cursor", Icon: MousePointer2 },
  { key: "tooltips", label: "Tooltips", Icon: MessageSquareText },
  { key: "height", label: "Line Height", Icon: ArrowUpDown },
];

function apply(s: State) {
  const el = document.documentElement;
  el.classList.toggle("a11y-contrast", s.contrast);
  el.classList.toggle("a11y-links", s.links);
  el.classList.toggle("a11y-spacing", s.spacing);
  el.classList.toggle("a11y-pause", s.pause);
  el.classList.toggle("a11y-images", s.images);
  el.classList.toggle("a11y-dyslexia", s.dyslexia);
  el.classList.toggle("a11y-cursor", s.cursor);
  el.classList.toggle("a11y-height", s.height);
  el.classList.remove("a11y-text-1", "a11y-text-2", "a11y-text-3");
  if (s.text > 0) el.classList.add(`a11y-text-${s.text}`);
}

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>(initial);
  const [tip, setTip] = useState<{ text: string; x: number; y: number } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // restore saved choices
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const next = { ...initial, ...JSON.parse(saved) } as State;
        setState(next);
        apply(next);
      }
    } catch {
      /* storage unavailable: start from defaults */
    }
  }, []);

  const update = useCallback((patch: Partial<State>) => {
    setState((prev) => {
      const next = { ...prev, ...patch };
      apply(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  // Ctrl+U toggles the menu; Escape closes it
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // move focus into the panel when it opens, back to the button when it closes
  const wasOpen = useRef(false);
  useEffect(() => {
    if (open) closeRef.current?.focus();
    else if (wasOpen.current) openerRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  // Tooltips option: show the title / aria-label / alt text of whatever is hovered or focused
  useEffect(() => {
    if (!state.tooltips) {
      setTip(null);
      return;
    }
    const show = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t?.closest || t.closest("[data-a11y-ui]")) return setTip(null);
      const el = t.closest("[title],[aria-label],img[alt]") as HTMLElement | null;
      const text = el && (el.getAttribute("title") || el.getAttribute("aria-label") || el.getAttribute("alt"));
      if (!el || !text) return setTip(null);
      const r = el.getBoundingClientRect();
      setTip({ text, x: Math.min(Math.max(r.left, 8), window.innerWidth - 248), y: r.bottom + 6 });
    };
    const hide = () => setTip(null);
    document.addEventListener("mouseover", show);
    document.addEventListener("focusin", show);
    document.addEventListener("mouseout", hide);
    document.addEventListener("focusout", hide);
    return () => {
      document.removeEventListener("mouseover", show);
      document.removeEventListener("focusin", show);
      document.removeEventListener("mouseout", hide);
      document.removeEventListener("focusout", hide);
    };
  }, [state.tooltips]);

  const tile = (active: boolean) =>
    `flex min-h-[5.5rem] flex-col items-center justify-center gap-2 rounded-xl border-2 p-3 text-center text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
      active
        ? "border-brand-600 bg-brand-600 text-white"
        : "border-transparent bg-white text-slate-900 hover:border-brand-300"
    }`;

  return (
    <div data-a11y-ui>
      <button
        ref={openerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="Open accessibility menu (Ctrl+U)"
        className="fixed bottom-4 right-4 z-[60] grid h-12 w-12 place-items-center rounded-full bg-brand-700 text-white shadow-lg shadow-black/30 ring-2 ring-white transition-colors hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
      >
        <Accessibility size={26} aria-hidden />
      </button>

      {open && (
        <div
          id="a11y-panel"
          ref={panelRef}
          role="dialog"
          aria-label="Accessibility menu"
          className="fixed bottom-20 right-4 z-[70] flex max-h-[calc(100vh-7rem)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl bg-slate-100 shadow-2xl shadow-black/40"
        >
          <div className="flex items-center justify-between bg-brand-700 px-5 py-4 text-white">
            <h2 className="text-base font-semibold">Accessibility Menu (CTRL+U)</h2>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close accessibility menu"
              className="grid h-8 w-8 place-items-center rounded-full bg-navy-900/60 hover:bg-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <X size={18} aria-hidden />
            </button>
          </div>

          <div className="overflow-y-auto p-4">
            <div className="grid grid-cols-2 gap-3">
              {/* Bigger text cycles through 4 sizes */}
              <button
                type="button"
                onClick={() => update({ text: ((state.text + 1) % 4) as State["text"] })}
                className={tile(state.text > 0)}
                aria-label={`Bigger Text, level ${state.text} of 3`}
              >
                <Type size={26} aria-hidden />
                Bigger Text
                <span className="flex gap-1" aria-hidden>
                  {[1, 2, 3].map((n) => (
                    <span key={n} className={`h-1.5 w-5 rounded-full ${state.text >= n ? "bg-white" : "bg-slate-300"}`} />
                  ))}
                </span>
              </button>

              {toggles.map(({ key, label, Icon }) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={state[key]}
                  onClick={() => update({ [key]: !state[key] } as Partial<State>)}
                  className={tile(state[key])}
                >
                  <Icon size={26} aria-hidden />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white px-4 py-3">
            <button
              type="button"
              onClick={() => update(initial)}
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-4 py-1.5 text-sm font-semibold text-white hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              <RotateCcw size={14} aria-hidden /> Reset all
            </button>
          </div>
        </div>
      )}

      {tip && (
        <div
          role="tooltip"
          style={{ left: tip.x, top: tip.y }}
          className="pointer-events-none fixed z-[80] max-w-[15rem] rounded-md bg-black px-3 py-1.5 text-xs font-medium text-white shadow-lg"
        >
          {tip.text}
        </div>
      )}
    </div>
  );
}
