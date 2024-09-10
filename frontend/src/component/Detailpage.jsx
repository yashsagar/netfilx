const Detailpage = ({ detailData }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${detailData.poster_path}`;
  return (
    <div className="relative w-[500px] h-[500px] test">
      <div data-imageUrl={imageUrl} className="itemDetail-wrapper">
        <div className=" absolute left-0 bottom-16 ">
          <p>category</p>
          <p>{detailData.overview}</p>
        </div>
      </div>
    </div>
  );
};
export default Detailpage;
