'use client';
import Link from 'next/link';
import {usePathname, useParams} from 'next/navigation';

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const params = useParams() as {locale: string};
  const base = pathname.replace(/^\/(fr|ar)/, '');
  return (
    <div className="flex gap-2">
      <Link className={`badge ${params.locale==='fr' ? 'bg-gold text-deepblue border-gold' : 'border-deepblue text-deepblue'}`} href={`/fr${base}`}>FR</Link>
      <Link className={`badge ${params.locale==='ar' ? 'bg-gold text-deepblue border-gold' : 'border-deepblue text-deepblue'}`} href={`/ar${base}`}>AR</Link>
    </div>
  );
}
