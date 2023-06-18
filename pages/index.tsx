import CarouselComponent from '@/components/Carousel'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Head from 'next/head'

export default function Home() {
  return (
    <main >
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Kyotech" />
        <meta name="author" content="Arthur Bueno" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Kyotech Comércio e Manutenção de Equipamentos Médicos</title>
      </Head>
      <Menu />
      <div className='w-full bg-white min-h-screen p-6'>
        <CarouselComponent/>
        <div className='w-full max-[300px]:px-32 py-8 items-center min-[420px]:flex'>
          <div className="w-full flex flex-col p-12">
            <h1 className='font-bold mb-6 text-2xl max-[400px]:text-center max-[400px]:text-sm'>Nossa empresa</h1>
            <p className='text-xl max-[400px]:text-center max-[400px]:text-sm'>Instalada há 9 anos na região centro-oeste, na cidade de Campo Grande (MS), a Kyotech trabalha com a tecnologia à serviço da saúde, através do suporte técnico em vendas e assistência técnica autorizados pelos fabricantes, com técnicos treinados e certificados pela Fujifilm Japão. Conheça mais sobre nossa atuação em Mato Grosso e Mato Grosso do Sul:</p>
          </div>
          <div className="w-full flex items-center justify-center">
            <img src="/assets/kyoTeam.png" className='w-[560px] max-[400px]:w-[300px]'/>
          </div>          
        </div >
        <div >
          <div className="px-10 md:px-60 py-10 text-center h-[400px] sm:h-[360px]" style={{ background: 'url(//superbiz.site/storage/5cdb1980bd9f058dff8137e5/independentes/crop/854a0b45536728b5aedad06aa4623f961557946865897.png) no-repeat center center' }}>
            <div className="container center-align">
              <h2 className="text-white text-md sm:text-3xl">Manutenção em equipamentos Médicos</h2>
              <div className="mt-30"></div>
              <p className="text-white mt-10 mb-6 text-sm sm:text-xl">
                Trabalhamos com assistência técnica em aparelhos de endoscopia: videosgastroscopio, videocolonoscopio, duodenoscopios, enteroscopios, broncoscopios, assim como acessórios e aparelhos periféricos, equipamentos de limpeza e desinfecção entre outros..<br />
                Mão de obra especializada e treinada para desenvolver o melhor trabalho, maior qualidade e durabilidade do mercado da região.
              </p>
            </div>
            <a className="bg-red-500 text-white rounded-full h-16 px-6 py-2 mt-16" href="/about">SAIBA MAIS</a>
          </div>
        </div>
        <div className="fundo center-align">
        <div className="bg-green-200 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-12">
              <h2 className="text-gray-700 font-semibold text-3xl">Nossos Serviços</h2>
              <div className="mt-6"></div>
              <p className="text-gray-700 text-xl">Conheça os nossos serviços!</p>
              <div className="mt-12"></div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="imagem-redonda w-full" style={{ background: 'url("//superbiz.site/storage/5cdb1980bd9f058dff8137e5/independentes/crop/aa19bbf4cd85595b2c1072808066af311564778996798.png") center center / cover no-repeat', height: '361px' }}></div>
              <div className="mt-5"></div>
              <h3 className="text-gray-700 font-semibold text-xl">Manutenção</h3>
              <div className="mt-5"></div>
              <p className="text-gray-700 text-base">Assistência técnica à equipamentos de manutenção.</p>
              <div className="mt-6"></div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="imagem-redonda w-full" style={{ background: 'url("//superbiz.site/storage/5cdb1980bd9f058dff8137e5/independentes/crop/f4051d4ddbed2e5c5be02f03f313b6a51563991111116.jpeg") center center / cover no-repeat', height: '361px' }}></div>
              <div className="mt-5"></div>
              <h3 className="text-gray-700 font-semibold text-xl">Reparos emergenciais</h3>
              <div className="mt-5"></div>
              <p className="text-gray-700 text-base">Realizamos consertos e reparos simples, emergenciais no seu aparelho.</p>
              <div className="mt-6"></div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="imagem-redonda w-full" style={{ background: 'url("//superbiz.site/storage/5cdb1980bd9f058dff8137e5/independentes/crop/5d67f2cb5927e7190356b0c0b79d1f8a1563568758235.png") center center / cover no-repeat', height: '361px' }}></div>
              <div className="mt-5"></div>
              <h3 className="text-gray-700 font-semibold text-xl">Contratos de Manutenção Preventiva e Corretiva</h3>
              <div className="mt-5"></div>
              <p className="text-gray-700 text-base">Temos o plano ideal para atender a sua empresa e seus aparelhos.</p>
              <div className="mt-6"></div>
            </div>
            <div className="col-span-12">
              <div className="mt-6"></div>
              <a className="btn-large center-block center-align bg-red-500 text-white rounded-md h-10 px-6 text-base" href="http://kyotech.superbiz.site/servicos">SAIBA MAIS</a>
            </div>
          </div>
          </div>
        </div>
        <div className="mt-10" style={{ background: 'url("//superbiz.site/storage/5cdb1980bd9f058dff8137e5/clientes/6cefb57e660bf4ab06eb9960f7a9e1dd1557936881842.png") no-repeat bottom left', backgroundSize: 'cover' }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="col-span-12">
                <h2 className="text-white font-semibold text-3xl">Parceiros</h2>
                <div className="mt-6"></div>
                <p>Conheça as empresas que confiam no nosso serviço e atestam nossa qualidade.</p>
                <div className="mt-12"></div>
              </div>
              <a href="https://www.fujifilmamericas.com.br/index.html" target="_blank" className="col-span-6 lg:col-span-3 flex justify-center items-center">
                <img src="//superbiz.site/storage/5cdb1980bd9f058dff8137e5/registroclientes/crop/0035fb2acb6d182b5613072a5bd332dd1678804925643.png" alt="Logo Parceiro" />
                <div className="mt-6"></div>
              </a>
              <a href="http://www.labor-med.com.br/" target="_blank" className="col-span-6 lg:col-span-3 flex justify-center items-center">
                <img src="//superbiz.site/storage/5cdb1980bd9f058dff8137e5/registroclientes/crop/05dac15f1aaf2050a95cbe09558c19db1563906872026.png" alt="Logo Parceiro" />
                <div className="mt-6"></div>
              </a>
              <a href="http://dioxide.com.br/" target="_blank" className="col-span-6 lg:col-span-3 flex justify-center items-center">
                <img src="//superbiz.site/storage/5cdb1980bd9f058dff8137e5/registroclientes/crop/0dcf56b9677067cd575cac57518335971563906976830.png" alt="Logo Parceiro" />
                <div className="mt-6"></div>
              </a>
              <a href="http://www.atemoh.com.br/" target="_blank" className="col-span-6 lg:col-span-3 flex justify-center items-center">
                <img src="//superbiz.site/storage/5cdb1980bd9f058dff8137e5/registroclientes/crop/acf9f7150c1737fd6b7003d714f5184f1563972937544.png" alt="Logo Parceiro" />
                <div className="mt-6"></div>
              </a>
              <div className="col-span-12">
                <div className="mt-12"></div>
                <a className="btn-large center-block center-align" href="//www.kyotech.med.br/parceiros">SAIBA MAIS</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-red-200">
          <div className="container center-align">
            <h2 className="font-semibold text-3xl text-red-600">Venha nos fazer uma visita</h2>
            <div className="mt-5"></div>
            <p className="text-base text-gray-700">Rua Geraldo Agostinho Ramos, nº 103 - Jardim Paulista - Campo Grande - MS <br />
            CEP: 79050-080<br />
            Telefone: (67)3025-2637<br />
            Whatsapp: (67)99633-0267 / (67)99868-1123</p>
            <div className="mt-5"></div>
            <a href="#" className="btn-large bg-gray-700 text-white">Saiba mais</a>
            <div className="mt-8"></div>
          </div>
          <div className="pd-60-lateral">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.5330086496942!2d-54.613037884459544!3d-20.484365061077888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e6000ad5ec73%3A0x93e0b3572e7893!2sR.+Geraldo+Agostinho+Ramos%2C+103+-+Jardim+Paulista%2C+Campo+Grande+-+MS%2C+79050-080!5e0!3m2!1spt-BR!2sbr!4v1557866285639!5m2!1spt-BR!2sbr" width="100%" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
