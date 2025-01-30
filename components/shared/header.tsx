import React from 'react';
import { Container, SearchInput } from './index';
import { cn } from '@/lib/utils';
import { Button } from '../ui/index';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border, border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl uppercase font-black">Nice App</h1>
              <p className="text-sm text-gray-400 leading-3">Доставка еды.</p>
            </div>
          </div>
        </Link>
        <SearchInput />
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>
          <div>
            <Button className="group relative">
              <b>520 p</b>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
