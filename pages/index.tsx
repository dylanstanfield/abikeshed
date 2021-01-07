import dynamic from "next/dynamic";
import { Fragment, useState, ChangeEvent, useEffect } from "react";
import Checkbox from "rc-checkbox";
import Textarea from "rc-textarea";
import { useRouter } from "next/router";

const Scene = dynamic(() => import("../components/Scene"), {
  ssr: false,
});

const HomePage = () => {
  const router = useRouter();

  const [hideRoof, setHideRoof] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [customText, setCustomText] = useState("");
  const [useCustomText, setUseCustomText] = useState(false);

  useEffect(() => {
    if (router.query.t) {
      setCustomText(Buffer.from(router.query.t as string, "base64").toString());
      setUseCustomText(true);
    }
  }, [router.query.t]);

  const onHideRoof = (e: Event) => {
    // @ts-ignore
    setHideRoof(e.target.checked);
  };

  const onSignTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCustomText(e.target.value);
  };

  const onSave = () => {
    let params = new URLSearchParams(window.location.search);
    params.set("t", Buffer.from(customText).toString("base64"));
    window.location.search = params.toString();
  };

  const onCancel = () => {
    setModalOpen(false);
  };

  return (
    <Fragment>
      <div className={"hide-roof_container"}>
        <div className={"hide-roof"}>
          hide roof <Checkbox name="roofHidden" onChange={onHideRoof} />,
          <a onClick={() => setModalOpen(true)} className={"button"}>
            &nbsp;edit sign
          </a>
        </div>
      </div>

      {modalOpen && (
        <div className={"edit-sign-modal"}>
          <h1>edit sign</h1>
          <p>
            change the text on the sign on the shed to the tangent you and your
            coworkers are currently discussing.
          </p>
          <Textarea
            style={{ width: "100%", fontSize: "16px" }}
            onChange={onSignTextChange}
            value={customText}
            placeholder={"bike shed"}
          />
          <p>
            after saving, copy and paste the url to your colleagues as a
            not-so-passive aggressive hint.
          </p>
          <a onClick={onSave} className={"button"}>
            save
          </a>{" "}
          |{" "}
          <a onClick={onCancel} className={"button"}>
            cancel
          </a>
        </div>
      )}

      <div style={{ height: "100vh", background: "DarkSlateBlue" }}>
        <Scene
          hideRoof={hideRoof}
          signText={useCustomText ? customText : null}
        />
      </div>
    </Fragment>
  );
};

export default HomePage;
