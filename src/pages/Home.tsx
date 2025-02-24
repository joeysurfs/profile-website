const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">Joe Serafin</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Software Engineer</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to my portfolio! I'm a passionate software engineer focused on building
          scalable and efficient web applications. With experience in modern web technologies
          and a strong foundation in software development principles, I strive to create
          impactful solutions.
        </p>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">Featured Projects</h3>
        {/* Add your featured projects here */}
      </section>
    </div>
  );
};

export default Home;
