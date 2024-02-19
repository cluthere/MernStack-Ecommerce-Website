import Slider from './Slider';

const apple = "https://www.gaincity.com/media/catalog/category/SEA_iPhone_15_Pro_Sep23_Web_Banner_Pre-Avail_1280x457_FFH-BuyNow_2.jpg"
const google = "https://www.electronicsonedge.com/assets/components/phpthumbof/cache/google-banner_1.35388a4f93748edd2897aed6c80ec562.jpg"
const samsung = "https://dev.myg.in/images/companies/1/prebook-landing-page-banner.jpg?1705583967988"
const realme = "https://image01.realme.net/general/20230608/1686210624428871072fcb5294ae0a771d712fe3a4ca4.jpg.webp?width=2280&height=900&size=318592"
const oppo = "https://assorted.downloads.oppo.com/static/archives/images/dd/Smartphones/A92/A92-white-top%20banner-PC.jpg" 
const redmi = "https://etimg.etb2bimg.com/photo/96783408.cms"


export default function Images(){
  const images = [apple, google, samsung, realme, oppo, redmi];

  return (
    // <div className=" flex ">
    <div className='pt-12 lg:h-2/3 '>
      <Slider images={images} />
    </div>
  );
};


