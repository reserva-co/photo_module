import { mount } from 'enzyme';
import jsdom from 'jsdom';
import React from 'react';
import Photos from '../client/components/Photos.jsx';
import PhotosGrid from '../client/components/photosGrid.jsx';
import PhotosGridEntry from '../client/components/photosGrid.jsx';

describe('<Photos>', () => {
  it('State photos property length', () => {
    const photos = [
      {
        "_id" : "5d64c1e10bd620e32d5071d8",
        "slide_id" : 0,
        "desc" : "Southern pochard. Citreoline trogon!",
        "verified" : false,
        "url" : "https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse032.png"
      },
      {
        "_id" : "5d64c1e10bd620e32d5071d9",
        "slide_id" : 1,
        "desc" : "Red-vented barbet! White-bellied woodstar - Orange-fronted fruit dove.",
        "verified" : true,
        "url" : "https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse015.png"
      },
      {
        "_id" : "5d64c1e10bd620e32d5071da",
        "slide_id" : 2,
        "desc" : "Common yellowthroat - Plain pigeon - Micronesian megapode.",
        "verified" : true,
        "url" : "https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse009.png"
      },
      {
        "_id" : "5d64c1e10bd620e32d5071db",
        "slide_id" : 3,
        "desc" : "Common tailorbird. Song thrush.",
        "verified" : true,
        "url" : "https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse065.png"
      }
    ];
    const wrapper = mount(<Photos listingId={15} />);
    wrapper.setState({'photos': photos});
    expect(wrapper.state('photos')).toHaveLength(4);
  })
})