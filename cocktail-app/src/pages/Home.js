/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/features/cocktailSlice";
import Spinner from "../components/shared/Spinner";
const Home = () => {
  const [modifiedCocktails, setmodifiedCocktails] = useState([]);
  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setmodifiedCocktails(newCocktails);
    } else {
      setmodifiedCocktails([]);
    }
  }, [cocktails]);
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  if (!cocktails) {
    return (
      <Layout>
        <h2>No Cocktail Found With THis Name</h2>
      </Layout>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row m-55 p-55" style={{ width: "140rem" }}>
          {modifiedCocktails.map((item) => (
            <div className="col-md-3 mt-3 m-1" key={item.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h5 className="card-title">{item.glass}</h5>
                  <p className="card-text">{item.info}</p>
                  <Link to={`/products/${item.id}`} className="btn btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
