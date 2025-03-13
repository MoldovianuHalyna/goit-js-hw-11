// function that gets data from server
export const getPhotoFromServer = function (dataName) {
  const searchParametters = new URLSearchParams({
    key: '49322620-5f00be843ea1be6db390f9d83',
    q: dataName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api/?${searchParametters}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
};
