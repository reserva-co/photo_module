import { shallow } from 'enzyme';
import React from 'react';
import SlideShow from '../client/components/SlideShow.jsx';

describe('<SlideShow>', () => {
  const photos = [
		{
			"_id" : "5d68607adf53d02c1a292a03",
			"slide_id" : 0,
			"desc" : "Vogelkop owlet-nightjar, Common pheasant. Ridgway's hawk.",
			"verified" : true,
			"url" : "https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse067.jpg"
		},
		{
			"_id" : "5d68607adf53d02c1a292a04",
			"slide_id" : 1,
			"desc" : "Antarctic shag - Blue-throated mountaingem!",
			"verified" : true,
			"url" : "https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse054.jpg"
		},
		{
			"_id" : "5d68607adf53d02c1a292a05",
			"slide_id" : 2,
			"desc" : "Coppery emerald. Green-crowned plovercrest.",
			"verified" : true,
			"url" : "https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse050.jpg"
		},
		{
			"_id" : "5d68607adf53d02c1a292a06",
			"slide_id" : 3,
			"desc" : "Common redpoll.",
			"verified" : true,
			"url" : "https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse091.jpg"
		},
		{
			"_id" : "5d68607adf53d02c1a292a07",
			"slide_id" : 4,
			"desc" : "Slaty-breasted wood rail! Black-girdled barbet. Knob-billed duck!",
			"verified" : true,
			"url" : "https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse009.jpg"
		},
  ];
  it('should render slideshow elements', () => {
    const wrapper = shallow(<SlideShow photos={photos} currentId={2} />);
    expect(wrapper.find('SlideShow__GalleryImg')).toHaveLength(5);
    console.log('GalleryImg', wrapper.find('SlideShow__GalleryImg'));
    expect(wrapper.find('SlideShow__MainImage')).toHaveLength(1);
    expect(wrapper.find('SlideShow__Arrows')).toHaveLength(2);
  });
});