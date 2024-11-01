import { Helmet } from "react-helmet";

import HeaderTemplate from "../../components/HeaderTemplate";
import Content from "./content";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        <meta
          name="description"
          content="This is the home page of my website"
        />
      </Helmet>
      <HeaderTemplate
        description="Admin Dashboard"
        title="Sistem Informasi Manajemen Karyawan"
      />
      <Content />
    </div>
  );
};

export default Dashboard;
