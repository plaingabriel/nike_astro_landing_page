import { useState } from "preact/hooks";
import { CollectionShoe } from "./CollectionShoe";

const bigShoes = {
  bigShoe1: "/big-shoe1.png",
  bigShoe2: "/big-shoe2.png",
  bigShoe3: "/big-shoe3.png",
};

const smallShoes = {
  smallShoe1: "/thumbnail-shoe1.svg",
  smallShoe2: "/thumbnail-shoe2.svg",
  smallShoe3: "/thumbnail-shoe3.svg",
};

export function ChangeShoe() {
  const [selectedBigShoe, setSelectedBigShoe] = useState(bigShoes.bigShoe1);

  const changeBigShoe = (shoe: string) => {
    setSelectedBigShoe(shoe);
  };

  return (
    <>
      <img
        class="mx-auto mt-36"
        src={selectedBigShoe}
        alt="Shoe at big scale"
      />
      <section class="ms-14 mt-6 flex gap-x-6">
        <CollectionShoe
          selectedBigShoe={selectedBigShoe}
          changeBigShoe={changeBigShoe}
          bigShoe={bigShoes.bigShoe1}
          smallShoe={smallShoes.smallShoe1}
        />
        <CollectionShoe
          selectedBigShoe={selectedBigShoe}
          changeBigShoe={changeBigShoe}
          bigShoe={bigShoes.bigShoe2}
          smallShoe={smallShoes.smallShoe2}
        />
        <CollectionShoe
          selectedBigShoe={selectedBigShoe}
          changeBigShoe={changeBigShoe}
          bigShoe={bigShoes.bigShoe3}
          smallShoe={smallShoes.smallShoe3}
        />
      </section>
    </>
  );
}
