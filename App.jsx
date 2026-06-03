import './index.css';

export default function App() {
  const characters = [
    { name: 'Naruto Uzumaki', q: 'naruto,uzumaki' },
    { name: 'Sasuke Uchiha', q: 'naruto,sasuke' },
    { name: 'Sakura Haruno', q: 'naruto,sakura' },
    { name: 'Kakashi Hatake', q: 'naruto,kakashi' },
    { name: 'Itachi Uchiha', q: 'naruto,itachi' },
    { name: 'Hinata Hyuga', q: 'naruto,hinata' },
    { name: 'Gaara', q: 'naruto,gaara' },
    { name: 'Rock Lee', q: 'naruto,rock lee' },
    { name: 'Shikamaru', q: 'naruto,shikamaru' },
    { name: 'Jiraiya', q: 'naruto,jiraiya' }
  ];

  return (
    <div className="scene">
      <div className="panel">
        <header>
          <span className="subtitle">Konoha</span>
          <h1>Galeria de Ninjas de Konoha</h1>
          <p>Uma coleção de retratos dos ninjas mais famosos.</p>
        </header>

        <section className="cards">
          {characters.map((c) => (
            <article className="card" key={c.name}>
              <div className="character">
                <img
                  className="character-photo"
                  src={`https://source.unsplash.com/600x600/?${encodeURIComponent(c.q)}`}
                  alt={c.name}
                  onError={(event) => { event.currentTarget.src = '/icons/fallback.svg'; }}
                />
              </div>
              <div className="name">{c.name}</div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
