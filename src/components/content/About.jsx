import usm from '../../assets/images/usm.png';
import utm from '../../assets/images/utm.png';
import usmf from '../../assets/images/usmf.png';
import asem from '../../assets/images/asem.png';


export function About() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Despre <span className="text-gray-700">Universitati</span></h1>
            <p className="mt-2 text-gray-700">
                Moldova se remarcă printr-un sistem educațional bine dezvoltat, cu instituții de învățământ recunoscute pentru calitatea pregătirii academice și profesionale. Universități precum Universitatea de Stat din Moldova (USM), Universitatea Tehnică a Moldovei (UTM) și Universitatea de Medicină și Farmacie „Nicolae Testemițanu” atrag studenți din diferite țări, datorită programelor de studiu adaptate standardelor internaționale.
            </p>

            <p className="mt-2 text-gray-700">
                În Moldova poți învăța aproape toate profesiile existente, de la medicină și inginerie, până la drept, economie sau arte. Programele de studiu sunt variate, diplomele sunt acreditate internațional, iar absolvenții cu rezultate bune au șanse mari să-și găsească un loc de muncă, atât în țară, cât și în străinătate.
            </p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">De ce e bine să înveți în Moldova?</h2>
                <ul className="list-decimal pl-6 mt-2 space-y-2">
                    <li>Costuri accesibile: Taxele de studii și costul vieții sunt considerabil mai mici decât în multe alte țări europene.</li>
                    <li>Calitate academică: Profesorii sunt bine pregătiți, iar programele de studii sunt actualizate conform cerințelor pieței muncii.</li>
                    <li>Posibilitatea de a studia în mai multe limbi: Studenții pot opta pentru programe în română, rusă, sau engleză, în funcție de instituție.</li>
                    <li>Recunoaștere internațională: Diplomele emise de universitățile moldovenești sunt recunoscute în multe țări.</li>
                    <li>Acces la burse și schimburi academice: Studenții pot participa la programe Erasmus și alte parteneriate internaționale.</li>
                </ul>
            </section>

            <div className="mt-6 flex">
                <img className="usm-utm-img m-r-lg" src={usm} alt="USM" />;
                <img className="usm-utm-img m-r-lg" src={utm} alt="UTM" />;
                <div className="flex flex-col">
                    <img className="usmf-asem-img" src={usmf} alt="USMF" />;
                    <img className="usmf-asem-img" src={asem} alt="ASEM" />;
                </div>
            </div>
        </div>
    );
}