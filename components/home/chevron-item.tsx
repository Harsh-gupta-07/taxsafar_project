import type { ReactNode } from "react";

export function ChevronItem({
  children,
  compact = false,
}: {
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <li
      className={compact ? "flex items-center gap-2" : "flex items-start gap-3"}
    >
      <span
        className={`material-symbols-outlined text-primary ${compact ? "text-sm" : "mt-1"}`}
        data-icon="chevron_right"
      >
        chevron_right
      </span>
      <span
        className={
          compact ? "text-sm font-medium" : "text-on-surface-variant text-lg"
        }
      >
        {children}
      </span>
    </li>
  );
}

