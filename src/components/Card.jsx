export function Card({ img, rating, reviews, country, text, price }) {
  // destructuring the object "props", lo de arriba es el resumen de lo de abajo
  // const { img, rating, reviews, country, text, price } = props;
  return (
    <div className="card">
      <img className="card--image" src={`./src/assets/${img}`} alt="" />
      <div className="card--stats">
        <img className="card--star" src="./src/assets/star.png" alt="" />
        <span>{rating}</span>
        <span className="gray">({reviews}) •</span>
        <span className="gray">{country}</span>
      </div>
      <p>{text}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}
