const treatments = [
  {
    title: 'Implantes y rehabilitacion',
    description:
      'Planificacion digital para reponer piezas y recuperar funcion con tiempos claros y seguimiento estable.',
  },
  {
    title: 'Ortodoncia para adultos',
    description:
      'Alineadores y ortodoncia fija con control preciso de movimientos y una experiencia mucho mas ordenada.',
  },
  {
    title: 'Estetica dental medible',
    description:
      'Carillas, blanqueamiento y armonizacion de sonrisa con criterio clinico y resultados que no gritan.',
  },
  {
    title: 'Urgencias y dolor agudo',
    description:
      'Respuesta rapida para dolor, infeccion, fractura o ajuste de tratamiento cuando no conviene esperar.',
  },
];

const workflow = [
  {
    step: '01',
    title: 'Valoracion digital',
    description: 'Exploracion, imagen y lectura del caso para decidir con datos y no por intuicion.',
  },
  {
    step: '02',
    title: 'Plan por fases',
    description: 'Orden de prioridades, presupuesto util y calendario realista antes de empezar.',
  },
  {
    step: '03',
    title: 'Seguimiento visible',
    description: 'Revisiones y ajustes con el mismo equipo para que el proceso no pierda coherencia.',
  },
];

const metrics = [
  { value: 'Palacio', label: 'Ubicacion' },
  { value: '+20 anos', label: 'Experiencia acumulada' },
  { value: '3D', label: 'Diagnostico digital' },
  { value: '24 h', label: 'Respuesta inicial' },
];

const differentiators = [
  'Agenda puntual y sin saturacion de pacientes',
  'Explicaciones utiles antes de cada decision clinica',
  'Mismo equipo durante todo el tratamiento',
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#inicio">
          Clinica Dental Austrias
          <span>Palacio · Madrid centro</span>
        </a>

        <nav className="site-nav" aria-label="Principal">
          <a href="#tratamientos">Tratamientos</a>
          <a href="#metodo">Metodo</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="nav-cta" href="tel:+34910000000">
          910 000 000
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Odontologia de precision · Madrid centro</p>
            <h1>Tratamientos dentales de alta confianza para quienes no quieren improvisar con su salud.</h1>
            <p className="lead">
              En pleno barrio de Palacio, Clinica Dental Austrias combina diagnostico digital, tiempos bien
              ordenados y un trato muy humano para que cada visita se entienda antes de sentarte en el sillón.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contacto">
                Reservar primera valoracion
              </a>
              <a className="button button-secondary" href="#tratamientos">
                Ver especialidades
              </a>
            </div>

            <ul className="hero-tags" aria-label="Diferenciales principales">
              {differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-aside">
            <figure className="hero-photo">
              <img
                src="https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Gabinete dental contemporaneo con luz natural y equipo clinico preparado"
              />
            </figure>

            <aside className="hero-card">
              <p className="card-label">Primera visita bien resuelta</p>
              <h2>Diagnostico claro, prioridades bien ordenadas y presupuesto sin opacidad.</h2>
              <ul>
                <li>Exploracion y pruebas digitales en la misma cita.</li>
                <li>Plan por fases para decidir que hacer ahora y que puede esperar.</li>
                <li>Seguimiento de implantes, ortodoncia y estetica con el mismo equipo.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="metrics-band" aria-label="Indicadores de confianza">
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="tratamientos">
          <div className="section-intro">
            <p className="eyebrow">Tratamientos</p>
            <h2>Odontologia integral para resolver dolor, funcion y estetica sin perder criterio clinico.</h2>
            <p>
              Cada especialidad se trabaja con una misma idea: explicar bien el caso, ordenar el tratamiento y
              reducir friccion en cada visita.
            </p>
          </div>

          <div className="card-grid">
            {treatments.map((item) => (
              <article key={item.title} className="content-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-shell-dark" id="metodo">
          <div className="section-intro section-intro-dark">
            <p className="eyebrow">Metodo</p>
            <h2>Una experiencia dental pensada para bajar ansiedad y subir claridad.</h2>
            <p>
              Cuando el proceso esta bien diseado, el paciente entiende el por que de cada paso, anticipa mejor el
              esfuerzo y confia mucho antes en el resultado final.
            </p>
          </div>

          <div className="workflow-grid">
            {workflow.map((item) => (
              <article key={item.step} className="workflow-card">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell contact-shell" id="contacto">
          <div className="section-intro">
            <p className="eyebrow">Contacto</p>
            <h2>Pide una primera valoracion si quieres un plan dental que empiece con sentido y termine bien ejecutado.</h2>
            <p>
              Calle de los Austrias, Madrid. Atencion de lunes a viernes de 9:00 a 20:00 y sabados con cita previa.
            </p>
          </div>

          <div className="contact-card-panel">
            <div>
              <span>Telefono</span>
              <a href="tel:+34910000000">910 000 000</a>
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:hola@clinicadentalaustrias.es">hola@clinicadentalaustrias.es</a>
            </div>
            <div>
              <span>Horario</span>
              <p>Lun-Vie · 9:00 a 20:00</p>
            </div>
            <div>
              <span>Zona</span>
              <p>Palacio · Opera · Madrid centro</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Clinica Dental Austrias · Madrid centro · Odontologia de precision sin serif y sin deploy huérfano.</p>
        <p>Implantes, ortodoncia, estetica dental y urgencias con diagnostico digital.</p>
      </footer>
    </div>
  );
}
