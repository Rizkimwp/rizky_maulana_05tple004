import Bar from "./bar";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaBuilding,
  FaCalendarCheck,
  FaUserShield,
  FaClock,
  FaMoneyBill,
  FaPrint,
  FaUserEdit,
} from "react-icons/fa";
import Avatar from "react-avatar";
import NavItem from "../../components/NavItem";

const Sidebar: React.FC<{
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}> = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <>
      {/* Overlay untuk layar kecil */}
      {sidebarOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-md-none"
          onClick={toggleSidebar}
          style={{ zIndex: 999 }}
        />
      )}

      {/* Sidebar */}
      <div
        className={` bg-white text-dark min-vh-100 position-${sidebarOpen ? "fixed" : "relative"} ${"p-1"}`}
        style={{
          width: sidebarOpen ? "250px" : "70px",
          transition: "width 0.3s",
          zIndex: 1000,
        }}
      >
        {/* Bar untuk toggle sidebar */}
        <Bar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        {/* Avatar dan nama user */}
        <div className="row align-items-center mt-3 p-2">
          <div className="col-3">
            <Avatar name="Foo Bar" size="40" round className="mb-2" />
          </div>
          {sidebarOpen && (
            <div className="col ps-">
              <p className="mb-0">Welcome, Rizky</p>
              <p className="mb-0 fw-bold">Administrator</p>
            </div>
          )}
        </div>

        <hr className="my-3" />

        {/* Menu Sidebar */}
        <ul className="nav flex-column">
          <NavItem
            to="/dashboard"
            icon={FaHome}
            label="Dashboard"
            sidebarOpen={sidebarOpen}
          />
          <li className="nav-item">
            <h6
              className={`text-muted ${sidebarOpen ? "ms-2 mt-3" : "d-none"}`}
            >
              Menu Karyawan
            </h6>
          </li>
          <NavItem
            to="/karyawan"
            icon={FaUser}
            label="Karyawan"
            sidebarOpen={sidebarOpen}
          />
          <NavItem
            to="/jabatan"
            icon={FaBriefcase}
            label="Jabatan"
            sidebarOpen={sidebarOpen}
          />
          <NavItem
            to="/divisi"
            icon={FaBuilding}
            label="Divisi"
            sidebarOpen={sidebarOpen}
          />
          <li className="nav-item">
            <h6
              className={`text-muted ${sidebarOpen ? "ms-2 mt-3" : "d-none"}`}
            >
              Menu Absensi
            </h6>
          </li>
          <NavItem
            to="/absensi"
            icon={FaCalendarCheck}
            label="Absensi"
            sidebarOpen={sidebarOpen}
          />
          <NavItem
            to="/izin"
            icon={FaUserShield}
            label="Izin"
            sidebarOpen={sidebarOpen}
          />
          <NavItem
            to="/lembur"
            icon={FaClock}
            label="Lembur"
            sidebarOpen={sidebarOpen}
          />
          <li className="nav-item">
            <h6
              className={`text-muted ${sidebarOpen ? "ms-2 mt-3" : "d-none"}`}
            >
              Menu Penggajian
            </h6>
          </li>
          <NavItem
            to="/slip-gaji"
            icon={FaMoneyBill}
            label="Slip Gaji"
            sidebarOpen={sidebarOpen}
          />
          <NavItem
            to="/cetak-slip"
            icon={FaPrint}
            label="Cetak Slip Gaji"
            sidebarOpen={sidebarOpen}
          />
          <li className="nav-item">
            <h6
              className={`text-muted ${sidebarOpen ? "ms-2 mt-3" : "d-none"}`}
            >
              Menu Laporan
            </h6>
          </li>
          <NavItem
            to="/cetak-laporan"
            icon={FaPrint}
            label="Cetak Laporan"
            sidebarOpen={sidebarOpen}
          />

          <li className="nav-item">
            <h6
              className={`text-muted ${sidebarOpen ? "ms-2 mt-3" : "d-none"}`}
            >
              Menu Admin
            </h6>
          </li>
          <NavItem
            to="/pengguna"
            icon={FaUserEdit}
            label="Pengguna"
            sidebarOpen={sidebarOpen}
          />
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
