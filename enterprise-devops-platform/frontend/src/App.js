function App() {

  return (

    <div className="min-h-screen bg-slate-900 text-white">

      <nav className="bg-black p-5 flex justify-between">

        <h1 className="text-3xl text-cyan-400 font-bold">

          Enterprise DevOps Platform

        </h1>

      </nav>

      <section className="text-center py-20">

        <h1 className="text-6xl font-bold mb-5">

          Real-Time DevOps Monitoring

        </h1>

        <p className="text-2xl text-gray-300">

          React • Docker • Jenkins • Kubernetes • AI

        </p>

      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">

        <div className="bg-slate-800 p-10 rounded-xl">

          <h2 className="text-cyan-400 text-2xl mb-4">

            Docker

          </h2>

          <p>Containers Running Successfully</p>

        </div>

        <div className="bg-slate-800 p-10 rounded-xl">

          <h2 className="text-cyan-400 text-2xl mb-4">

            Jenkins

          </h2>

          <p>CI/CD Pipeline Active</p>

        </div>

        <div className="bg-slate-800 p-10 rounded-xl">

          <h2 className="text-cyan-400 text-2xl mb-4">

            Kubernetes

          </h2>

          <p>Cluster Running Successfully</p>

        </div>

      </section>

    </div>
  );
}

export default App;