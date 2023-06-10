import CarouselComponent from '@/components/Carousel'
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
        <div className='w-full   max-[300px]:px-32 py-8 items-center min-[400px]:flex'>
          <div className="w-full flex flex-col p-12">
            <h1 className='font-bold mb-6 text-2xl max-[400px]:text-center max-[400px]:text-sm'>Nossa empresa</h1>
            <p className='text-xl max-[400px]:text-center max-[400px]:text-sm'>Instalada há 9 anos na região centro-oeste, na cidade de Campo Grande (MS), a Kyotech trabalha com a tecnologia à serviço da saúde, através do suporte técnico em vendas e assistência técnica autorizados pelos fabricantes, com técnicos treinados e certificados pela Fujifilm Japão. Conheça mais sobre nossa atuação em Mato Grosso e Mato Grosso do Sul:</p>
          </div>
          <div className="w-full flex items-center justify-center">
            <img src="/assets/kyoTeam.png" className='w-[560px]  max-[400px]:w-[300px]'/>
          </div>          
        </div>
      </div>
    </main>
  )
}
