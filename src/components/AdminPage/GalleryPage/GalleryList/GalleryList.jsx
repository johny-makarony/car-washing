import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
  List,
  Item,
  ImageThumb,
  Image,
  UnderTitle,
  DeleteButton,
} from './GalleryList.styled';

import { deletePhotosGroup } from 'redux/gallery/galleryOperations';
import { selectGallery } from 'redux/gallery/gallerySelectors';

export const GalleryList = () => {
  const gallery = useSelector(selectGallery);

  const dispatch = useDispatch();

  return (
    <List>
      {gallery.map(item => (
        <Item key={item._id}>
          <ImageThumb>
            <Image
              src={item.beforePhoto.url}
              alt={item.beforePhoto.alt || 'Зображення'}
            />
            <UnderTitle>До</UnderTitle>
          </ImageThumb>
          <ImageThumb>
            <Image
              src={item.afterPhoto.url}
              alt={item.afterPhoto.alt || 'Зображення'}
            />
            <UnderTitle>Після</UnderTitle>
          </ImageThumb>
          <DeleteButton onClick={() => dispatch(deletePhotosGroup(item._id))}>
            Видалити
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};
