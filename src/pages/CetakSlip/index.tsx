import { Helmet } from "react-helmet";

const CetakSlip: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Cetak Slip</title>
        <meta
          name="description"
          content="This is the home page of my website"
        />
      </Helmet>

      <div className=".container-xxl">
        <h1>Welcome To Cetak Slip</h1>
      </div>
    </div>
  );
};

export default CetakSlip;
