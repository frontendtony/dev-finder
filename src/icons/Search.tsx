import * as React from 'react';

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 25 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.609 0C4.759 0 0 4.746 0 10.58c0 5.833 4.76 10.58 10.609 10.58a10.58 10.58 0 006.847-2.506l5.119 5.093a.867.867 0 001.23-.003.87.87 0 00-.003-1.23l-5.113-5.087a10.517 10.517 0 002.528-6.847C21.217 4.746 16.458 0 10.61 0zm6.326 16.77a8.797 8.797 0 002.543-6.19c0-4.875-3.979-8.84-8.87-8.84-4.89 0-8.869 3.965-8.869 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.194-2.518.884.884 0 01.132-.132z"
        fill="currentColor"
      />
    </svg>
  );
}

export default React.memo(SearchIcon);
