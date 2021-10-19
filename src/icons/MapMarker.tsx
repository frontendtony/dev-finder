import * as React from 'react';

function MapMarker(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.03.002c2.398.048 4.554 1.328 5.767 3.423a6.963 6.963 0 01.091 6.88l-4.96 9.077-.006.012c-.218.38-.61.606-1.046.606-.436 0-.827-.226-1.045-.606l-.007-.012-4.96-9.077a6.963 6.963 0 01.091-6.88C2.17 1.33 4.325.05 6.722.002c.103-.003.206-.003.308 0zM4.064 6.25a2.816 2.816 0 002.812 2.813A2.816 2.816 0 009.69 6.25a2.816 2.816 0 00-2.813-2.812A2.816 2.816 0 004.064 6.25z"
        fill="currentColor"
      />
    </svg>
  );
}

export default React.memo(MapMarker);
