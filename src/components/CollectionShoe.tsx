interface Props {
  bigShoe: string;
  smallShoe: string;
  selectedBigShoe: string;
  changeBigShoe: (shoe: string) => void;
}

export function CollectionShoe({
  smallShoe,
  changeBigShoe,
  bigShoe,
  selectedBigShoe,
}: Props) {
  const handleClick = () => {
    if (bigShoe === selectedBigShoe) return;

    changeBigShoe(bigShoe);
  };
  return (
    <div
      onClick={handleClick}
      class={`cursor-pointer rounded-xl bg-card bg-cover bg-center p-4 ${
        bigShoe === selectedBigShoe ? "border-2 border-coral-red" : ""
      }`}
    >
      <img src={smallShoe} alt="Collection shoe" />
    </div>
  );
}
