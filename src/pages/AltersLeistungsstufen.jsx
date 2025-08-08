export default function AltersLeistungsstufen() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6 text-dark leading-relaxed">
      <h1 className="text-3xl font-bold text-primary">Alters- & Leistungsstufen</h1>

      <p>
        Säulen auf: altersgerechte Entwicklungsstufen und zielgerichtete Leistungswege. Sie geben Orientierung – und
        lassen gleichzeitig Raum für individuelle Wege.
      </p>

      <p>
        Unsere Struktur ist kein starres Raster, sondern ein flexibles Gerüst: Sie hilft Spieler:innen, sich in ihrer
        jeweiligen Phase zurechtzufinden, ihre nächsten Schritte zu erkennen – und ihr Potenzial zu entfalten.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Unsere Altersklassen – systematisch, aber menschlich gedacht:</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>F-Jugend
          <ul className="list-disc list-inside ml-5">
            <li>Bambinis (unter 6 Jahren)</li>
            <li>MiniMinis (6–7 Jahre)</li>
            <li>Minis (7–8 Jahre)</li>
          </ul>
        </li>
        <li>E-Jugend (9–10 Jahre)</li>
        <li>D-Jugend (11–12 Jahre)</li>
        <li>C-Jugend (13–14 Jahre)</li>
        <li>B-Jugend (15–16 Jahre)</li>
        <li>A-Jugend (17–18 Jahre)</li>
      </ul>

      <p>
        Jede Stufe bringt neue körperliche, geistige und soziale Herausforderungen mit sich. Unsere Inhalte, Methoden und
        Erwartungen passen wir daran an – ohne starre Übergänge, aber mit klarem Blick für Entwicklungsfenster.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Unsere Leistungsstufen – zwei Wege, ein Ziel: Entwicklung</h2>
      <table className="w-full table-auto border border-gray-300 mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Leistungsstufe</th>
            <th className="border px-4 py-2 text-left">Fokus & Haltung</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Breitensport</td>
            <td className="border px-4 py-2">
              Für alle, die Handball aus Spaß und Gemeinschaft erleben. Wir fördern Freude, Bewegung und soziales
              Lernen – ohne Leistungsdruck, aber mit Anspruch.
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Leistungssport</td>
            <td className="border px-4 py-2">
              Für motivierte Talente, die mehr wollen. Wir bieten gezielte Förderung, hohe Trainingsqualität und echte
              Herausforderungen – mit Fokus auf Entwicklung, nicht auf Selektion.
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        Beide Wege sind gleichwertig – weil Entwicklung nicht eindimensional ist. Unser Ziel: Möglichkeitsräume
        schaffen, in denen sich jede:r entfalten kann – mit Lust, Verantwortung und Perspektive.
      </p>

      <p className="font-semibold">Trainerimpuls:</p>
      <p>
        Beobachte genau – nicht nur, wie Spieler:innen spielen, sondern wie sie sich entwickeln. Alters- und
        Leistungsklassen sind Hilfen, keine Grenzen. Gute Trainer:innen erkennen Übergänge, fordern differenziert – und
        lassen Bewegungen zwischen den Stufen zu.
      </p>

      <p className="font-semibold">Elternblick:</p>
      <p>
        Jedes Kind wächst anders. Unser System sorgt dafür, dass niemand über- oder unterfordert wird – sondern Schritt
        für Schritt seinen Weg gehen kann. Wichtig ist nicht, wo Ihr Kind „steht" – sondern dass es sich entwickeln darf.
      </p>

      <p className="font-semibold">Für Spieler:innen – kurz erklärt:</p>
      <p>
        Es gibt viele Wege im Handball – und du darfst deinen finden. Ob du einfach mit Spaß spielst oder ganz nach oben
        willst: Wir begleiten dich. Wichtig ist nicht, wie gut du jetzt bist – sondern dass du Lust hast, besser zu
        werden.
      </p>
    </div>
  );
}
