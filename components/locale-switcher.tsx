"use client";

import React from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  // Remove the current locale from pathname to get the base path
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
  
  const otherLocale = locale === 'tr' ? 'en' : 'tr';
  const switchUrl = `/${otherLocale}${pathWithoutLocale}`;

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      asChild
      className="flex items-center space-x-2"
    >
      <Link href={switchUrl}>
        <Globe size={16} />
        <span className="font-medium">
          {otherLocale.toUpperCase()}
        </span>
      </Link>
    </Button>
  );
}
