import PhotoType from './Photo';

export default interface Album {
    albumId: number;
    photos: PhotoType[];
};
