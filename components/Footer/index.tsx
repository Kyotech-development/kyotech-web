import React from 'react';

export default function Footer(){
    return (
        <footer className="bg-gray-800 text-gray-400 py-10">
          <div className="container mx-auto flex justify-between items-center flex-wrap">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Kyotech</p>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Termos e Condições
                </a>
              </li>
            </ul>
          </div>
        </footer>
      );
}