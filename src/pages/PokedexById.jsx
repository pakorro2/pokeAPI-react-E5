import React from "react";
import { Link, useParams } from "react-router-dom";
import Pokemon404 from "../components/pokedexId/Pokemon404";
import useApiAxios from "../hooks/useApiAxios";
import Loading from "./Loading";
import "../assets/styles/pokedexbyid.css";

const PokedexById = () => {
  const { id } = useParams();
  //custom hook
  const { response, error, isLoading } = useApiAxios({
    url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
  });

  if (error?.code === "ERR_BAD_REQUEST") {
    return <Pokemon404 />;
  }
  return (
    <article className="pokemon__detail-content">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header
            className={`poke__content-img bg-${response?.types[0].type.name}`}
          >
            <img
              className="poke__img"
              src={response?.sprites.other["official-artwork"].front_default}
              alt={response?.name}
            />
          </header>
          <Link to="/pokedex"> ⬅ Return to pokedex</Link>
          <section className="primary__data">
            <h1 className={`poke__id letter-${response?.types[0].type.name}`}>
              #{response?.id}
            </h1>
            <h3 className="poke__name">{response?.name}</h3>
            <div className="poke__meter-content">
              <div className="poke__meter">
                <span className="meter-tag">Weight</span>
                <span className="meter-value">{response?.weight}</span>
              </div>
              <div className="poke__meter">
                <span className="meter-tag">Height</span>
                <span className="meter-value">{response?.height}</span>
              </div>
            </div>
          </section>
          <section className="secondary__data">
            <div className="type__data">
              <h2 className="type-tag">Type</h2>
              <div className="type-values">
                {response?.types.map((type) => (
                  <h3 className={`type-value bgs-${type.type.name}`}>{type.type.name}</h3>
                ))}
              </div>
            </div>
            <div className="type__data">
              <h2 className="type-tag">Skills</h2>
              <div className="type-values">
                {response?.abilities.map((ability) => (
                  <h3 className="skill-value">{ability.ability.name}</h3>
                ))}
              </div>
            </div>
          </section>
          <section className="secondary__data">
            <h2>Stats</h2>
            <ul>
              {response?.stats.map((stat) => (
                <li>
                  {stat.stat.name}
                  <span> {stat["base_stat"]}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="poke__moves-body">
            <h2>Movements</h2>
            <ul className="poke__moves">
              {response?.moves.map((move) => (
                <li className="poke__move">{move.move.name}</li>
              ))}
            </ul>
          </section>
        </>
      )}
    </article>
  );
};

export default PokedexById;
