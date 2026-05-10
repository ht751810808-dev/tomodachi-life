import type { CSSProperties, ReactNode } from 'react';

export type SiteIconName =
  | 'arrowRight'
  | 'alertTriangle'
  | 'badgeCheck'
  | 'camera'
  | 'chart'
  | 'check'
  | 'chevronDown'
  | 'clipboard'
  | 'copy'
  | 'gamepad'
  | 'globe'
  | 'heart'
  | 'home'
  | 'image'
  | 'laptop'
  | 'menu'
  | 'phone'
  | 'qr'
  | 'refresh'
  | 'search'
  | 'share'
  | 'sparkle'
  | 'star'
  | 'user'
  | 'users'
  | 'wifi'
  | 'x';

interface SiteIconProps {
  name: SiteIconName;
  size?: number;
  strokeWidth?: number;
  fill?: string;
  style?: CSSProperties;
  className?: string;
}

const paths: Record<SiteIconName, ReactNode> = {
  arrowRight: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  alertTriangle: <><path d="M12 4 21 20H3L12 4Z" /><path d="M12 9v5" /><path d="M12 17h.01" /></>,
  badgeCheck: <><path d="M12 3 14.2 7.1 19 8l-3.4 3.4.6 4.8L12 14l-4.2 2.2.6-4.8L5 8l4.8-.9L12 3Z" /><path d="m9.5 11.5 1.7 1.7 3.5-3.7" /></>,
  camera: <><path d="M4 8h3l1.5-2h7L17 8h3v10H4V8Z" /><circle cx="12" cy="13" r="3.2" /></>,
  chart: <><path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 16v-5" /><path d="M12 16V8" /><path d="M16 16v-8" /></>,
  check: <path d="m5 12 4 4 10-10" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  clipboard: <><rect x="6" y="5" width="12" height="16" rx="2" /><path d="M9 5a3 3 0 0 1 6 0" /><path d="M9 12h6" /><path d="M9 16h4" /></>,
  copy: <><rect x="8" y="8" width="11" height="11" rx="2" /><rect x="5" y="5" width="11" height="11" rx="2" /></>,
  gamepad: <><path d="M7 9h10a5 5 0 0 1 4.5 7.2 2.4 2.4 0 0 1-4 0L16 14H8l-1.5 2.2a2.4 2.4 0 0 1-4 0A5 5 0 0 1 7 9Z" /><path d="M8 12v4" /><path d="M6 14h4" /><path d="M16.5 13.5h.01" /><path d="M18.5 15.5h.01" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></>,
  heart: <path d="M20.5 8.8c0 5-8.5 10.2-8.5 10.2S3.5 13.8 3.5 8.8A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 8.5 1.8Z" />,
  home: <><path d="m4 11 8-7 8 7" /><path d="M6 10v10h12V10" /><path d="M10 20v-6h4v6" /></>,
  image: <><rect x="4" y="5" width="16" height="14" rx="2" /><circle cx="9" cy="10" r="1.5" /><path d="m7 17 4-4 3 3 2-2 3 3" /></>,
  laptop: <><rect x="5" y="5" width="14" height="10" rx="2" /><path d="M3 19h18" /><path d="m7 15-2 4" /><path d="m17 15 2 4" /></>,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  phone: <><rect x="8" y="3" width="8" height="18" rx="2" /><path d="M11 18h2" /></>,
  qr: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><path d="M14 14h2v2h-2z" /><path d="M18 14h2v6h-6v-2" /><path d="M14 18h2" /></>,
  refresh: <><path d="M20 6v5h-5" /><path d="M4 18v-5h5" /><path d="M18 9a7 7 0 0 0-11.7-2.8L4 8.5" /><path d="M6 15a7 7 0 0 0 11.7 2.8L20 15.5" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 10.5 6.8-4" /><path d="m8.6 13.5 6.8 4" /></>,
  sparkle: <><path d="M12 3v5" /><path d="M12 16v5" /><path d="M3 12h5" /><path d="M16 12h5" /><path d="m6 6 3 3" /><path d="m15 15 3 3" /><path d="m18 6-3 3" /><path d="m9 15-3 3" /></>,
  star: <path d="M12 3 14.7 8.7 21 9.5l-4.6 4.4 1.1 6.1L12 17.1 6.5 20l1.1-6.1L3 9.5l6.3-.8L12 3Z" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M3.5 20a6 6 0 0 1 11 0" /><path d="M16 5.5a3.5 3.5 0 0 1 0 7" /><path d="M17 14a6 6 0 0 1 3.5 6" /></>,
  wifi: <><path d="M4.5 9.5a11 11 0 0 1 15 0" /><path d="M8 13a6 6 0 0 1 8 0" /><path d="M11 16.5a2 2 0 0 1 2 0" /></>,
  x: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
};

export default function SiteIcon({
  name,
  size = 20,
  strokeWidth = 2,
  fill = 'none',
  style,
  className,
}: SiteIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
    >
      {paths[name]}
    </svg>
  );
}
