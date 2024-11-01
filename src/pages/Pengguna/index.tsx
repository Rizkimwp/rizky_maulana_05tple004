import { Helmet } from "react-helmet";

const Pengguna: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Pengguna</title>
        <meta
          name="description"
          content="This is the home page of my website"
        />
      </Helmet>

      <div className=".container-xxl">
        <h1>Welcome To Pengguna</h1>
      </div>
    </div>
  );
};

export default Pengguna;
