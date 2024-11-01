import { Helmet } from "react-helmet";

const Settings: React.FC = () => {
  return (
    <div>
      {" "}
      <Helmet>
        <title>Settings</title>
        <meta
          name="description"
          content="This is the home page of my website"
        />
      </Helmet>
      <h1>Welcome To Settings</h1>
    </div>
  );
};

export default Settings;
