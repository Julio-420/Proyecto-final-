
import osito from "../assets/ositospol.webp"
import hojita from "../assets/hohe.png"
import pingu from "../assets/pingu.jpg"

const CrearEmpresa = () => {
  return (
    <>



      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={osito} alt="" width="100%" />
          </div>
          <div class="carousel-item">
            <img src={hojita} alt="" width="100%" />
          </div>
          <div class="carousel-item">
            <img src={pingu} alt="" width="1900px" height="1069px" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <br />
      <br />

      <div className="p-5 mb-4 bg-body-tertiary rounded-3 pt-20">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Soluciones</h1>
          <p className="col-md-8 fs-4">El sector energético, debido a su uso de energías sucias petróleo, carbón y gas, es uno de los mayores contribuidores al calentamiento global. Unas 90 empresas son
            responsables de casi las dos terceras partes de las emisiones mundiales.</p>

        </div>
      </div>

      <div className="flex justify-between pl-64 pr-64 pt-20">
        <svg className="" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-tornado" viewBox="0 0 16 16">
          <path d="M1.125 2.45A.892.892 0 0 1 1 2c0-.26.116-.474.258-.634a1.9 1.9 0 0 1 .513-.389c.387-.21.913-.385 1.52-.525C4.514.17 6.18 0 8 0c1.821 0 3.486.17 4.709.452.607.14 1.133.314 1.52.525.193.106.374.233.513.389.141.16.258.374.258.634 0 1.011-.35 1.612-.634 2.102-.04.07-.08.137-.116.203a2.55 2.55 0 0 0-.313.809 2.938 2.938 0 0 0-.011.891.5.5 0 0 1 .428.849c-.06.06-.133.126-.215.195.204 1.116.088 1.99-.3 2.711-.453.84-1.231 1.383-2.02 1.856-.204.123-.412.243-.62.364-1.444.832-2.928 1.689-3.735 3.706a.5.5 0 0 1-.748.226l-.001-.001-.002-.001-.004-.003-.01-.008a2.142 2.142 0 0 1-.147-.115 4.095 4.095 0 0 1-1.179-1.656 3.786 3.786 0 0 1-.247-1.296A.498.498 0 0 1 5 12.5v-.018a.62.62 0 0 1 .008-.079.728.728 0 0 1 .188-.386c.09-.489.272-1.014.573-1.574a.5.5 0 0 1 .073-.918 3.29 3.29 0 0 1 .617-.144l.15-.193c.285-.356.404-.639.437-.861a.948.948 0 0 0-.122-.619c-.249-.455-.815-.903-1.613-1.43-.193-.127-.398-.258-.609-.394l-.119-.076a12.307 12.307 0 0 1-1.241-.334.5.5 0 0 1-.285-.707l-.23-.18C2.117 4.01 1.463 3.32 1.125 2.45m1.973 1.051c.113.104.233.207.358.308.472.381.99.722 1.515 1.06 1.54.317 3.632.5 5.43.14a.5.5 0 0 1 .197.981c-1.216.244-2.537.26-3.759.157.399.326.744.682.963 1.081.203.373.302.79.233 1.247-.05.33-.182.657-.39.985.075.017.148.035.22.053l.006.002c.481.12.863.213 1.47.01a.5.5 0 1 1 .317.95c-.888.295-1.505.141-2.023.012l-.006-.002a3.894 3.894 0 0 0-.644-.123c-.37.55-.598 1.05-.726 1.497.142.045.296.11.465.194a.5.5 0 1 1-.448.894 3.11 3.11 0 0 0-.148-.07c.012.345.084.643.18.895.14.369.342.666.528.886.992-1.903 2.583-2.814 3.885-3.56.203-.116.399-.228.584-.34.775-.464 1.34-.89 1.653-1.472.212-.393.33-.9.26-1.617A6.74 6.74 0 0 1 10 8.5a.5.5 0 0 1 0-1 5.76 5.76 0 0 0 3.017-.872.515.515 0 0 1-.007-.03c-.135-.673-.14-1.207-.056-1.665.084-.46.253-.81.421-1.113l.131-.23c.065-.112.126-.22.182-.327-.29.107-.62.202-.98.285C11.487 3.83 9.822 4 8 4c-1.821 0-3.486-.17-4.709-.452-.065-.015-.13-.03-.193-.047zM13.964 2a1.12 1.12 0 0 0-.214-.145c-.272-.148-.697-.297-1.266-.428C11.354 1.166 9.769 1 8 1c-1.769 0-3.354.166-4.484.427-.569.13-.994.28-1.266.428A1.12 1.12 0 0 0 2.036 2c.04.038.109.087.214.145.272.148.697.297 1.266.428C4.646 2.834 6.231 3 8 3c1.769 0 3.354-.166 4.484-.427.569-.13.994-.28 1.266-.428A1.12 1.12 0 0 0 13.964 2z" />
        </svg>


        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
          <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415" />
          <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-tsunami" viewBox="0 0 16 16">
          <path d="M.036 12.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zm0 2a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zM2.662 8.08c-.456 1.063-.994 2.098-1.842 2.804a.5.5 0 0 1-.64-.768c.652-.544 1.114-1.384 1.564-2.43.14-.328.281-.68.427-1.044.302-.754.624-1.559 1.01-2.308C3.763 3.2 4.528 2.105 5.7 1.299 6.877.49 8.418 0 10.5 0c1.463 0 2.511.4 3.179 1.058.67.66.893 1.518.819 2.302-.074.771-.441 1.516-1.02 1.965a1.878 1.878 0 0 1-1.904.27c-.65.642-.907 1.679-.71 2.614C11.076 9.215 11.784 10 13 10h2.5a.5.5 0 0 1 0 1H13c-1.784 0-2.826-1.215-3.114-2.585-.232-1.1.005-2.373.758-3.284L10.5 5.06l-.777.388a.5.5 0 0 1-.447 0l-1-.5a.5.5 0 0 1 .447-.894l.777.388.776-.388a.5.5 0 0 1 .447 0l1 .5a.493.493 0 0 1 .034.018c.44.264.81.195 1.108-.036.328-.255.586-.729.637-1.27.05-.529-.1-1.076-.525-1.495-.426-.42-1.19-.77-2.477-.77-1.918 0-3.252.448-4.232 1.123C5.283 2.8 4.61 3.738 4.07 4.79c-.365.71-.655 1.433-.945 2.16-.15.376-.301.753-.463 1.13z" />
        </svg>

      </div>

      <div className="flex justify-center space-x-3 px-24 text-xl">

        <div className="col-lg-4">

          <h2 className="fw-normal text-center">Impacto en la agricultura:</h2>
          <br />
          <p className=" text-center">Las variaciones en las condiciones climáticas pueden afectar la producción de alimentos al cambiar los patrones de crecimiento de las plantas, aumentar la frecuencia de eventos climáticos extremos y afectar la disponibilidad de agua.</p>

        </div>


        <div className="col-lg-4">

          <h2 className="fw-normal text-center ">Aumento de la temperatura global:</h2>
          <br />
          <p className=" text-center">El calentamiento del planeta es uno de los efectos más evidentes del cambio climático. Esto afecta a los patrones climáticos, aumentando las temperaturas promedio en todo el mundo</p>

        </div>



        <div className="col-lg-4">

          <h2 className="fw-normal text-center">Cambio en los patrones de precipitación:</h2>
          <br />
          <p className=" text-center">El cambio climático puede alterar los patrones de lluvia y nieve, provocando eventos climáticos más intensos como tormentas, inundaciones y sequías. Esto puede tener impactos significativos en la disponibilidad de agua dulce y en la agricultura</p>

        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="  pl-24 flex justify-between pb-24">
        <div className="pr-36 text-xl">


          <p>En el Mundo, las grandes eléctricas Endesa, Iberdrola, Naturgy, EDP y Viesgo</p>
          <p>siguen generando buena parte de su electricidad usando fuentes no renovables  </p>
          <p>por eso trabajamos para que este modelo insostenible y se acelere la transición </p>
          <p>a un sistema energético eficiente, inteligente, 100% renovable y democrático.</p>
          <p>La revolución energética en manos de la ciudadanía es el camino. </p>
          <p> Con las energías renovables, el ahorro y eficiencia energética,  </p>
          <p>la electrificación, la gestión de la demanda, la integración</p>
          <p>la inteligencia, una profunda reforma del sistema eléctrico y del transporte se conseguirá</p>
          <p>paliar los efectos del cambio climático, generar puestos de trabajo y reducir los costes de electricidad. </p>
          <p> Necesitamos prescindir de los combustibles contaminantes y de la energía nuclear y aumentar </p>
          <p> la participación de la ciudadanía para que se beneficie de la transición renovable.</p>

        </div>

        <div className="text-2xl text-green-600 font-bold pr-44 py-14 pl-14">
          <p>«El cambio climático es una</p>
          <p>realidad que ya va a </p>
          <p>implicaciones inevitables, pero </p>
          <p>aún podemos minimizar sus </p>
          <p>consecuencias más severas»</p>

        </div>



      </div>


      <div className="text-left text-xl space-y-10 pb-20 pl-20 pr-40">
        <article>

          <h3 className="flex justify-start gap-3 py-2">Energías Renovables <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
          </svg></h3>
          <p>Descubre la importancia de las fuentes de energía renovable como la solar, eólica e hidroeléctrica. Conoce proyectos innovadores que están cambiando el panorama energético global.</p>

        </article>


        <article>
          <h3 className="flex justify-start gap-3 py-2">Eficiencia Energética <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-lightning" viewBox="0 0 16 16">
  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z"/>
</svg></h3>
          <p>Aprende cómo reducir el consumo de energía en tu hogar con consejos prácticos. Desde la elección de electrodomésticos eficientes hasta la instalación de aislamiento, pequeñas acciones pueden marcar la diferencia.</p>
        </article>


        <article>
          <h3 className="flex justify-start gap-3 py-2">Movilidad Sostenible <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bicycle" viewBox="0 0 16 16">
  <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"/>
</svg></h3>
          <p>Descubre alternativas de transporte amigables con el medio ambiente, como vehículos eléctricos, bicicletas y opciones de transporte público. Conoce cómo tu elección de movilidad puede impactar positivamente en el cambio climático.</p>
        </article>
      </div>

      <hr />
    </>
  )
}
export default CrearEmpresa