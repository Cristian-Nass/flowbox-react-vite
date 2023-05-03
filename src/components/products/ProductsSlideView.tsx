import { useState } from "react";
import { useStore } from "../../store";
import Product from "./Product";

const ProductsSlideView = () => {
  const { products } = useStore();
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderCounter = (data: string) => {
    if (data === "up") {
      if (currentSlide === products.length - 1) return;
      setCurrentSlide(currentSlide + 1);
    }
    if (data === "down") {
      if (currentSlide === 0) return;
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        type="button"
        className="btn btn-primary defult-blue-color"
        style={{ width: "60px" }}
        onClick={() => sliderCounter("down")}
      >
        Prev
      </button>
      <Product
        title={products[currentSlide]?.title}
        image={products[currentSlide]?.image}
        descriptions={products[currentSlide]?.descriptions}
        id={products[currentSlide]?.id}
        price={products[currentSlide]?.price}
      />
      <button
        type="button"
        className="btn btn-primary defult-blue-color"
        style={{ width: "60px" }}
        onClick={() => sliderCounter("up")}
        data-testid="props-product"
      >
        Next
      </button>
    </div>
  );
};

export default ProductsSlideView;
