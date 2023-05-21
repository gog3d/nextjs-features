import Link from 'next/link';

const A = ({text, href, className}) => {
  return (
    <Link href={href} className={className}>
      {text}
    </Link>
  );
};

export default A;
