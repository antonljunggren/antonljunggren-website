import { Meta, Title } from '@solidjs/meta';
import { Component, createResource, createSignal, For, Show } from 'solid-js';
import { Get } from '../functions/Requests';
import Photo from '../models/Photo';
import moment from 'moment';
import ShotLocation, { getShotLocationStringFormat } from '../models/Location';

const ENV = import.meta.env;

const fetchPhotos = async () => await Get<Photo[]>(ENV.VITE_API + 'photos');

const Photography: Component = () => {
  const [photos, setPhotos] = createResource<Photo[]>(fetchPhotos);
  const [selectedPhoto, setSelectedPhoto] = createSignal<Photo>();
  const [showHdImage, setShowHdImage] = createSignal(false);

  fetchPhotos()
    .then((p) => p.at(0))
    .then((p) => setSelectedPhoto(p));

  return (
    <div>
      <Title>Anton Ljunggren - Photography</Title>
      <Meta
        name='description'
        content="Anton Ljunggren's film photography journey, from 35mm to 120 medium format"
      />
      <p class='text-center text-lg italic py-4'>
        &quot;I don't like half of you half as well as I should and I like less than half of you
        half as well as you deserve.&quot; - <del>bilbo..</del> me
      </p>

      <div class='mx-5'>
        <div class='gallery'>
          <For each={photos()} fallback={<div class=''></div>}>
            {(photo: Photo) => (
              <div class='image-container'>
                <a
                  class='w-full h-full'
                  target='_blank'
                  onclick={(e) => {
                    e.preventDefault();

                    if (screen.width >= 768) {
                      setSelectedPhoto(photo);
                      setShowHdImage(true);
                    } else {
                      window.open(ENV.VITE_API + 'photo/' + photo.id + '/image/false');
                    }
                  }}
                >
                  <img
                    class='photo'
                    src={ENV.VITE_API + 'photo/' + photo.id + '/image'}
                    alt={photo.title}
                  />
                </a>
              </div>
            )}
          </For>
        </div>
      </div>

      <Show when={showHdImage()}>
        {/* Photo modal */}
        <div id='imageModal' tabIndex='-1' aria-modal='true' class='relative z-10'>
          <div
            class='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
            onclick={(e) => {
              e.preventDefault();
              setShowHdImage(false);
            }}
          ></div>

          <div class='fixed inset-0 z-10 overflow-y-auto'>
            <div class='flex min-h-full items-center justify-center p-4 text-center'>
              <div class='relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-100 text-left shadow-xl transition-all'>
                <div class=' bg-white dark:bg-gray-100 px-4 pt-5 pb-4'>
                  {/* Exit button row */}
                  <div class='flex items-end justify-end'>
                    <div class='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full'>
                      <button
                        onclick={(e) => {
                          e.preventDefault();
                          setShowHdImage(false);
                        }}
                      >
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
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Title row */}
                  <div class='text-center'>
                    <p class='text-3xl pb-6 italic'>{selectedPhoto()?.title}</p>
                  </div>
                  {/* Hd image row */}
                  <div>
                    <img
                      class='hd-photo'
                      src={ENV.VITE_API + 'photo/' + selectedPhoto()?.id + '/image/false'}
                      alt={'image: ' + selectedPhoto()?.description}
                    />
                  </div>
                  {/* Image info row */}
                  <div class='mt-6'>
                    <p class='text-center font-medium text-xl'>{selectedPhoto()?.description}</p>
                    <div class='my-3 mx-6 text-lg'>
                      <p class=''>
                        <strong>
                          <i>Date taken:</i>
                        </strong>{' '}
                        {moment(selectedPhoto()?.dateTaken)
                          .month(moment(selectedPhoto()?.dateTaken).month() - 1)
                          .format('YYYY-MM-DD')}
                      </p>
                      <p>
                        <strong>
                          <i>Location:</i>
                        </strong>{' '}
                        {getShotLocationStringFormat(selectedPhoto()?.location)}
                      </p>
                      <p>
                        <strong>
                          <i>Shot on:</i>
                        </strong>{' '}
                        {selectedPhoto()?.filmUsed}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default Photography;
