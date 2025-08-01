// src/components/Translator.tsx
import { useState } from "react";

export const Translator = () => {
    const [phrase, setPhrase] = useState("");
    const [resultat, setResultat] = useState("");
    const [loading, setLoading] = useState(false);

    const traduire = async () => {
        if (!phrase.trim()) return;
        setLoading(true);
        try {
            const res = await fetch("http://localhost:3001", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phrase }),
            });
            const data = await res.json();
            setResultat(data.traduction.trim());
        } catch (err) {
            setResultat("Erreur lors de la traduction.");
        }
        setLoading(false);
    };

    return (
        <div className="space-y-6">
      <textarea
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="Écris une phrase à traduire..."
      />
            <button
                onClick={traduire}
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 disabled:bg-blue-300 transition"
            >
                {loading ? "Traduction en cours..." : "Traduire"}
            </button>
            {resultat && (
                <div className="bg-gray-100 border border-gray-300 p-4 rounded">
                    <h2 className="font-semibold mb-2">Résultat :</h2>
                    <p>{resultat}</p>
                </div>
            )}
        </div>
    );
};
