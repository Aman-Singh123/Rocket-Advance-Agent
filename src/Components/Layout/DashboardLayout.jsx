import React, { useState } from "react";
import Header from "../Header/Header.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import useCurrentWidth from "../../CustomHooks/useCurrentWidth/useCurrentWidth.jsx";
import Logo from "../../Asset/LogoMainColored.svg";
import LogoMob from "../../Asset/RLogoColored.svg";
import {
  ContactIcon,
  DashboardIcon,
  DashboardIconFill,
  DocumentsIcon,
  DocumentsIconFilled,
  EmailIcon,
  EmailIconFilled,
  InternetIcon,
  LogoutIcon,
  LogoutIconMobileScreen,
  MyDeals,
  NewDeals,
  NewDealsOutlined,
  NewDealsWhiteOutlined,
  ProfileIcon,
  UserIcon,
  UserIconUnfilled,
  rightArrow
} from "../../StoreImages/StoreImage.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";
import { isLogged } from "../../Api/makeRequest.js";
import { BellOutlined, MoreOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const width = useCurrentWidth();
  const location = useLocation();
  const pathname = location.pathname;
  const { Sider, Content } = Layout;
  const isMobile = width < 768;
  const isActive = (path) => pathname === path;
  const [showPopup, setShowPopup] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const iconColor = pathname === "/new-deals" ? "white" : "inherit";

  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardIcon />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "myDeals",
      icon: <MyDeals />,
      label: <Link to="/my-deals">My Deals</Link>,
    },
    {
      key: "newdeals",
      icon: <NewDeals />,
      label: <Link to="/new-deals">New Deals</Link>,
    },
    {
      key: "documents",
      icon: <DocumentsIcon />,
      label: <Link to="/documents">Documents</Link>,
    },
    {
      key: "blank1",
      label: "", // This leaves a blank space
    },
    {
      key: "logout",
      icon: <LogoutIcon />,
      label: (
        <div onClick={() => isLogged(navigate)} style={{ cursor: "pointer" }}>
          Logout
        </div>
      ),
    },
    {
      key: "blank2",
      label: <ContactUs />, // You can customize this component as needed
    },
  ];

  if (isMobile) {
    return (
      <div className="mobile-layout-wrapper">
        {showContact ? (
          // Fullscreen ContactUs view
          <>
            <div className="mobile-top-header">
              <div className="broker-box">
                <ArrowLeftOutlined onClick={() => setShowContact(false)} />
              </div>
              <div className="top-icons">
                <BellOutlined className="top-icon" />
                <div className="more-wrapper">
                  <MoreOutlined
                    className="top-icon-dot rotated"
                    onClick={() => setShowPopup((prev) => !prev)}
                  />
                  {showPopup && (
                    <>
                      <div className="overlay" onClick={() => setShowPopup(false)}></div>
                      <div className="popup">
                        <div
                          onClick={() => {
                            setShowContact(true);
                            setShowPopup(false);
                          }}
                          className="popup-box"
                        >
                          <ContactIcon className="popup-icon" />
                          <span>Contact Us</span>
                        </div>
                        <div className="popup-box" onClick={() => isLogged(navigate)}>
                          <LogoutIconMobileScreen className="popup-icon" />
                          <span>Logout</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="mobile-main-content" >

              <div className="ContactUSResponsive">
                <p style={{ fontWeight: 900 }}>Contact Us</p>
                <p style={{ marginTop: 12 }}>Schedule your Brokerage Lunch & Learns.</p>

                <div className="contact-details">
                  <div className="contact-row">
                    <div className="icon-col">
                      <EmailIconFilled />
                    </div>
                    <div className="text-col">
                      <p className="linkText">info@rocketadvance.ca</p>
                    </div>
                  </div>

                  <div className="contact-row">
                    <div className="icon-col">
                      <ContactIcon />
                    </div>
                    <div className="text-col">
                      <p>1-800-518-3577</p>
                    </div>
                  </div>

                  <div className="contact-row">
                    <div className="icon-col">
                      <InternetIcon />
                    </div>
                    <div className="text-col">
                      <a href="https://rocketadvance.ca" target="_blank" rel="noopener noreferrer">
                        rocketadvance.ca
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-bottom-nav height-mobile-bottom ">
              <div
                className=""
                onClick={() => {
                  navigate("/dashboard");
                  setShowContact(false);
                }}
              >
                {pathname === "/dashboard" ? <DashboardIconFill /> : <DashboardIcon />}
              </div>
              <div
                className=""
                onClick={() => {
                  navigate("/my-deals");
                  setShowContact(false);
                }}
              >
                {pathname === "/my-deals" ? <ProfileIcon /> : <UserIconUnfilled />}
              </div>
              <div
                className=""
                onClick={() => {
                  navigate("/new-deals");
                  setShowContact(false);
                }}

              >
                {pathname === "/new-deals" ? <NewDeals /> : <NewDealsOutlined />}
              </div>

              <div
                className=""
                onClick={() => {
                  navigate("/documents");
                  setShowContact(false);
                }}

              >
                {pathname === "/documents" ? <DocumentsIcon /> : <DocumentsIconFilled />}
              </div>

            </div>
          </>
        ) : (
          <>
            {/* Default Mobile Layout */}
            <div className="mobile-top-header"
                style={{
                  backgroundColor: pathname === "/new-deals" ? "red" : "transparent",
                }} >
            <div className="broker-box">
              {pathname === "/dashboard" ? <DashboardIconFill /> : pathname === "/my-deals" ? <ProfileIcon /> : pathname === "/new-deals" ? <NewDealsWhiteOutlined /> : <DocumentsIconFilled />}
                  <span className="broker-text"
                    style={{
                      color: pathname === "/new-deals" ? "white" : "inherit",
                    }}>
                {pathname === "/dashboard" ? "Agent" : pathname === "/my-deals" ? "My Deals" : pathname === "/new-deals" ? "New Deals" : "Documents"}
              </span>
            </div>
            <div className="top-icons">
              <BellOutlined className="top-icon" style={{ color : iconColor }} />
              <div className="more-wrapper">
                <MoreOutlined
                  className="top-icon-dot rotated"
                      onClick={() => setShowPopup((prev) => !prev)}
                      style={{ color: iconColor }}
                />
                {showPopup && (
                  <>
                    <div className="overlay" onClick={() => setShowPopup(false)}></div>
                    <div className="popup">
                      <div
                        onClick={() => {
                          setShowContact(true);
                          setShowPopup(false);
                        }}
                        className="popup-box"
                      >
                        <ContactIcon className="popup-icon" />
                        <span>Contact Us</span>
                      </div>
                      <div className="popup-box" onClick={() => isLogged(navigate)}>
                        <LogoutIconMobileScreen className="popup-icon" />
                        <span>Logout</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

        <div className="mobile-main-content" style={{
          paddingBottom: "100px",
          backgroundColor: pathname === "/new-deals" ? "red" : "transparent",
        }}>{children}</div>
        <div className={pathname === "/my-deals" || pathname === "/new-deals" ? "profile-height mobile-bottom-nav " : "mobile-bottom-nav"}

        >
          <div className=""
            onClick={() => navigate("/dashboard")}
          >
            {pathname === "/dashboard" ? <DashboardIconFill /> : <DashboardIcon />}
          </div>
          <div
            className=""
            onClick={() => navigate("/my-deals")}
          >
            {pathname === "/my-deals" ? <ProfileIcon /> : <UserIconUnfilled />}
          </div>
          <div
            className=""
            onClick={() => navigate("/new-deals")}
          >
            {pathname === "/new-deals" ? <NewDealsOutlined /> : <NewDeals />}
          </div>

          <div
            className=""
            onClick={() => navigate("/documents")}
          >
            {pathname === "/documents" ? <DocumentsIconFilled /> : <DocumentsIcon />}
          </div>
        </div>
      </>
    )
  }
      </div >
    );
  }



return (
  <div className="mainLayout">
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={null}
      >
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <Menu
          className={collapsed ? "collapsed" : ""}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[
            (pathname === "/dashboard" && "dashboard") ||
            (pathname === "/my-deals" && "myDeals") ||
            (pathname === "/new-deals" && "newdeals") ||
            (pathname === "/documents" && "documents") || (pathname === "/verify" && "dashboard"),
          ]}
          items={menuItems}
        />
      </Sider>

      <Layout className="site-layout">
        <Header />
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  </div>
);
};

export default DashboardLayout;
