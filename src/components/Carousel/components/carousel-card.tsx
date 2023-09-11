type Props = {};

const CarouselCard = (props: Props) => {
  return (
    <div className="py-8">
      <div>
        <img
          src="/principle.jpg"
          className="rounded-full m-auto p-1 border-dashed border-black border"
          alt=""
        />
      </div>
      <div>
        <h4 className="text-primary text-center font-bold">
          Dr. (Mrs.) K. R. Joshi
        </h4>
      </div>
      <div>
        <p className="text-slate-600 text-center text-xs italic">
          "One Of the Thing of Modern College Of Enginneering Is Its Atmosphere"
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
