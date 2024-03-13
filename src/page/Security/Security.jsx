import { Button, Typography ,Checkbox} from "antd";

const Security = () => {
    // const speakeasy = require('speakeasy')
    // const qrcode = require('qrcode')
    // var secret = speakeasy.generateSecret({
    //     name:"WeAreDev"
    // })
    
    // qrcode.toDataURL(secret.otpauth_url,function(err,data){
    //     console.log(data_url);
    //     write('<img src="'+data_url+url+'">')
    
    // })
  return (
    <div
      className="Security"
      style={{ display: "flex" }}
    >
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
            Security
          </Typography.Title>
          <Typography.Text style={{ fontSize: "20px" }}>
            Includes additional security steps like turning on two-factor
            authentication and checking your list of connected devices to keep
            your account, Pins, and boards safe.
          </Typography.Text>
        </div>
        <div className="second" style={{ width: "40%" }}>
          <Typography.Title style={{ fontSize: "25px" }}>
            Change Password
             </Typography.Title>
          <Button>change password</Button>
        </div>
        <div className="third" style={{ width: "40%"}}>
          <Typography.Title style={{ fontSize: "25px" }}>
            Two_Factor
             </Typography.Title>
         <Typography.Text style={{ fontSize: "20px" }}>This makes your account more secure. Along with your password, you'll need to enter the secret code we text to your phone each time you log in.</Typography.Text>
         <Checkbox style={{ display:"flex",flexDirection:"row",alignItems:"center",height:"100px",fontSize:"20px"}}>Send code when login </Checkbox>
        </div>
        <Button style={{width:"50%",height:"50px",fontSize:"20px",fontWeight:"700px"}}>Save</Button>
      </div>
    </div>
  );
};
export default Security;
