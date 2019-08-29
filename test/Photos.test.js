import { shallow, mount } from 'enzyme';
import React from 'react';
import Photos from '../client/components/Photos.jsx';

describe('<Photos>', () => {
  it('<Photos> before API call', () => {
    const component = shallow(
      <Photos listingId={15} />, { disableLifecycleMethods: true }
    );
    expect(component.find('h3')).toHaveLength(1);
  });

  it('Photos takes photos state', () => {
    const photos = [
      {
        "_id" : "5d64c1e10bd620e32d5071d8",
        "slide_id" : 0,
        "desc" : "Southern pochard. Citreoline trogon!",
        "verified" : false,
        "url" : "https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse032.jpg"
      },
      {
        "_id" : "5d64c1e10bd620e32d5071d9",
        "slide_id" : 1,
        "desc" : "Red-vented barbet! White-bellied woodstar - Orange-fronted fruit dove.",
        "verified" : true,
        "url" : "https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse015.jpg"
      }
    ];
    const component = shallow(
      <Photos listingId={15} />, { disableLifecycleMethods: true }
    );
    component.setState({'photos': photos}, () => {
      expect(component.state('photos')).toHaveLength(2);
    });
    
  });
});