import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Link from "next/link";

const key = "f753670c";

function Home({ list }: any) {
  console.log(list);
  return (
    <div>
      <Layout />
      <Navbar />
      {list.map((search: any, index: any) => {
        return (
          <div key={index}>
            {search.Search.map((movie: any, index: any) => {
              return (
                <div key={index}>
                  <div>
                    <table className="shadow-2xl font-[Poppins] border-cyan-200 ml-10 w-11/12 overflow-hidden hover:scale-105">
                      <tbody className="">
                        <tr className="hover:bg-neutral-600  bg-neutral-500 cursor-pointer duration-400">
                          <td className="text-2xl py-10 px-6 w-1/3">
                            <Link href={`/Film/${movie.imdbID}`}>
                              {" "}
                              {movie.Title}
                            </Link>
                          </td>
                          <td className="text-2xl py-10 px-6 w-1/3">
                            {movie.Year}
                          </td>
                          <td className="py-10 px-6 w-1/12">
                            <img
                              className="scale-150"
                              src={movie.Poster}
                              alt="movie poster"
                              width={50}
                              height={50}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export async function getStaticProps() {
  let list = [];
  const res = await fetch(`https://www.omdbapi.com/?s=Car&apikey=${key}`);

  const movies = await res.json();
  const res2 = await fetch(
    `https://www.omdbapi.com/?s=Spider-Man&apikey=${key}`
  );
  const movies2 = await res2.json();
  list.push(movies, movies2);
  return {
    props: {
      list,
    },
  };
}

export default Home;
