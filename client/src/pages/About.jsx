import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Global } from "@emotion/react";

export default function About() {
  return (
    <div className="h-dvh bg-black bg-cover">
      <div className="col-md-15 text-center">
        <br />
        <h2 className="font-bold text-white text-8xl  text-s letter-spacing tracking-wide">
          ABOUT US
        </h2>
        <br />
        <p className="text-white font-medium text-center m-12 text-2xl px-14">
          Welcome to AETHERIAL, where innovation meets safety on the open road.
          We are more than just a helmet; we are a commitment to the well-being
          of riders. AETHERIAL is a cutting-edge helmet and technology product
          meticulously crafted to redefine the standards of rider safety.At
          AETHERIAL, our vision is clear. To provide an unparalleled level of
          safety for riders who navigate the bustling streets and winding roads.
          We understand the risks associated with riding, and we are on a
          mission to eliminate preventable accidents caused by negligence. Our
          goal is to make every journey on two wheels not just an exhilarating
          adventure but a safe and secure experience
        </p>
      </div>
      <br />
      <div className="flex gap-4 place-content-center ">
        <div className="col-sm-6 col-md-4 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 w-80 h-auto rounded-lg p-8 gap-4">
          <div className="team-item ">
            <img
              src="/Anirudh-min.jpeg"
              className="team-img rounded-full h-64 w-64"
              alt="picture"
            />
            <br />
            <h3 className="text-center text-2xl text-black-400 m-3">
              Anirudha Udupa
            </h3>
            <div className="team-info">
              <p className="text-center text-1xl text-black-400 ">Team Lead</p>
              <ul className="team-icon rounded-lg flex-1">
                <li>
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 w-80 h-auto rounded-lg p-8 gap-4">
          <div className="team-item">
            <img
              src="/logo.jpg"
              className="team-img rounded-full h-64 w-64"
              alt="picture"
            />
            <br />
            <h3 className="text-center text-2xl text-black-400 m-3">
              Krishna H Pallan
            </h3>
            <div className="team-info">
              <p className="text-center text-1xl text-black-400 ">
                Web Developer
              </p>
              <ul className="team-icon"></ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 w-auto h-auto rounded-lg p-8 gap-4">
          <div className="team-item">
            <img
              src="/navneet-min.jpeg"
              className="team-img rounded-full h-64 w-64"
              alt="picture"
            />
            <br />
            <h3 className="text-center text-2xl text-black-400 m-3">
              Navaneeth Arya
            </h3>
            <div className="team-info">
              <p className="text-center text-1xl text-black-400 ">
                Hardware Analyst
              </p>
              <ul className="team-icon display: inline-flex flex-row"></ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 w-80 h-auto rounded-lg p-8 gap-4">
          <div className="team-item">
            <img
              src="/jonathan.jpg"
              className="team-img rounded-full h-64 w-64"
              alt="picture"
            />
            <br />
            <h3 className="text-center text-2xl text-black-400 m-3">
              Anirudha Udupa
            </h3>
            <div className="team-info">
              <p className="text-center text-1xl text-black-400 ">Team Lead</p>
              <ul className="team-icon display: inline-flex flex-row"></ul>
            </div>
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
