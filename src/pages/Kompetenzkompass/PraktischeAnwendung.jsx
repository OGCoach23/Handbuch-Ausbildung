import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { Radar } from "react-chartjs-2";
import 'chart.js/auto';

export default function PraktischeAnwendung() {
  const data = {
    labels: ["M1", "M2", "M3", "M4", "M5", "M6"],
    datasets: [
      {
        label: "Aktueller Stand",
        data: [2, 3, 2, 1, 1, 2],
        backgroundColor: "rgba(0, 75, 135, 0.2)",
        borderColor: "#004b87",
        pointBackgroundColor: "#004b87",
      },
    ],
  };

  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-r from-[#004b87] to-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-white text-2xl">🎯 Praktische Anwendung</CardTitle>
        </CardHeader>
        <CardContent className="text-white">
          Modulbasierte Zielkarten und individuelle Entwicklungspläne für Spieler:innen.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Beispiel einer Zielkarte: Max Mustermann</CardTitle>
        </CardHeader>
        <CardContent>
          <Radar data={data} />
        </CardContent>
      </Card>

      <div className="bg-blue-50 p-4 rounded-lg shadow-md flex items-start gap-3">
        <Info className="text-[#004b87] w-6 h-6 mt-1" />
        <div>
          <h3 className="font-semibold text-[#004b87]">💡 Trainingshinweise</h3>
          <p>Fokussiere jede Woche auf 2–3 Module und dokumentiere die Fortschritte regelmäßig.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["Selbsteinschätzung durchführen", "Trainerfeedback einholen", "Ziele für die nächste Phase setzen"].map((step, i) => (
          <Card key={i} className="border-t-4 border-[#004b87]">
            <CardHeader>
              <CardTitle className="text-lg">Schritt {i + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{step}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-4">
        <Button className="bg-[#004b87] hover:bg-[#003b6a] text-white">Zielkarte erstellen</Button>
        <Button variant="outline" className="border-[#004b87] text-[#004b87] hover:bg-blue-50">Trainingsplan anpassen</Button>
      </div>
    </div>
  );
}


