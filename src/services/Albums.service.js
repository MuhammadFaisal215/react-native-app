import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const allAlbumsUrl = baseUrl + '/albums?userId=1';
const allPhotosByAlbumUrl = albumId => baseUrl + '/photos?albumId=' + albumId;

export const getAllAlbums = () => {
  return axios.get(allAlbumsUrl);
};

export const getPhotosByAlbum = albumId => {
  return axios.get(allPhotosByAlbumUrl(albumId));
};
