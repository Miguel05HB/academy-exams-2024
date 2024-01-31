import React from 'react';

function ModalAction({ isVisible, onClose }) {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-start"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-[400px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white py-14 rounded text-center px-5">
          <h1 className="font-bold mb-8 text-xl">Modo Simulacro</h1>
          <p className="text-justify mb-5">
            Inicia un simulacro de la universidad que desees. Ten en cuenta que
            el tiempo de duración, cantidad y tipos de preguntas serán las que
            cada universidad establece.
          </p>
          <select className="p-3 outline-none mb-4">
            <option>Selecione Aqui</option>
            <option>Universidad etc</option>
          </select>
          <br />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"'>
            Iniciar Simulacro
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAction;
