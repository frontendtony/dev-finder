import * as React from 'react';

function OfficeBuilding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm-1.25-2.5h1.25a.625.625 0 000-1.25h-1.25a.625.625 0 000 1.25zm1.25-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm-1.25-2.5h1.25a.625.625 0 000-1.25h-1.25a.625.625 0 000 1.25zm5.417 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm-1.25-2.5h1.25a.625.625 0 000-1.25H7.5a.625.625 0 000 1.25zm1.25-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm-1.25-2.5h1.25a.625.625 0 000-1.25H7.5a.625.625 0 000 1.25zM12.917 7.792l5.933 1.243c.68.15 1.15.737 1.15 1.425v8.082A1.46 1.46 0 0118.542 20h-5.625V7.792zm2.708 9.708h1.25a.625.625 0 000-1.25h-1.25a.625.625 0 000 1.25zm1.25-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm-1.25-2.5h1.25a.625.625 0 000-1.25h-1.25a.625.625 0 000 1.25z"
        fill="currentColor"
      />
    </svg>
  );
}

export default React.memo(OfficeBuilding);
