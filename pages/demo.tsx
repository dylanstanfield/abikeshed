import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Demo = dynamic(() => import("../components/Demo"), {
  ssr: false,
});

const HomePage = () => {
  const router = useRouter();

  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    if (router.query.names) {
      setNames((router.query.names as string).split(","));
    }
  }, [router.query.names]);

  return (
    <div style={{ height: "100vh", background: "DarkSlateBlue" }}>
      <Demo names={names} />
    </div>
  );
};

export default HomePage;
