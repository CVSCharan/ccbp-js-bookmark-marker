import { useState } from "react";
import "./App.css";

const initialData = [];

function App() {
  const [siteName, setSiteName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [siteNameErrMsg, setSiteNameErrMsg] = useState("");
  const [siteUrlErrMsg, setSiteUrlErrMsg] = useState("");
  const [siteNameErrStatus, setSiteNameErrStatus] = useState(false);
  const [siteUrlErrStatus, setSiteUrlErrStatus] = useState(false);
  const [data, setData] = useState(initialData);

  const onChangeSiteName = (e) => {
    setSiteName(e.target.value);
    if (e.target.value === "") {
      setSiteNameErrMsg("*Required");
      setSiteNameErrStatus(true);
    } else {
      setSiteNameErrMsg("");
      setSiteNameErrStatus(false);
    }
  };

  const onChangeSiteUrl = (e) => {
    setSiteUrl(e.target.value);
    if (e.target.value === "") {
      setSiteUrlErrMsg("*Required");
      setSiteUrlErrStatus(true);
    } else {
      setSiteUrlErrMsg("");
      setSiteUrlErrStatus(false);
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (siteName === "") {
      setSiteNameErrMsg("*Required");
      setSiteNameErrStatus(true);
    } else {
      setSiteNameErrMsg("");
      setSiteNameErrStatus(false);
    }
    if (siteUrl === "") {
      setSiteUrlErrMsg("*Required");
      setSiteUrlErrStatus(true);
    } else {
      setSiteUrlErrMsg("");
      setSiteUrlErrStatus(false);
    }
    if (siteName !== "" && siteUrl !== "") {
      let obj = {
        siteName,
        siteUrl,
      };
      setData([...data, obj]);
    }
  };

  const renderResult =
    data === []
      ? null
      : data.map((eachItem) => (
          <div className="container">
            <li className="nobull">
              <h1 className="heading4">{eachItem.siteName}</h1>
              <a className="heading4" href={eachItem.siteUrl}>
                {eachItem.siteUrl}
              </a>
            </li>
          </div>
        ));

  return (
    <div className="bg-container">
      <h1 className="heading1">Hello CVS</h1>
      <h1 className="heading2">Welcome to Bookmark Page</h1>
      <div className="card-container">
        <h1 className="heading3">Bookmark Your Favorite Sites</h1>
        <div className="form-container mt-2 mb-2">
          <form id="bookmarkForm" onSubmit={onSubmitForm}>
            <div>
              <label htmlFor="siteNameInput" className="label">
                SITE NAME
              </label>
              <br />
              <input
                placeholder="Enter site name"
                type="text"
                className="form-control"
                id="siteNameInput"
                onChange={onChangeSiteName}
                value={siteName}
              />
              <p className="para" id="siteNameErrMsg">
                {siteNameErrStatus && siteNameErrMsg}
              </p>
            </div>
            <div className="mt-2">
              <label htmlFor="siteUrlInput" className="label">
                SITE URL
              </label>
              <input
                placeholder="Enter site URL"
                type="text"
                className="form-control"
                id="siteUrlInput"
                onChange={onChangeSiteUrl}
                value={siteUrl}
              />
              <p className="para" id="siteUrlErrMsg">
                {siteUrlErrStatus && siteUrlErrMsg}
              </p>
            </div>
            <div className="d-flex flex-row justify-content-end">
              <button
                id="submitBtn"
                type="submit"
                className="btn btn-primary button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div id="container" className="container-results">
          {renderResult}
        </div>
      </div>
    </div>
  );
}

export default App;
