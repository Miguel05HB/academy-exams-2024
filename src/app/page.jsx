'use client';

import Image from 'next/image';
import imageStudent from '@/assets/images/student.webp';
import ModalAction from '@/components/Modal';
import { Fragment, useState } from 'react';

function HomePage() {
  const [showModal, setShowModal] = useState();
  return (
    <Fragment>
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-around lg:items-start mt-10">
        <div className="lg:ml-8 mb-4 lg:mb-0">
          <Image
            src={imageStudent}
            style={{ width: 320, height: 430 }}
            alt="Universitaria"
            priority={true}
          />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-7xl font-bold mb-4">
            Desarrolla <br />
            exámenes de <br />
            admisión
          </h1>
          <p className="text-2xl">
            Evaluamos tus respuestas mediante un software
            <br />
            programado en constante mejora continua.
          </p>
          <div className="flex gap-8 mt-10">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              onClick={() => setShowModal(true)}
            >
              Seleccione una <br />
              Universidad
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
              Seleccione un <br />
              Ciclo
            </button>
          </div>
        </div>
      </div>
      <ModalAction isVisible={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
  );
}

export default HomePage;
