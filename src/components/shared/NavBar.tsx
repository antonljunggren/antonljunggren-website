import { Component, createSignal, For, Show } from 'solid-js';
import { Link } from '@solidjs/router';

export class NavProp {
  constructor(url: string, title: string) {
    this.url = url;
    this.title = title;
  }

  url: string;
  title: string;
}

const NavBar: Component<{ props: NavProp[] }> = ({ props }) => {
  const [showMobileNav, setShowMobileNav] = createSignal<boolean>(false);

  return (
    <nav class='py-9'>
      <div class='max-w-7xl mx-auto px-8'>
        <div class='flex justify-between'>
          <div class='hidden md:flex space-x-6 w-1/3'>
            <For each={props} fallback={<div></div>}>
              {(prop) => (
                <Link class='text-xl text-gray-800 hover:text-black' href={prop.url}>
                  {prop.title}
                </Link>
              )}
            </For>
          </div>
          <div class='text-3xl w-auto md:w-1/3 text-center'>Anton Ljunggren</div>
          <div class='hidden md:block w-1/3'></div>
          <div class='md:hidden flex items-center'>
            <button onclick={(e) => setShowMobileNav(!showMobileNav())}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile-navbar */}
      <Show when={showMobileNav()}>
        <div class='block md:hidden mobile-menu'>
          <For each={props} fallback={<div></div>}>
            {(prop) => (
              <Link
                class='block py-2 px-4 text-lg hover:text-gray-200'
                href={prop.url}
                onclick={(e) => setShowMobileNav(false)}
              >
                {prop.title}
              </Link>
            )}
          </For>
        </div>
      </Show>
    </nav>
  );
};

export default NavBar;
