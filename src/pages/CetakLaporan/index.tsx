import { Helmet } from "react-helmet";

const CetakLaporan: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Cetak Laporan</title>
        <meta
          name="description"
          content="This is the home page of my website"
        />
      </Helmet>

      <div className=".container-xxl">
        <h1>Welcome To Cetak Laporan</h1>
      </div>
    </div>
  );
};

export default CetakLaporan;
