import { Button, Typography, Checkbox } from "antd";
const Notification = () => {
  return (
    <div className="Nofication" style={{ display: "flex" }}>
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
                <div
                  className="line"
                  style={{
                    borderRadius: "10px",
                    height: "3px",
                    backgroundColor: "black",
                    width: "30%",
                    bottom: "-9px",
                  }}
                ></div>
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
            Notification
          </Typography.Title>
          <Typography.Text style={{ fontSize: "20px" }}>
            We'll always announce important changes, but you can choose what
            else you want to know about.
          </Typography.Text>
        </div>
        <div className="second" style={{ width: "40%" }}>
          <Typography.Title style={{ fontWeight: "bolder", fontSize: "30px" }}>
            On ArtHub
          </Typography.Title>
          <Typography.Text style={{ fontSize: "15px" }}>
            Select notifications to receive directly on Pinterest.
          </Typography.Text>
          <Typography.Title style={{ fontSize: "20px" }}>
            Pins you saved
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Comment{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Mentions{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Saves{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Reviews with photos{" "}
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Activity from people you follow
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            See Pins from people you follow{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            New Pins from creators we think you'll like{" "}
          </Checkbox>
          <Typography.Title style={{ fontWeight: "bolder", fontSize: "30px" }}>
            By Email
          </Typography.Title>
          <Typography.Title style={{ fontSize: "20px" }}>
            Category
          </Typography.Title>
          <Typography.Text style={{ fontSize: "15px" }}>
            Control what email notifications you receive (except privacy and
            account emails)
          </Typography.Text>
          <Typography.Title style={{ fontSize: "20px" }}>
            Pins you published
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Update Pin activity results{" "}
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Pins you saved
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Hit save{" "}
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Tables, searches, and topics
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Table for you{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Theme for you{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Suggested searches{" "}
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Pin picks
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Pins inspired by your recent activity{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Pins picked for you{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Popular Pins{" "}
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Social
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Followers{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Group board updates
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Messages{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            People who share your interests{" "}
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Shopping
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Price drops on saved Pins
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Others
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Pinterest announcements and updates{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Feedback and surveys
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Reports and Violations Center updates{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Activity on Shuffles
          </Checkbox>
          <Typography.Title style={{ fontWeight: "bolder", fontSize: "30px" }}>
            By push notification
          </Typography.Title>
          <Typography.Title style={{ fontWeight: "bolder", fontSize: "30px" }}>
            Categories
          </Typography.Title>
          <Typography.Text style={{ fontSize: "15px" }}>
            Manage what you get push notifications about
          </Typography.Text>
          <Typography.Title style={{ fontSize: "20px" }}>
            Browser notifications
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Get notifications on your browsers
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Pins you published
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Comments{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Reactions
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Photos{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Saves
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Views and impressions
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Collages
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Pins you saved
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Comment{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Mentions{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Saves{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Reviews with photos{" "}
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Activity from creators
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            New Pins from people you follow{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            New Pins from creators we think you'll like
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Tables, searches, and topics
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Table for you{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Theme for you{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Suggested searches{" "}
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Pin picks
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Pins inspired by your recent activity{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Pins picked for you{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Popular Pins{" "}
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Social
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Followers{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Group board updates
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Messages{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            People who share your interests{" "}
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            ArtHub TV
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Live session reminders{" "}
          </Checkbox>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Live session recommendations{" "}
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Shopping
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Price drops on saved Pins
          </Checkbox>
          <Typography.Title style={{ fontSize: "20px" }}>
            Others
          </Typography.Title>
          <Checkbox
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Other updates
          </Checkbox>
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
export default Notification;
