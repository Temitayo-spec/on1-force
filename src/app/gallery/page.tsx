import ArtGallery from '@/components/UI/Gallery/ArtGallery';
import React from 'react';
import azurite_1 from '@/images/gallery/azurite_1.png';
import azurite_2 from '@/images/gallery/azurite_2.png';
import azurite_3 from '@/images/gallery/azurite_3.png';
import azurite_4 from '@/images/gallery/azurite_4.png';
import azurite_5 from '@/images/gallery/azurite_5.png';
import azurite_6 from '@/images/gallery/azurite_6.png';
import azurite_7 from '@/images/gallery/azurite_7.png';
import azurite_8 from '@/images/gallery/azurite_8.png';
import azurite_10 from '@/images/gallery/azurite_10.png';
import lightsmoke_1 from '@/images/gallery/lightsmoke_1.png';
import lightsmoke_2 from '@/images/gallery/lightsmoke_2.png';
import lightsmoke_3 from '@/images/gallery/lightsmoke_3.png';
import darksmoke_1 from '@/images/gallery/darksmoke_1.png';
import technogod_1 from '@/images/gallery/technogod_1.png';
import technogod_2 from '@/images/gallery/technogod_2.png';
import citrine_1 from '@/images/gallery/citrine_1.png';
import jasper_1 from '@/images/gallery/jasper_1.png';
import jasper_2 from '@/images/gallery/jasper_2.png';
import { generateAlphaNumericTag, generateTag } from '@/helpers';

const initialArtworks: Artwork[] = [
  {
    id: generateTag(),
    imageUrl: azurite_1,
    type: generateAlphaNumericTag(),
    background: 'Azurite',
    face: 'PR Mask (Citrine)',
  },
  {
    id: generateTag(),
    imageUrl: azurite_2,
    type: generateAlphaNumericTag(),
    background: 'Azurite',
    face: 'No Mask',
  },
  {
    id: generateTag(),
    imageUrl: technogod_1,
    type: generateAlphaNumericTag(),
    background: 'Technogod',
    face: 'Dog Mask',
  },
  {
    id: generateTag(),
    imageUrl: lightsmoke_1,
    type: generateAlphaNumericTag(),
    background: 'Light Smoke',
    face: 'Yaksha Mask',
  },
  {
    id: generateTag(),
    imageUrl: azurite_5,
    type: generateAlphaNumericTag(),
    background: 'Azurite',
    face: 'No Mask',
  },
  {
    id: generateTag(),
    imageUrl: lightsmoke_2,
    type: generateAlphaNumericTag(),
    background: 'Light Smoke',
    face: 'Piercing Shades',
  },
  {
    id: generateTag(),
    imageUrl: lightsmoke_3,
    type: generateAlphaNumericTag(),
    background: 'Light Smoke',
    face: 'Yaksha Mask',
  },
  {
    id: generateTag(),
    imageUrl: technogod_2,
    type: generateAlphaNumericTag(),
    background: 'Technogod',
    face: 'Face Mask',
  },
  {
    id: generateTag(),
    imageUrl: citrine_1,
    type: generateAlphaNumericTag(),
    background: 'Citrine',
    face: 'PR Mask (Citrine)',
  },
  {
    id: generateTag(),
    imageUrl: jasper_1,
    type: generateAlphaNumericTag(),
    background: 'Jasper',
    face: 'Face Mask',
  },
  {
    id: generateTag(),
    imageUrl: darksmoke_1,
    type: generateAlphaNumericTag(),
    background: 'Dark Smoke',
    face: 'Face Mask',
  },
  {
    id: generateTag(),
    imageUrl: azurite_6,
    type: generateAlphaNumericTag(),
    background: 'Azurite',
    face: 'Piercing Shades',
  },
  {
    id: generateTag(),
    imageUrl: azurite_10,
    type: generateAlphaNumericTag(),
    background: 'Azurite',
    face: 'Crow Mask',
  },
  {
    id: generateTag(),
    imageUrl: jasper_2,
    type: generateAlphaNumericTag(),
    background: 'Citrine',
    face: 'Face Mask',
  },
];

const Gallery = () => {
  return (
    <div>
      <ArtGallery initialArtworks={initialArtworks} />
    </div>
  );
};

export default Gallery;
