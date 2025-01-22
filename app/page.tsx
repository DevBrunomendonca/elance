import { ArrowRight } from "lucide-react";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import CardBodyMethod from "./_components/card-body-method";

export default function Home() {
  return (
    <>
      <SectionBanner />
      <SectionOurStructure />
      <SectionAboutUs />
      <SectionMethod />
      <SectionBodyMethodd />
      <SectionLocation />
    </>
  );
}

const SectionBanner = () => {
  return (
    <section
      id="home"
      className="bg-[url('/banner-home-m.webp')] bg-center bg-cover bg-no-repeat h-[700px] sm:bg-[url('/banner-home-d.webp')]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-5   px-4 py-10 h-full justify-end items-center md:items-start md:justify-center">
        <div className="max-w-[600px] space-y-1">
          <h1 className="font-semibold text-white text-4xl text-center md:text-start md:text-5xl">
            Transforme seu corpo e sua vida
          </h1>
          <p className="text-gray-200 text-center md:text-start">
            Emagreça em meses o quê você nunca conseguiu emagrecer em anos, e
            nunca mais reganhe o peso perdido.
          </p>
        </div>
        <a
          className="w-full max-w-[320px] mx-auto md:mx-0"
          href="https://wa.me/5511914850610?text=Gostaria%20de%20agendar%20minha%20consulta%20na%20Cl%C3%ADnica%20Elanc%C3%A9...%20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full  bg-white rounded-3xl px-8 py-6 text-green-900 ">
            Agende uma consulta <ArrowRight />{" "}
          </Button>
        </a>
      </div>
    </section>
  );
};

const SectionOurStructure = () => {
  return (
    <section className="py-8 space-y-3">
      <div className="flex px-4 flex-col items-center gap-5 md:px-0">
        <div className="">
          <p className="text-sm text-center text-black">Saiba mais</p>
          <h2 className="text-[#151314] text-2xl font-semibold text-center">
            Assista o vídeo até o final.
          </h2>
        </div>
        <div className="flex w-full items-center gap-4">
          <div className="w-full hidden rounded-r-md  h-[300px] bg-[#8A7A30] lg:block"></div>
          <iframe
            className="border-0 px-4 w-full  min-h-[300px] md:min-h-[600px] rounded-[30px] md:min-w-[800px] xl:min-w-[1200px]"
            title="YouTube video player"
            src="https://www.youtube.com/embed/wJrbQ-wid3k?si=hDX6dXbqu8HJhHHn"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="w-full hidden rounded-l-md  h-[300px] bg-[#8A7A30] lg:block"></div>
        </div>
        <a
          className="w-full md:max-w-[300px] md:mx-auto"
          href="https://wa.me/5511914850610?text=Gostaria%20de%20agendar%20minha%20consulta%20na%20Cl%C3%ADnica%20Elanc%C3%A9...%20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full bg-green-900 rounded-3xl px-8 py-6 text-white ">
            Agende uma consulta <ArrowRight />{" "}
          </Button>
        </a>
      </div>
    </section>
  );
};

const SectionAboutUs = () => {
  return (
    <section id="about" className="bg-white px-4 py-[80px]">
      <div className=" max-w-6xl mx-auto flex flex-col gap-5 items-center md:flex-row">
        <div className="space-y-4 w-full">
          <div>
            <h3 className="text-black text-base">Quem Somos</h3>
            <h2 className="text-green-900 font-semibold text-3xl">
              Dr. André Carvalho: Ciência, Saúde e Estética em Harmonia
            </h2>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-black">
              Meu nome é Dr. André Carvalho, e desde os primeiros passos na
              medicina, descobri uma paixão: transformar vidas por meio da
              saúde. Percebi que para alcançar uma vida saudável, funcional e
              cheia de vitalidade, é essencial investir na prevenção e em um
              estilo de vida equilibrado. Por isso, dediquei minha formação a
              oferecer os tratamentos mais modernos e eficazes em emagrecimento,
              ganho de massa muscular, reposição hormonal e longevidade, sempre
              com um olhar para a saúde e a estética como aliados inseparáveis.
            </p>
            <p className="text-sm text-black">
              Sou médico, com pós-graduação em Nutrologia Esportiva pela
              Faculdade BWS, Medicina do Exercício e do Esporte pela Academia
              Brasileira de Medicina Funcional Integrativa, e em Tricologia,
              áreas que me permitem tratar cada paciente de forma completa e
              personalizada.
            </p>
            <p className="text-sm text-black">
              Em apenas 3 anos de prática clínica, já atendi mais de 2.000
              pacientes que buscavam resultados rápidos, duradouros e
              sustentáveis. Nosso diferencial? Um atendimento exclusivo,
              acolhedor e verdadeiramente transformador, que coloca você no
              centro do processo.
            </p>
          </div>
        </div>
        <div className="w-full">
          <Image src="/banner-about.webp" alt="" width={596} height={586} />
        </div>
      </div>
    </section>
  );
};

const SectionMethod = () => {
  return (
    <section
      id="method"
      className="bg-[url('/banner-method.webp')] px-4 bg-cover bg-center bg-no-repeat min-h-[200px] py-[80px]"
    >
      <div className="flex max-w-6xl mx-auto flex-col gap-8 items-center md:flex-row">
        <div className="w-full space-y-3">
          <div>
            <h3 className="text-white text-base">O Método Pró-Corpo</h3>
            <h2 className="text-white font-semibold text-3xl">
              Pró-Corpo: A Ciência da Transformação Física
            </h2>
          </div>
          <Image
            src="/image-method.webp"
            alt="imagem método"
            width={639}
            height={229}
          />
        </div>
        <div className="space-y-3 w-full">
          <p className="text-sm text-white">
            O método pro-corpo é uma abordagem multidisciplinar focada na
            mudança do estilo de vida.
          </p>
          <p className="text-sm text-white">
            O paciente embarca nessa jornada e tem acompanhamento com médico,
            nutricionista e preparador físico.
          </p>
          <p className="text-sm text-white">
            Semanalmente o paciente vem até a clínica fazer o que há de mais
            moderno em tratamentos injetáveis de emagrecimento e ganho de massa
            muscular.
          </p>
          <p className="text-sm text-white">
            Além disso, monitoramos a evolução semanal através de exame de
            bioimpedância, dessa forma conseguimos entender de forma precisa
            como está ganho de massa magra e a perda de gordura, e caso haja
            necessidade fazemos ajustes estratégicos na semana para que o
            paciente não perca resultados e avance.
          </p>
        </div>
      </div>
    </section>
  );
};

const SectionBodyMethodd = () => {
  return (
    <section className="px-4 space-y-6 pt-8">
      <div className="max-w-5xl mx-auto">
        <div className="w-full flex flex-row items-center space-y-3 gap-2 md:gap-5">
          <div className="w-full">
            <h2 className="text-green-900 font-semibold text-3xl">
              O Método Pró-Corpo
            </h2>
            <p className="text-sm text-black">
              Nosso método foi criado para oferecer resultados rápidos,
              saudáveis e duradouros, combinando ciência, personalização e um
              acompanhamento próximo e eficiente.
            </p>
          </div>
          <div className="">
            <Image
              src="/circle-logo.png"
              alt="logo elance"
              width={230}
              height={230}
            />
          </div>
        </div>
      </div>
      <div className="bg-[url('/banner-body-method.webp')] bg-cover bg-center bg-no-repeat min-h-[900px]">
        <div className="bg-white flex flex-col gap-10 items-start rounded-md max-w-5xl mx-auto p-4 md:p-8">
          <CardBodyMethod
            numberMethod="01."
            title="Avaliação Integral"
            description="Começamos com uma análise completa da sua saúde, incluindo exames laboratoriais, bioimpedância e uma conversa detalhada para entender seu estilo de vida, objetivos e desafios.
"
          />
          <CardBodyMethod
            numberMethod="02."
            title="Plano Personalizado"
            description="Com base na avaliação, elaboramos um plano exclusivo que integra:
• Estratégias nutricionais sob medida, adaptadas ao seu metabolismo e objetivos, seja para perder gordura ou ganhar massa muscular.
• Reposição hormonal inteligente, quando necessário, para otimizar seu metabolismo, aumentar a disposição e equilibrar sua saúde."
          />
          <CardBodyMethod
            numberMethod="03."
            title="Monitoramento Semanal"
            description="Orientamos treinos eficazes que aceleram a queima de gordura, preservam sua massa muscular e maximizam os resultados de forma alinhada ao seu plano.
"
          />
          <CardBodyMethod
            numberMethod="04."
            title="Monitoramento Semanal"
            description="A cada semana, você passa por uma avaliação detalhada com a bioimpedância, que nos permite acompanhar de forma precisa sua composição corporal. Assim, conseguimos ajustar o plano constantemente, garantindo que você evolua mais rápido e sem perder tempo com estratégias que não funcionam."
          />
          <CardBodyMethod
            numberMethod="05."
            title="Monitoramento Semanal"
            description="Resultados Visíveis e Sustentáveis: Ao monitorar sua evolução semanalmente e ajustar as estratégias conforme necessário, asseguramos que seus resultados sejam rápidos, duradouros e saudáveis. O foco não é apenas emagrecer, mas transformar seu corpo e sua saúde de forma completa."
          />
        </div>
      </div>
      <div className="bg-green-900  pb-20">
        <div className="max-w-6xl flex items-end relative w-full">
          <Image
            src="/image-body-method.webp"
            alt="image do Dr. Andre Carvalho atendendo um paciente"
            width={1400}
            height={520}
            className="top-0 right-0"
          />
          <Image
            src="/circle-logo-two.png"
            alt="logo em em formato de circulo elancé"
            width={0}
            height={0}
            sizes="100vh"
            className="absolute w-full max-w-[80px] -bottom-10 right-10 lg:max-w-[200px] lg:right-0 xl:-right-10 lg:-bottom-20"
          />
        </div>
        <div className="max-w-6xl mx-auto space-y-1 px-4 py-10">
          <span className="text-white text-base">
            Muito Além do Emagrecimento
          </span>
          <p className="text-white text-sm max-w-[500px]">
            O Método Pró-Corpo é perfeito para quem busca não apenas
            emagrecimento, mas também longevidade, vitalidade e um corpo
            estético e saudável. É um método que respeita sua individualidade e
            maximiza seus resultados.
          </p>
        </div>
      </div>
    </section>
  );
};

const SectionLocation = () => {
  return (
    <section id="contact" className=" space-y-6 pt-[80px]">
      <div className="max-w-6xl px-4 flex flex-col justify-between gap-5 items-start mx-auto md:items-center md:flex-row">
        <h2 className="text-4xl max-w-[400px] w-full font-semibold text-green-900 md:text-6xl">
          Conheça a Elancé
        </h2>
        <div className="space-y-3 max-w-[600px] w-full">
          <p className="text-sm text-black">
            Aqui, você encontra um espaço pensado para transformar sua
            experiência de cuidado com o corpo e a saúde. Agende sua consulta e
            descubra como podemos ajudá-lo a conquistar o corpo que você deseja,
            de forma saudável, duradoura e com excelência.
          </p>
          <div className="flex w-full flex-col gap-2 items-start sm:items-center sm:flex-row">
            <a
              href="https://www.instagram.com/clinica.elance/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex py-1 px-2 underline text-green-900 gap-1 border-[1px] border-green-900 rounded-md"
            >
              <Image
                src="/icone-insta.svg"
                alt="icone instagram"
                width={20}
                height={20}
              />{" "}
              Instagram Elancé
            </a>
            <a
              href="https://www.instagram.com/andrecarvalhomedico/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex py-1 px-2 underline text-green-900 gap-1 border-[1px] border-green-900 rounded-md"
            >
              <Image
                src="/icone-insta.svg"
                alt="icone instagram"
                width={20}
                height={20}
              />{" "}
              Meu instagram
            </a>
            <div className="hidden h-[20px] w-[2px] bg-green-900 sm:block"></div>
            <a
              className="text-green-900 underline"
              href="tel:11914850610"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 91485-0610
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl px-4 flex flex-col justify-between gap-5 items-center mx-auto md:flex-row">
        <a
          className="w-full md:max-w-[300px] "
          href="https://wa.me/5511914850610?text=Gostaria%20de%20agendar%20minha%20consulta%20na%20Cl%C3%ADnica%20Elanc%C3%A9...%20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full bg-green-900 rounded-3xl px-8 py-6 text-white ">
            Agende uma consulta <ArrowRight />{" "}
          </Button>
        </a>
        <div className="space-y-3 max-w-[600px] w-full">
          <h3 className="text-green-900 text-xl font-semibold">Endereço</h3>
          <p className="text-sm text-black">
            Nossa clínica está localizada no coração de Pinheiros, em São Paulo,
            na Rua Pais Leme, 215, conjunto 315, Edifício Thera.
          </p>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9950628916067!2d-46.69846460000001!3d-23.568620799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce518a37ead3e5%3A0x2b77563e55eef66!2sDr.%20Andr%C3%A9%20Carvalho!5e0!3m2!1spt-BR!2sbr!4v1737509007321!5m2!1spt-BR!2sbr"
          className="w-full min-h-[400px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
