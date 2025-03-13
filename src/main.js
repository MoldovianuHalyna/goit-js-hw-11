import iziToast from 'izitoast';
import { getPhotoFromServer } from './js/pixabay-api';
import { createGalleryMarkup, createLightBox } from './js/render-functions';
//selecting the elements
const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};
// Function to show the loader
const showLoader = () => {
  refs.loader.style.display = 'inline-block';
  refs.gallery.style.display = 'none';
};

// Function to hide the loader
const hideLoader = () => {
  refs.loader.style.display = 'none';
  refs.gallery.style.display = 'flex';
};

//getting data from server and creating a gallery
const searchInputHandeling = function (event) {
  event.preventDefault();
  const dataName = event.currentTarget.elements['search-text'].value.trim();

  if (dataName === '') {
    alert('Please enter a valid data');
    return;
  }
  showLoader();

  getPhotoFromServer(dataName)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          messageColor: '#fff',
          backgroundColor: '#ef4040',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          timeout: 10000,
        });

        refs.form.reset();
        refs.gallery.innerHTML = '';
        return;
      }
      const galleryTemplate = hits
        .map(img => createGalleryMarkup(img))
        .join('');
      refs.gallery.innerHTML = galleryTemplate;
      createLightBox();
      refs.form.reset();
    })
    .catch(error => {
      iziToast.error({
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
        message: 'Oops! Something went wrong. Please try again later.',
        timeout: 10000,
      });
    })
    .finally(hideLoader);
};
refs.form.addEventListener('submit', searchInputHandeling);
