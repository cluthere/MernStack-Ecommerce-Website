import Slider from './Slider';

import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"

export default function Images(){
  const images = [p2, p3, p4];

  return (
    <div className="pt-12">
      <Slider images={images} />
    </div>
  );
};


