const Notification = () =>{
    return(
        <div className="Nofication">
                  <div
        className="accountSettingContainer"
        style={{ width: "25%", height: "500px" }}
      >
        <div className="settingMenu">
          <div className="security">
            <a href="/security">
              <div className="settingMenuItem">
                <Typography.Title style={{ fontSize: "25px" }}>
                  Security
                </Typography.Title>
              </div>
              
            </a>
          </div>
          <div className="nofication">
            <a href="/nofication">
              <div className="settingMenuItem">
                <Typography.Title style={{ fontSize: "25px" }}>
                  Nofication
                </Typography.Title>
                <div
                className="line"
                style={{
                  borderRadius: "10px",
                  height: "3px",
                  backgroundColor: "black",
                  width: "22%",
                  bottom: "-9px",
                }}
              ></div>
              </div>
            </a>
          </div>
          <div className="privacyAndData">
            <a href="/nofication">
              <div className="settingMenuItem">
                <Typography.Title style={{ fontSize: "25px" }}>
                  Privacy and Data
                </Typography.Title>
              </div>
            </a>
          </div>
          <div className="editProfile">
            <a href="/nofication">
              <div className="settingMenuItem">
                <Typography.Title style={{ fontSize: "25px" }}>
                  Edit Profile
                </Typography.Title>
              </div>
            </a>
          </div>
        </div>
      </div>
        </div>
    );
};
export default Notification;