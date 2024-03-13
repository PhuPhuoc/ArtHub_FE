import { Button, Typography, Checkbox } from "antd";
const Privacyanddata = () => {
  return (
    <div className="Privacyanddata" style={{ display: "flex" }}>
      <div
        className="accountSettingContainer"
        style={{ width: "20%", height: "500px" }}
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
            <a href="/notification">
              <div className="settingMenuItem">
                <Typography.Title style={{ fontSize: "25px" }}>
                  Nofication
                </Typography.Title>
              </div>
            </a>
          </div>
          <div className="privacyAndData">
            <a href="/privacyanddata">
              <div className="settingMenuItem">
                <Typography.Title style={{ fontSize: "25px" }}>
                  Privacy and Data
                </Typography.Title>
              </div>
              <div
                className="line"
                style={{
                  borderRadius: "10px",
                  height: "3px",
                  backgroundColor: "black",
                  width: "65%",
                  bottom: "-9px",
                }}
              ></div>
            </a>
          </div>
          <div className="editProfile">
            <a href="/profile">
              <div className="settingMenuItem">
                <Typography.Title style={{ fontSize: "25px" }}>
                  Edit Profile
                </Typography.Title>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="rightSection">
        <div className="first" style={{ width: "40%" }}>
          <Typography.Title style={{ fontWeight: "bolder", fontSize: "50px" }}>
            Privacy and data
          </Typography.Title>
          <Typography.Text style={{ fontSize: "20px" }}>
            Manage the data Pinterest shares with advertisers and uses to
            improve the ads and recommendations we show you.
          </Typography.Text>
          <Typography.Title style={{ fontWeight: "bolder", fontSize: "30px" }}>
            Ads personalization
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "100px",
              fontSize: "15px",
            }}
          >
            Use info from sites you visit: Allow Pinterest to use data from
            sites you visit to improve ads on Pinterest.
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "100px",
              fontSize: "15px",
            }}
          >
            Use of partner info: Allow Pinterest to use information from our
            partners to improve ads you see on Pinterest
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "100px",
              fontSize: "15px",
            }}
          >
            Ads about Pinterest: Allow Pinterest to use your activity to improve
            the ads about Pinterest you’re shown on other sites or apps.{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "100px",
              fontSize: "15px",
            }}
          >
            Activity for ads reporting: Allow Pinterest to share your activity
            for ads performance reporting.
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "100px",
              fontSize: "15px",
            }}
          >
            Sharing info with partners: Allow Pinterest to share your
            information and Pinterest activity with partners to improve the
            third-party ads you’re shown on Pinterest.
          </Checkbox>
        </div>
        <div
          className="second"
          style={{ display: "flex", justifyContent: "space-between",height:"200px" }}
        >
          <div className="secondLeft">
            <Typography.Title
              style={{ fontWeight: "bolder", fontSize: "30px" }}
            >
              Delete your data and account
            </Typography.Title>
            <Typography.Text style={{ fontSize: "15px" }}>
              Delete your data and account
            </Typography.Text>
          </div>
          <div className="secondRight" style={{transform:"translateX(-500px) translateY(50px)"}}>
            <Button style={{width:"250%",height:"60px",borderRadius:"30%",backgroundColor:"#d6ced7"}}>Delete</Button>
          </div>
        </div>
        <div
          className="third"
          style={{ display: "flex", justifyContent: "space-between",height:"200px" }}
        >
          <div className="thirdLeft" style={{width:"40%"}}>
            <Typography.Title
              style={{ fontWeight: "bolder", fontSize: "30px" }}
            >
             Request your data
            </Typography.Title>
            <Typography.Text style={{ fontSize: "15px" }}>
            You can request a copy of the info Pinterest collects about you. You'll receive an email from our third-party provider SendSafely to complete your request. 
            </Typography.Text>
          </div>
          <div className="thirdRight" style={{transform:"translateX(-450px) translateY(50px)"}}>
            <Button style={{width:"150%",height:"60px",borderRadius:"30%",backgroundColor:"#d6ced7"}}>Start Request</Button>
          </div>
        </div>
        <Button
          style={{
            width: "50%",
            height: "50px",
            fontSize: "20px",
            fontWeight: "700px",
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
export default Privacyanddata;
