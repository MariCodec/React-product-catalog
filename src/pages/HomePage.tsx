import { HotPrices } from "../components/HotPrices";
import { NewModels } from "../components/NewModels";
import { ShopByCategory } from "../components/ShopByCategory/ShopByCategory";
import { Slider } from "../components/SwiperMain/Swiper";
import { ProductPage } from "../components/ItemCard/ItemCard";

export const HomePage = () => {
  return (
    <div>
      <Slider />
      <NewModels />
      <ShopByCategory />
      <HotPrices />
      <ProductPage />
    </div>
  );
};
