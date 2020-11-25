import Link from "next/link";
const BookItem = ({ data }) => {
  return (
    <>
      <div style={{ background: "lightgray" }}>
        <img src={data.image} />
        <h2>{data.title}</h2>
      </div>
    </>
  );
};
export default BookItem;
