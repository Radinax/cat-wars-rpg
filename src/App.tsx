import React, { useEffect, useState } from "react";
// Components
import Card from "./components/card";
import Layout from "./components/layout";

const fetchJson = async (url: string) => {
  const response = await fetch(url);
  return response;
};

function App(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string>("");
  useEffect(() => {
    fetchJson(`https://robohash.org/1?set=set4`).then((data) =>
      setImageUrl(data.url)
    );
  }, []);
  return (
    <Layout>
      <Card
        name="Josee"
        imgUrl={imageUrl}
        strength={2}
        magic={2}
        pDefense={2}
        mDefense={2}
        speed={2}
      ></Card>
    </Layout>
  );
}

export default App;
