import { useLoaderData } from "react-router-dom";

function Programs() {
  const data = useLoaderData() as dataI[];

  console.info(data);

  return (
    <>
      <section className="programs-section">
        {data.map((el: dataI) => {
          return (
            <figure key={el.id}>
              <img src={el.poster} alt="" />
              <figcaption>{el.title}</figcaption>
            </figure>
          );
        })}
      </section>
    </>
  );
}

export default Programs;
