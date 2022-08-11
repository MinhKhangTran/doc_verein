import React from "react";
import Layout from "@theme/Layout";

const kontaktArray = [
  {
    id: 1,
    title: "Vereinsleiter",
    email: "justus.jonas@example.de",
  },
  {
    id: 2,
    title: "Fußball",
    email: "peter.shaw@example.de",
  },
  {
    id: 3,
    title: "Basketball",
    email: "bob.andrews@example.de",
  },
  {
    id: 4,
    title: "Taekwondo",
    email: "jone.doe@example.de",
  },
  {
    id: 5,
    title: "Powerlifting",
    email: "jane.doe@example.de",
  },
  {
    id: 6,
    title: "Gewichtheben",
    email: "clark.kent@example.de",
  },
  ,
  {
    id: 7,
    title: "Tennis",
    email: "anne.ortha@example.de",
  },
];
const ortArray = [
  {
    id: 1,
    title: "Vereins-HQ",
    ort: "Ulm",
    addresse: "Musterstraße 13",
  },
  {
    id: 2,
    title: "Fußballrasen",
    ort: "Ulm",
    addresse: "Einstein-Bolzplatz",
  },
  {
    id: 3,
    title: "Halle",
    ort: "Neu-Ulm",
    addresse: "Einstein-Halle",
  },
  {
    id: 4,
    title: "Powerlifting",
    ort: "Ulm",
    addresse: "Einstein-Gym",
  },
  {
    id: 5,
    title: "Fitnessstudio",
    ort: "Ulm",
    addresse: "Einstein-Gym",
  },
  ,
  {
    id: 6,
    title: "Tennis",
    ort: "Neu-Ulm",
    addresse: "Einstein-Tennisplatz",
  },
];

const Kontakt = () => {
  return (
    <Layout>
      <main>
        <div className="container | kontakt__page">
          <h1>Nehmen Sie Kontakt zu uns auf!</h1>
          <div className="kontakt__page--kontakt">
            <h2 className="fake__h1">So erreichen Sie uns</h2>
            {kontaktArray.map((kontakt) => {
              const { id, title, email } = kontakt;
              return (
                <div key={id} className={`kontakt__single--${id}`}>
                  <h3>{title}</h3>
                  <p>
                    E-Mail:
                    <a
                      href={`mailto:${email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {email}
                    </a>
                  </p>
                  <p>
                    Telefon:
                    <a href={`tel:123456789${id}`}> 123456789{id}</a>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="kontakt__page--ort">
            <h2 className="fake__h1">Unsere Standorte</h2>
            {ortArray.map((item) => {
              const { id, title, ort, addresse } = item;
              return (
                <div key={id} className={`ort__single--${id}`}>
                  <h3>{title}</h3>
                  <p>
                    Ort:
                    <span> {ort}</span>
                  </p>
                  <p>
                    Adresse:
                    <span> {addresse}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default Kontakt;
