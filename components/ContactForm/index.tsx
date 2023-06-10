import React from 'react';

interface ContactFormProps {
  
}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
    return (
        <form className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Fale Conosco</h2>
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome:</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
    
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">E-mail:</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
    
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem:</label>
            <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
    
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Enviar
          </button>
    
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Endereço</h3>
            <p className="mb-2">Rua Geraldo Agostinho Ramos, 103 - Jardim Paulista, Campo Grande - MS, 79050-080</p>
            <h3 className="text-lg font-bold mb-2">Telefone</h3>
            <p className="mb-2">(67) 3025-2637 / Whatsapp: (67) 99868-5475</p>
            <h3 className="text-lg font-bold mb-2">E-mail</h3>
            <p>comercial@kyotech.med.br</p>
          </div>
        </form>
      );
}

export default ContactForm;