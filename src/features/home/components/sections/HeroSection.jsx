import perfilImg from '../../../../assets/img/Billy.png'

function HeroSection({ perfil }) {
  return (
    <section className="grid w-full min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center bg-zinc-900 px-6 py-16 lg:min-h-screen lg:p-12">
        <img
          src={perfilImg}
          alt={perfil.nombre}
          className="aspect-[3/4] w-full max-w-md rounded-2xl border border-zinc-700 object-cover shadow-lg shadow-black/40 lg:h-full lg:max-h-[80vh]"
        />
      </div>

      <div className="flex flex-col justify-center gap-6 bg-zinc-950 px-6 py-16 sm:px-12 lg:px-10 xl:px-12">
        <h1 className="font-science whitespace-pre-line break-words text-3xl font-black leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Desarrollador Junior Full Stack
        </h1>
        <p className="font-oswald text-2xl tracking-wide text-indigo-400 lg:text-3xl">{perfil.nombre}</p>
        <p className="text-lg italic text-zinc-400 md:text-xl">“{perfil.fraseDestacada}”</p>
        <p className="max-w-xl text-lg text-zinc-300">{perfil.heroDescripcion}</p>
      </div>
    </section>
  )
}

export default HeroSection
