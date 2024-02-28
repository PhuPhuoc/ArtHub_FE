import { Button, Carousel, Typography } from "antd";
import { TiTick } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { FaAmazon } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";
import { SiAdobe } from "react-icons/si";
import { SiOpensea } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoShieldHalfSharp } from "react-icons/io5";
import ReactPlayer from "react-player";
import pic1 from "../../assets/images/phamNhatVuong.jpg";
import "../../page/FindTalent/Findtalent.css";
import { useEffect, useState } from "react";


const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const FindTalent = () => {
  const [titleColor, setTitleColor] = useState(getRandomColor);



  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleColor(getRandomColor);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="findTalenPage">
      <div
        className="findTalentTitle"
        style={{
          height: "500px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography.Title
          style={{ color: titleColor, transition: "all 0.3s ease-in-out" }}
        >
          ArtHub Hiring
        </Typography.Title>
        <Typography.Title
          style={{
            fontSize: "70px",
            display: "flex",
            textAlign: "center",
            transform: "translateY(-30px)",
          }}
          className="custom-title"
        >
          Hire the world’s top designers
        </Typography.Title>
        <Typography.Text
          style={{
            fontSize: "20px",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            color: "gray",
          }}
        >
          Find the perfect match for your next project using Designer Search, '
          or let designers come to you through our Job <br /> Board. Arthub
          Hiring makes it easier than ever to source top-notch design talent.
        </Typography.Text>
      </div>
      <div
        className="firstSectionPage"
        style={{
          height: "70vh",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="leftFirstSection"
          style={{
            height: "400px",
            width: "48%",
            border: "1px solid black",
            borderRadius: "24px",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <Typography.Title
            style={{
              fontSize: "30px",
              width: "153px",
              borderBottom: "1px solid black",
              fontWeight: "900",
            }}
          >
            Job Board
          </Typography.Title>
          <p style={{ fontSize: "18px" }}>
            Let top creative talent come to you by posting your listing on #1
            design job board.
          </p>
          <Typography.Title style={{ fontSize: "25px", marginTop: "20px" }}>
            $5/day
          </Typography.Title>
          <p style={{ fontSize: "18px", marginTop: "10px" }}>billed monthly</p>
          <Typography.Text
            style={{ display: "flex", alignItems: "center", fontSize: "20px" }}
          >
            <TiTick style={{ marginRight: "8px", color: "green" }} />
            Average of 1.1k targeted clicks per month
          </Typography.Text>
          <Typography.Text
            style={{ display: "flex", alignItems: "center", fontSize: "20px" }}
          >
            <TiTick style={{ marginRight: "8px", color: "green" }} />
            Easily hire for full-time or freelance placements
          </Typography.Text>
          <Typography.Text
            style={{ display: "flex", alignItems: "center", fontSize: "20px" }}
          >
            <TiTick style={{ marginRight: "8px", color: "green" }} />
            Swap out listings as needed
          </Typography.Text>
          <Button
            style={{
              height: "50px",
              width: "50%",
              display: "block",
              margin: "20px auto",
              borderRadius: "24px",
            }}
          >
            Post A Job
          </Button>
          <Typography.Text
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            Cancel anytime. No strings attached.
          </Typography.Text>
        </div>
        <div
          className="support-rightFirstSection"
          style={{
            height: "30px",
            width: "150px",
            border: "3px solid purple",
            backgroundColor: "pink",
            textDecorationColor: "purple",
            borderRadius: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "translateX(350px) translateY(-20px)",
          }}
        >
          <Typography.Text
            style={{ fontSize: "15px", fontStyle: "italic", color: "purple" }}
          >
            Most Popular
          </Typography.Text>
        </div>
        <div
          className="rightFirstSection"
          style={{
            width: "48%",
            height: "400px",
            border: "5px solid pink",
            borderRadius: "24px",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <Typography.Title
            style={{
              fontSize: "25px",
              fontWeight: "900",
              borderBottom: "1px solid black",
              width: "300px",
            }}
          >
            Hiring Suite
          </Typography.Title>
          <p>
            Tap into our ready-to-hire community of top designers with our
            seamless hiring solution.
          </p>
          <Typography.Title style={{ fontSize: "25px" }}>
            $10/day
          </Typography.Title>
          <p>billed monthly</p>
          <Typography.Text style={{ display: "flex", alignItems: "center" }}>
            <ArrowLeftOutlined style={{ marginRight: "8px", color: "green" }} />
            Job Board included
          </Typography.Text>
          <Typography.Text style={{ display: "flex", alignItems: "center" }}>
            <TiTick style={{ marginRight: "8px", color: "green" }} />
            Search our entire database of available designers
          </Typography.Text>
          <Typography.Text style={{ display: "flex", alignItems: "center" }}>
            <TiTick style={{ marginRight: "8px", color: "green" }} />
            Filter by work, location, budget, and more
          </Typography.Text>
          <Typography.Text style={{ display: "flex", alignItems: "center" }}>
            <TiTick style={{ marginRight: "8px", color: "green" }} />
            Unlimited messages for designer outreach
          </Typography.Text>
          <Typography.Text style={{ display: "flex", alignItems: "center" }}>
            <TiTick style={{ marginRight: "8px", color: "green" }} />
            Save and bookmark designers for future needs
          </Typography.Text>
          <Button
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "center",
              width: "60%",
              alignItems: "center",
              transform: "translateX(110px)",
              borderRadius: "24px",
              backgroundColor:
                "var(--token-117cbcaa-8127-4416-9f92-fcbce9f99a50, rgb(13, 12, 34))",
              color: "white",
            }}
          >
            Get Start
          </Button>
          <Typography.Text
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            Cancel anytime. No strings attached.
          </Typography.Text>
        </div>
      </div>

      <div
        className="secondSectionPage"
        style={{ height: "300px", width: "100%" }}
      >
        <div className="supportText">
          <Typography.Text
            style={{ display: "flex", justifyContent: "center" }}
          >
            We’ve helped some of the world’s best design-forward companies hire
            expert creatives
          </Typography.Text>
        </div>

        <Carousel autoplay autoplaySpeed={600} style={{ marginTop: "80px" }}>
          <div>
            <Typography.Title
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FaFacebook
                style={{ marginRight: "20px", transform: "translateY(5px)" }}
              />
              FaceBook
            </Typography.Title>
          </div>
          <div>
            <Typography.Title
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FaAmazon
                style={{ marginRight: "20px", transform: "translateY(5px)" }}
              />
              Amazon
            </Typography.Title>
          </div>
          <div>
            <Typography.Title
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FaGoogle
                style={{ marginRight: "20px", transform: "translateY(5px)" }}
              />
              Google
            </Typography.Title>
          </div>
          <div>
            <Typography.Title
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FaMicrosoft
                style={{ marginRight: "20px", transform: "translateY(5px)" }}
              />
              Microsoft
            </Typography.Title>
          </div>
          <div>
            <Typography.Title
              style={{ display: "flex", justifyContent: "center" }}
            >
              <SiAdobe
                style={{ marginRight: "20px", transform: "translateY(5px)" }}
              />
              Adobe
            </Typography.Title>
          </div>
          <div>
            <Typography.Title
              style={{ display: "flex", justifyContent: "center" }}
            >
              <SiOpensea
                style={{ marginRight: "20px", transform: "translateY(5px)" }}
              />
              OpenSea
            </Typography.Title>
          </div>
          <div>
            <Typography.Title
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FaGithub
                style={{ marginRight: "20px", transform: "translateY(5px)" }}
              />
              GitHub
            </Typography.Title>
          </div>
        </Carousel>
      </div>
      <div
        className="thirdSection"
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="leftThirdSection"
          style={{
            height: "500px",
            width: "50%",
            border: "30px solid pink",
            borderRadius: "8px",
          }}
        >
          <ReactPlayer
            url="https://framerusercontent.com/assets/WozDzrtXLXFW9li2N4rKlsztsKk.mp4"
            width="100%"
            height="auto"
            loop={true}
            autoplay={true}
            playing={true}
          />
        </div>
        <div
          className="rightThirdSection"
          style={{ width: "45%", height: "400px" }}
        >
          <Typography.Title style={{ fontStyle: "italic", fontWeight: "700" }}>
            Hire faster & smarter with our designer search
          </Typography.Title>
          <Typography.Text style={{ fontSize: "25px" }}>
            Easily find quality freelancers and full-time creatives using our
            powerful search engine with filters for specialty, location,
            experience level, and more. Search for available talent in the
            largest professional creative community with just a few clicks.
          </Typography.Text>
          <Button
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "center",
              width: "60%",
              alignItems: "center",
              transform: "translateX(110px) translateY(40px)",
              borderRadius: "24px",
              backgroundColor:
                "var(--token-117cbcaa-8127-4416-9f92-fcbce9f99a50, rgb(13, 12, 34))",
              color: "white",
            }}
            onClick={() => {
              const sectionSevenPage = document.getElementById('sectionSevenPage');
              if (sectionSevenPage) {
                sectionSevenPage.scrollIntoView({ behavior: "smooth" });
              }
            }}>
            Start your search
          </Button>
        </div>
      </div>
      <div
        className="sectionFourPage"
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="leftFourSection"
          style={{ width: "45%", height: "400px" }}
        >
          <Typography.Title style={{ fontStyle: "italic", fontWeight: "700" }}>
            The #1 job board for top design talent
          </Typography.Title>
          <Typography.Text style={{ fontSize: "20px" }}>
            Our job board postings receive an average of 1.1k targeted clicks
            per month and are viewed by over 1 million top designers globally.
            With a proven track record assisting over 60,000 companies, you’ll
            spend less time sorting through unqualified candidates and more time
            hiring amazing talent.
          </Typography.Text>
          <Button
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "center",
              width: "60%",
              alignItems: "center",
              transform: "translateX(110px) translateY(40px)",
              borderRadius: "24px",
              backgroundColor:
                "var(--token-117cbcaa-8127-4416-9f92-fcbce9f99a50, rgb(13, 12, 34))",
              color: "white",
            }}
            
          >
            Post your job
          </Button>
        </div>
        <div
          className="rightFourtSection"
          style={{
            height: "500px",
            width: "50%",
            border: "30px solid pink",
            borderRadius: "8px",
          }}
        >
          <ReactPlayer
            url="https://framerusercontent.com/assets/anyiHSPP2um93testsvKwARCwiI.mp4"
            width="100%"
            height="auto"
            loop={true}
            autoplay={true}
            playing={true}
          />
        </div>
      </div>
      <div
        className="fifthSectionPage"
        style={{
          height: "80vh",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="leftFifthSection"
          style={{
            height: "340px",
            width: "55%",
            border: "1px solid black",
            borderRadius: "24px",
          }}
        >
          <Typography.Title
            style={{ fontStyle: "italic", fontWeight: "500", width: "80% " }}
          >
            “Arthub is my go-to for hiring designers. It always provides a
            wealth of quality candidates and instantly builds my pipeline.”
          </Typography.Title>
          <img
            src="https://i.pinimg.com/564x/37/0f/18/370f18262d02fb5950b43012d60b9989.jpg"
            style={{
              display: "block",
              width: "5em",
              height: "5em",
              borderRadius: "50%",
              transform: "translateX(50px) translateY(-10px)",
            }}
          />
          <Typography.Title
            style={{
              fontStyle: "italic",
              fontWeight: "800",
              width: "80% ",
              fontSize: "20px",
              transform: "translateX(150px) translateY(-60px)",
            }}
          >
            Pham Nhat Vuong - CEO of VinGroup
          </Typography.Title>
        </div>
        <div
          className="rightfifthsection"
          style={{ height: "350px", width: "43%" }}
        >
          <img
            src={pic1}
            style={{
              display: "block",
              width: "100%",
              height: "350px",
              borderRadius: "24px",
            }}
          />
        </div>
      </div>
      <div
        className="sectionSixPage"
        style={{ height: "750px", width: "100%" }}
      >
        <div className="supporttext">
          <Typography.Title
            style={{
              display: "flex",
              justifyContent: "center",
              height: "20vh",
            }}
          >
            Why brands choose Arthub to hire design talent
          </Typography.Title>
        </div>
        <div
          className="leftsectionsixpage"
          style={{ height: "270px", width: "50%" }}
        >
          <Typography.Text
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "flex-start",
              fontWeight: "800",
            }}
          >
            <IoDiamondOutline
              style={{ marginRight: "8px", fontSize: "50px" }}
            />
            <span
              style={{
                backgroundColor: "#B4F1D9",
                padding: "4px",
                borderRadius: "8px",
                marginTop: "20px",
              }}
            >
              WORLD-CLASS TALENT
            </span>
          </Typography.Text>
          <Typography.Text
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            From graphic design to UX/UI, our community is home to the world’s
            leading designers and creative agencies.
          </Typography.Text>
          <Typography.Text
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "flex-start",
              fontWeight: "800",
            }}
          >
            <RiMoneyDollarCircleLine
              style={{ marginRight: "8px", fontSize: "50px" }}
            />
            <span
              style={{
                backgroundColor: "#F9D5C5",
                padding: "4px",
                borderRadius: "8px",
                marginTop: "20px",
              }}
            >
              $0 PLACEMENT FEES
            </span>
          </Typography.Text>
          <Typography.Text
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            We make the hiring process as seamless and cost-effective as
            possible, so you can focus on building your business.
          </Typography.Text>
          <Typography.Text
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "flex-start",
              fontWeight: "800",
            }}
          >
            <IoShieldHalfSharp
              style={{ marginRight: "8px", fontSize: "50px" }}
            />
            <span
              style={{
                backgroundColor: "#C5F9EC",
                padding: "4px",
                borderRadius: "8px",
                marginTop: "20px",
              }}
            >
              GLOBAL REACH
            </span>
          </Typography.Text>
          <Typography.Text
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            We With a network of designers spanning over 170 countries, we make
            it easy to find world-class talent, wherever you are in the world.
          </Typography.Text>
        </div>
        <div
          className="rightsectionsixpage"
          style={{
            height: "290px",
            width: "35%",
            transform: "translateX(850px) translateY(-290px)",
          }}
        >
          <img
            src="https://framerusercontent.com/images/vZpPLA2vZuMSa2oDD3BTIgWq5tU.jpg?scale-down-to=1024"
            sizes="421px"
            loading="lazy"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              borderRadius: "24px",
              objectPosition: "center center",
              objectFit: "cover",
              imageRendering: "auto",
            }}
          />
        </div>
      </div>
      <div
        className="sectionSevenPage"
        style={{
          height: "750px",
          width: "100%",
          backgroundColor: "rgb(229, 252, 222)",
        }}
      >
        <div className="supporttext">
          <Typography.Title
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "90px",
              fontWeight: "800",
            }}
          >
            Find your next creative
            <br /> professional today!
          </Typography.Title>
        </div>
        <div
          className="sectionSevenPage"
          id="sectionSevenPage"
          style={{
            height: "70vh",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="leftSectionSeven"
            style={{
              height: "270px",
              width: "48%",
              border: "1px solid black",
              borderRadius: "24px",
              backgroundColor: "white",
              transform: "translateX(40px)",
              zIndex: "2",
            }}
          >
            <Typography.Title style={{ fontSize: "25px" }}>
              Job Board
            </Typography.Title>
            <p>
              Let top creative talent come to you by posting your listing on #1
              design job board.
            </p>
            <Typography.Title style={{ fontSize: "25px" }}>
              $5/day
            </Typography.Title>
            <p>billed monthly</p>
            <Typography.Text style={{ display: "flex", alignItems: "center" }}>
              <TiTick style={{ marginRight: "8px", color: "green" }} />
              Average of 1.1k targeted clicks per month
            </Typography.Text>
            <Typography.Text style={{ display: "flex", alignItems: "center" }}>
              <TiTick style={{ marginRight: "8px", color: "green" }} />
              Easily hire for full-time or freelance placements
            </Typography.Text>
            <Typography.Text style={{ display: "flex", alignItems: "center" }}>
              <TiTick style={{ marginRight: "8px", color: "green" }} />
              Swap out listings as needed
            </Typography.Text>
            <Button
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                width: "60%",
                alignItems: "center",
                transform: "translateX(110px)",
                borderRadius: "24px",
              }}
            >
              Post A Job
            </Button>
            <Typography.Text
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              Cancel anytime. No strings attached.
            </Typography.Text>
          </div>
          <div
            className="support-rightSectionSeven"
            style={{
              height: "30px",
              width: "150px",
              border: "2px solid purple",
              backgroundColor: "white",

              borderRadius: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "translateX(320px) translateY(-12px)",
              zIndex: "1",
            }}
          >
            <Typography.Text
              style={{
                fontSize: "15px",
                fontStyle: "italic",
                color: titleColor,
                transition: "all 0.3s ease-in-out",
              }}
            >
              Most Popular
            </Typography.Text>
          </div>
          <div
            className="rightSectionSeven"
            style={{
              width: "48%",
              height: "400px",
              border: "10px solid pink",
              borderRadius: "24px",
              backgroundColor: "white",
            }}
          >
            <Typography.Title
              style={{ fontSize: "25px", borderBottom: "1px solid black" }}
            >
              Hiring Suite
            </Typography.Title>
            <p>
              Tap into our ready-to-hire community of top designers with our
              seamless hiring solution.
            </p>
            <Typography.Title style={{ fontSize: "25px" }}>
              $10/day
            </Typography.Title>
            <p>billed monthly</p>
            <Typography.Text style={{ display: "flex", alignItems: "center" }}>
              <ArrowLeftOutlined
                style={{ marginRight: "8px", color: "green" }}
              />
              Job Board included
            </Typography.Text>
            <Typography.Text style={{ display: "flex", alignItems: "center" }}>
              <TiTick style={{ marginRight: "8px", color: "green" }} />
              Search our entire database of available designers
            </Typography.Text>
            <Typography.Text style={{ display: "flex", alignItems: "center" }}>
              <TiTick style={{ marginRight: "8px", color: "green" }} />
              Filter by work, location, budget, and more
            </Typography.Text>
            <Typography.Text style={{ display: "flex", alignItems: "center" }}>
              <TiTick style={{ marginRight: "8px", color: "green" }} />
              Unlimited messages for designer outreach
            </Typography.Text>
            <Typography.Text style={{ display: "flex", alignItems: "center" }}>
              <TiTick style={{ marginRight: "8px", color: "green" }} />
              Save and bookmark designers for future needs
            </Typography.Text>
            <Button
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                width: "60%",
                alignItems: "center",
                transform: "translateX(110px)",
                borderRadius: "24px",
                backgroundColor:
                  "var(--token-117cbcaa-8127-4416-9f92-fcbce9f99a50, rgb(13, 12, 34))",
                color: "white",
              }}
            >
              Get Start
            </Button>
            <Typography.Text
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              Cancel anytime. No strings attached.
            </Typography.Text>
          </div>
        </div>
      </div>
      <div className="sectionEightPage">
        <div className="logo-Slides">
          <img
            src="https://i.pinimg.com/564x/ea/dd/a3/eadda33f4baf6b79f3e41ee8a8d9327e.jpg"
            loading="lazy"
          />
          <img src="https://i.pinimg.com/564x/23/50/4e/23504ed890aa846557891b393ccdd65d.jpg" />
          <img src="https://i.pinimg.com/564x/b5/30/08/b53008f66bdaacf2fac8bd3c9e3ec364.jpg" />
          <img src="https://i.pinimg.com/564x/36/b6/7c/36b67ce844d8919d954d4f754b562e4e.jpg" />
          <img src="https://i.pinimg.com/564x/c8/b8/b0/c8b8b099505dc65f288dcf18090d4a64.jpg" />
          <img src="https://i.pinimg.com/564x/7f/83/fa/7f83fa427a0aac4de8a557c75bc753cc.jpg" />
          <img src="https://i.pinimg.com/564x/3d/85/21/3d85212f0b48a6203f7dd759f1964e07.jpg" />
          <img src="https://i.pinimg.com/564x/cd/32/12/cd3212a2c156350ba1fb74a533124198.jpg" />
          <img src="https://i.pinimg.com/564x/9a/f2/df/9af2df4f0cb2159c9f7d67d984f5d672.jpg" />
          <img src="https://i.pinimg.com/564x/39/04/0b/39040b29e84ed9e5c30559781aae4d9f.jpg" />
        </div>

        <div className="logo-Slides">
          <img
            src="https://i.pinimg.com/564x/ea/dd/a3/eadda33f4baf6b79f3e41ee8a8d9327e.jpg"
            loading="lazy"
          />
          <img src="https://i.pinimg.com/564x/23/50/4e/23504ed890aa846557891b393ccdd65d.jpg" />
          <img src="https://i.pinimg.com/564x/b5/30/08/b53008f66bdaacf2fac8bd3c9e3ec364.jpg" />
          <img src="https://i.pinimg.com/564x/36/b6/7c/36b67ce844d8919d954d4f754b562e4e.jpg" />
          <img src="https://i.pinimg.com/564x/c8/b8/b0/c8b8b099505dc65f288dcf18090d4a64.jpg" />
          <img src="https://i.pinimg.com/564x/7f/83/fa/7f83fa427a0aac4de8a557c75bc753cc.jpg" />
          <img src="https://i.pinimg.com/564x/3d/85/21/3d85212f0b48a6203f7dd759f1964e07.jpg" />
          <img src="https://i.pinimg.com/564x/cd/32/12/cd3212a2c156350ba1fb74a533124198.jpg" />
          <img src="https://i.pinimg.com/564x/9a/f2/df/9af2df4f0cb2159c9f7d67d984f5d672.jpg" />
          <img src="https://i.pinimg.com/564x/39/04/0b/39040b29e84ed9e5c30559781aae4d9f.jpg" />
        </div>
      </div>
    </div>
  );
};

export default FindTalent;
