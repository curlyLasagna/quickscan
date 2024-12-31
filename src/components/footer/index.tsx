import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export interface FooterProps {

}

export const Footer = component$<FooterProps>(() => {
  return (
    <footer class="bg-[#3c3c3c]>">
      <Link href="/about" class="text-white ml-2 hover:underline">About</Link>
    </footer>
  );
});
