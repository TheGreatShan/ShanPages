function Home() {
  document.title = "Home - Muras"
  return (
    <div className="bg-base-100">
      <header className="bg-base-100">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-6xl font-bold text-primary text-slate-100">Hello there,</h1>
          <p className="text-center text-3xl text-slate-100 text-secondary mt-5">I'm Shan,</p>
          <p className="text-center text-2xl text-slate-100 mt-5">a C# backend
            developer, who specializes on RESTful APIs, microservices and Microsoft Services.</p>
        </div>
      </header>

    </div>
  );
}

export default Home;
