export default function StudentPage() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Pentru <span className="text-gray-700">Studenti</span></h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Pentru studenții moldoveni:</h2>
                <ul className="list-decimal pl-6 mt-2 space-y-2">
                    <li>Buletin de identitate (original și copie);</li>
                    <li>Diploma de bacalaureat sau certificatul echivalent (original și copie);</li>
                    <li>Foaia matricolă de la liceu (original și copie);</li>
                    <li>Certificat medical (forma 086-U);</li>
                    <li>Fotografii tip pașaport (de obicei 4-6 bucăți);</li>
                    <li>Cerere de înscriere (completată la secretariatul universității);</li>
                    <li>Alte documente solicitate specific de universitate (de ex. certificate de competențe lingvistice, dacă programul este într-o limbă străină).</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Pentru studenții străini:</h2>
                <ul className="list-decimal pl-6 mt-2 space-y-2">
                    <li>Pașaport (copie și original, cu valabilitate de minimum 6 luni);</li>
                    <li>Diploma de absolvire a învățământului secundar (legalizată/apostilată, tradusă în română sau engleză);</li>
                    <li>Foaia matricolă (legalizată/apostilată și tradusă);</li>
                    <li>Certificat medical (eliberat cu cel mult 3 luni înainte de înscriere, tradus și legalizat);</li>
                    <li>Certificat de competență lingvistică (dacă programul este într-o limbă străină);</li>
                    <li>Scrisoare de acceptare emisă de Ministerul Educației din Moldova (cerută prin intermediul universității);</li>
                    <li>Fotografii tip pașaport (de obicei 4-6 bucăți);</li>
                    <li>Asigurare medicală internațională.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Educația în Moldova – Deschisă pentru Toți</h2>
                <p className="mt-2 text-gray-700">
                    În universitățile din Moldova, toți sunt bineveniți, indiferent de naționalitate, religie, cultură sau experiențe personale. Ne mândrim cu un mediu academic incluziv, unde diversitatea este apreciată, iar fiecare student are șansa de a-și urma visurile.
                </p>
                <p className="mt-2 text-gray-700">
                    Ușile noastre sunt deschise pentru cei care doresc să învețe, să crească și să devină profesioniști de succes. Indiferent de unde vii, vei găsi sprijin, respect și oportunități egale pentru a-ți construi viitorul alături de noi.
                </p>
                <p className="mt-4 font-bold text-lg">Alege să studiezi în Moldova – un loc unde fiecare este așteptat și valorizat!</p>
            </section>
        </div>
    );
}
