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
      class={`cursor-pointer rounded-xl border-2 ${
        bigShoe === selectedBigShoe
          ? "border-2 border-coral-red"
          : "border-transparent"
      } flex-1`}
    >
      <div class="flex h-40 w-40 items-center justify-center rounded-xl bg-card bg-cover bg-center p-4">
        <img
          className="object-contain"
          src={smallShoe}
          width={127}
          height={103.34}
          alt="Collection shoe"
        />
      </div>
    </div>
  );
}
