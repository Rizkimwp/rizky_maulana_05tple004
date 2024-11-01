import {
  FaCalendarCheck,
  FaClock,
  FaPersonBooth,
  FaUserShield,
} from "react-icons/fa";
import Card from "../../components/Card";

const Content = () => {
  return (
    <div
      className="container-xxl position-absolute justify-content-center align-items-center"
      style={{
        top: "20%", // Position from the top
        left: "50%", // Center horizontally
        transform: "translateX(-50%)", // Center the container horizontally
      }}
    >
      <div className="row justify-content-center">
        <div className="col-12 col-md-3 mb-3">
          <Card
            bg_color="success"
            icon={<FaPersonBooth size={50} color="white" />}
            description="300"
            title="Data Pegawai"
          />
        </div>
        <div className="col-12 col-md-3 mb-3">
          <Card
            bg_color="danger"
            icon={<FaCalendarCheck size={50} color="white" />}
            description="300"
            title="Absensi"
          />
        </div>
        <div className="col-12 col-md-3 mb-3">
          <Card
            bg_color="primary"
            icon={<FaUserShield size={50} color="white" />}
            description="300"
            title="Perizinan"
          />
        </div>
        <div className="col-12 col-md-3 mb-3">
          <Card
            bg_color="warning"
            icon={<FaClock size={50} color="white" />}
            description="300"
            title="Lembur"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
