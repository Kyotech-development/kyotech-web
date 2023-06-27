import React from 'react';
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer(){
  return (
    <div className="flex flex-col text-center items-center m-auto justify-center bg-white flex-col">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col s12 l12 xl4">
              <p className="font-semibold text-sm text-gray-700">Kyotech 2023. Direitos reservados.</p>
            </div>
            <div className=" flex justify-center">
              <a role="button" className="my-2" href="https://www.facebook.com/Kyotech.oficial/" target="_blank">
                <BsFacebook/>
              </a>
              <a role="button" className="ml-6 my-2" href="https://www.instagram.com/kyotech.oficial/" target="_blank">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}