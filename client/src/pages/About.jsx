import React from "react";
import { SocialIcon } from "react-social-icons";
export default function About() {
  return (
    <div className="flex bg-black grid-flow-dense">
      <div className="">
        <div className="bg-black">
          <div className="col-md-12 text-center">
            <br />
            <h2 className="section-title text-white text-9xl text-center" >
              ABOUT US
            </h2>
            <br />
            <p className="section-subtitle text-white text-center">
              Welcome to AETHERIAL, where innovation meets safety on the open
              road. We are more than just a helmet; we are a commitment to the
              well-being of riders. AETHERIAL is a cutting-edge helmet and
              technology product meticulously crafted to redefine the standards
              of rider safety.At AETHERIAL, our vision is clear. To provide an
              unparalleled level of safety for riders who navigate the bustling
              streets and winding roads. We understand the risks associated with
              riding, and we are on a mission to eliminate preventable accidents
              caused by negligence. Our goal is to make every journey on two
              wheels not just an exhilarating adventure but a safe and secure
              experience
            </p>
          </div>
          <br />
          <div className="flex gap-5 place-content-center">
            <div className="col-sm-6 col-md-4 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 size-[20rem] rounded-lg ">
              <div className="team-item ">
                <img src="/client/public/jonathan.jpg" className="team-img rounded-full" alt="picture" />
                <h3>Anirudha Udupa</h3>
                <div className="team-info">
                  <p>Team Lead</p>
                  <ul className="team-icon rounded-lg flex-1"></ul>
                </div>
              </div>
            </div>
            <br />
            <div className="col-sm-6 col-md-4 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 size-[20rem] rounded-lg ">
              <div className="team-item">
                <img src="../" className="team-img" alt="picture" />
                <h3>Anirudha Udupa</h3>
                <div className="team-info">
                  <p>Team Lead</p>
                  <ul className="team-icon"></ul>
                </div>
              </div>
            </div>
            <br />
            <div className="col-sm-6 col-md-4 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 size-[20rem] rounded-lg ">
              <div className="team-item">
                <img src="../" className="team-img" alt="picture" />
                <h3>Anirudha Udupa</h3>
                <div className="team-info">
                  <p>Team Lead</p>
                  <ul className="team-icon display: inline-flex flex-row"></ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 size-[20rem] rounded-lg ">
              <div className="team-item">
                <img src="../" className="team-img" alt="picture" />
                <h3>Anirudha Udupa</h3>
                <div className="team-info">
                  <p>Team Lead</p>
                  <ul className="team-icon display: inline-flex flex-row"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
