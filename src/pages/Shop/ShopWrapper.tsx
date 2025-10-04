

import Navbar from "../../components/Navbar";
import Shop from "../../components/Shop";

const ShopWrapper = () => {
  return (
    <div className="w-full">
      {/* Add same spacing as Navbar inside Hero */}
      <div className="pt-[54px]">
        <Navbar />
      </div>

      <Shop />
    </div>
  );
};

export default ShopWrapper;