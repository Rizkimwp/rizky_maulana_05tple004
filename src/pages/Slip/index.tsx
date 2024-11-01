import { Helmet } from "react-helmet";

const Slip: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Slip Gaji</title>
        <meta
          name="description"
          content="This is the home page of my website"
        />
      </Helmet>

      <div className=".container-xxl">
        <h1>Welcome To Slip</h1>
      </div>
    </div>
  );
};

export default Slip;
