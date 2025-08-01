import { Translator } from "../components/Translator";

export default function FeTranslator() {
    return (
        <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full space-y-8 py-12">
                <h1 className="text-4xl font-bold text-center text-blue-600">
                    Traducteur Langue du Fe
                </h1>
                <Translator />
            </div>
        </main>
    );
}
