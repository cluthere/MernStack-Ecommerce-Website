import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {

  const FooterItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Products',
      href: '/products',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
    {
      name: 'About',
      href: '/about',
    }
  ]

  return (
    <>
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-blue-600">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
          HARSUN ENTERPRISES  
      </a>
      <p class="my-6 text-gray-500 dark:text-white">House no - 61, Gali no -5 Radha Vihar, Mukundpur, New Delhi, North Delhi, Delhi, 110042</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          {FooterItems.map((item) => (
              <li key={item.name} >
                <NavLink
                  to={item.href}
                  href={item.href}
                  className="mr-4 hover:underline md:mr-6"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023-2024 <a href="#" class="hover:underline">Harsun Enterprises</a>. All Rights Reserved.</span>
  </div>
</footer>
    </>
  );
}