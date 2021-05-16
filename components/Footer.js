import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div>
        @ 2021 - Johny Xu Sponsored By{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://magic.link">
          Magic
        </a>
      </div>
      <a href="https://nextjs.org/docs/getting-started">
        <h4>
          Learn to code
          <img className="img__yt" src="/nextjs.png" />
        </h4>
      </a>
    </footer>
  );
}
