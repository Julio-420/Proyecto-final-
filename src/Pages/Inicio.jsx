import arido from "../assets/arido.webp"
import casaagua from "../assets/casaagua.webp"
import grados from "../assets/1.5.png"
import port from "../assets/81port.png"
import emi from "../assets/0emi.png"
import gases from "../assets/gasesefec.webp"
import global from "../assets/global.webp"
import incendio from "../assets/incendio.webp"
import cartel from "../assets/cartel.webp"

const Inicio = () => {
    return (
        <>



            <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary   flex justify-center">
                <div class="col-lg-6 px-0">
                    <h1 className="display-4 fst-arial  justify-center">El cambio climático constituye la
                        mayor amenaza medioambiental a la que se enfrenta la humanidad.</h1>
                    <p class="lead my-3">El cambio climático no espera, pero nuestras acciones pueden moldear un futuro sostenible. Juntos, debemos ser la fuerza que transforma la amenaza en oportunidad, preservando nuestro hogar para las generaciones venideras</p>

                </div>
                <img src={global} alt="" width="30%" />
            </div>

            <div className="contaniner flex justify-center space-x-10 px-10">
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary-emphasis">Temperatura</strong>

                            <p class="card-text mb-auto text-m">La temperatura media mundial ha aumentado ya 1,11 ± 0,13 °C desde la época preindustrial.
                                Los siete años transcurridos desde 2015 son los más cálidos de los que se tienen datos. La década de 2011 a 2020 fue la más cálida jamás registrada.</p>

                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <img src={arido} alt="casa" height="50%" width="380px" />
                        </div>
                    </div>
                </div>


                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary-emphasis">Niveles del Mar</strong>

                            <p class="mb-auto text-m">El nivel medio del mar a escala mundial alcanzó un nuevo máximo en 2021, tras aumentar una media de 4,5 mm anuales durante el período 2013-2021. Esta cifra
                                es más del doble que la registrada entre 1993 y 2002.</p>

                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <img src={casaagua} alt="" width="435px" height="50%" />
                        </div>
                    </div>
                </div>
            </div>






            <main className="bg-gray-100 min-h-screen " >
                <div className=" flex justify space-x-72  py-15 ">
                    <img src={grados} alt="" />

                    <img src={emi} alt="" />
                    <img src={port} alt="" />

                </div>
                <div className="flex justify-center space-x-8 px-10 py-10 ">
                    <p className="text-m">Cerca de 200 países acordaron fijar en 1,5 ºC el umbral máximo de aumento de la temperatura del planeta.</p>
                    <p className="text-m">Debemos reducir a cero las emisiones netas de gases de efecto invernadero para 2040 en toda la UE si no queremos vivir los peores efectos del cambio climático.</p>
                    <p className="text-m">Según el Instituto Elcano, el 81% de la ciudadanía piensa que España no hace lo suficiente para luchar contra el cambio climático.</p>
                </div>

                <br />
                <br />
                <br />

                <div className=" flex-col text-xl px-20">
                    <p>El problema
                        El cambio climático es la modificación de la temperatura y del resto de variables del clima, que se está produciendo con una velocidad e intensidad sin precedentes en la historia de la humanidad, como consecuencia de la actividad humana.

                        Está ocurriendo en todo el mundo y sus consecuencias pueden ser devastadoras, tanto para el medio ambiente como para las personas. La actividad humana, en concreto y principalmente, la quema de combustibles fósiles que generan gases de efecto invernadero, es la causa detrás de esta grave amenaza medioambiental, la mayor a la que se enfrenta la humanidad.

                        Los impactos del cambio climático ya son perceptibles y quedan puestos en evidencia por datos
                        de la Organización Meteorológica Mundial (OMM) como:</p>

                    <br />



                </div>
                <div className=" text-xl  flex justify-center space-x-7 px-20">
                    <p>Las emisiones de gases de efecto invernadero a nivel global siguen aumentando cada año, alcanzando el máximo de 59 GT CO2 eq. en 2019 (IPCC, 2022).
                        En octubre de 2022, la concentración media mensual de CO2, medida por la Oficina Nacional de Administración Oceánica y Atmosférica (NOAA) de Estados Unidos en su observatorio de Mauna Loa, en Hawai, volvió a alcanzar un máximo histórico acumulado de 420,99 partes por millón (ppm), una cantidad de CO2 que no se registraba desde hace tres millones de años.
                        El contenido calorífico de los océanos ha alcanzado niveles sin precedentes. En algún momento de 2021, gran parte del océano se vio afectado por al menos una ola de calor marina «intensa».</p>

                    <img src={gases} alt="" width="435px" height="50%" />
                </div>
                <br />

                <div className="flex ">

                    <div className="pl-14 pr-28 text-xl">
                        <p> Pero hoy también estamos viendo cómo se manifiestan con mayor intensidad los impactos del cambio climático:</p>
                        <p>Los fenómenos meteorológicos extremos, como danas, tormentas y huracanes.</p>
                        <p> Olas de calor más intensas, duraderas y frecuentes que nunca antes.</p>
                        <p>Mega-incendios.
                            Las sequías.
                            Esos imactos provocan a su vez daños económicos y sociales, que serán cada </p>
                        <p>vez más graves, como daños en las cosechas y en la producción alimentaria o riesgos en la salud. </p>
                        <p> En los peores escenarios probables que los expertos reflejan, el aumento de temperatura </p>
                        <p> podría llegar a los 4,8 ºC para final de siglo. El cambio climático es un problema global que</p>
                        <p>alcanza una perspectiva ambiental, política, económica y social en la que las peores previsiones </p>
                        <p>también implican enormes pérdidas económicas. Y es que cuanto más tardemos en actuar, mucho más elevadas</p>
                        <p>serán las inversiones para la adaptación al aumento de la temperatura y puede llegarse a un límite en que la</p>
                        <p>adaptación ya no sea posible.</p>
                    </div  >

                    <div className="pr-20">
                        <img src={incendio} alt="" width="" />
                        <br />
                        <img src={cartel} alt="" />
                    </div>




                </div>
                <br />
                <hr />

            </main>






        </>
    )
}
export default Inicio