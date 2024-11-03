"use client";

import { useState } from 'react';

interface TextExpanderProps {
  children: React.ReactNode;
}

export default function TextExpander({ children }:TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText =
    typeof children === 'string'
      ? isExpanded
        ? children
        : children.split(' ').slice(0, 40).join(' ') + '...'
      : children;

  return (
    <span>
      {displayText}{' '}
      <button
        className='block pt-2 text-primary-700 border-b border-primary-700 leading-3 pb-1'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </span>
  );
}
