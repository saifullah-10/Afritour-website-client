import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CountrySpots() {
  const country = useParams();
  console.log(country);
  useEffect(() => {
    fetch(
      `https://b9a10-server-side-saifullah-10.vercel.app/places/country/${country.country}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [country.country]);
  return <div>CountrySpots</div>;
}
