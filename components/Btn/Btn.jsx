'use client';
import Link from 'next/link';
import './scss/Btn.scss';

export default function Btn({
  type = 'button',
  url,
  alt,
  className,
  children,
  onClick,
  target
}) {
  return (
    <>
      {type === 'button' && (
        <button type="button" className={className} onClick={onClick}>
          <span>{children}</span>
        </button>
      )}

      {type === 'submit' && (
        <button type="submit" className={className} onClick={onClick}>
          <span>{children}</span>
        </button>
      )}

      {type === 'a' && (
        <a href={url} title={alt} className={className} onClick={onClick} target={target} rel={"canonical"}>
          <span>{children}</span>
        </a>
      )}

      {type === 'link' && (
        <a href={url} title={alt} className={className} onClick={onClick} rel={"canonical"}>
          <span>{children}</span>
        </a>
      )}
    </>
  );
}
