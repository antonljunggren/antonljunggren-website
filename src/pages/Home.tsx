import { Meta, Title } from '@solidjs/meta';
import { Component } from 'solid-js';

const Home: Component = () => {
  return (
    <div class=''>
      <Title>Anton Ljunggren</Title>
      <Meta
        name='description'
        content='A computer engineer and IT consultant. Always been interested in everything "Tech" and the surrounding fields. Started programming at a young age, experimenting with making video games and programs. Main interests are building and tinkering with stuff, from computers and rc airplanes to embedded systems'
      />
      <div class='text-center md:flex pb-4'>
        <p class='text-lg font-semibold pt-4 md:basis-1/2 md:text-3xl md:text-right md:px-5'>
          Computer Engineer & IT Consultant
        </p>
        <p class='text-left pt-4 px-5 md:basis-1/2 max-w-screen-md'>
          With a degree in computer engineering, currently working as a IT consultant. Always been
          interested in everything "Tech" and the surrounding fields. Started programming at a young
          age, experimenting with making video games and programs. Main interests are building and
          tinkering with stuff, from computers and rc airplanes to embedded systems
        </p>
      </div>

      <div class='home-background-image h-96 md:bg-fixed'>
        <p class='text-white text-center text-3xl py-40 antialiased italic font-serif'>
          A Journey Ahead
        </p>
      </div>
      <div class=''>
        <p class='text-center'>
          This is my website, dedicated to the things I have created, and that I think of creating.
          In this early stage you can se some of my analog film photographs{' '}
          <strong>
            <a class='underline' href='/photography'>
              in the photography section
            </a>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Home;
