import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../lang-context";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./LegalTexts.css";

const LegalTexts = props => {
  // Title Bar =~ NavBar for this page
  const TitleBar = props => (
    <div className="title-bar">
      <div className="title-bar-item">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
          <i className="fa fa-home" aria-hidden="true"></i>
        </Link>
      </div>
      <div className="title-bar-item" style={{ flex: "3" }}>
        <h3>{props.lang.footer.legal[props.type]}</h3>
      </div>
      <div className="title-bar-item"> </div>
    </div>
  );

  return (
    <LangContext.Consumer>
      {([lang, _]) => (
        <div className="legaltexts-wrapper">
          <TitleBar lang={lang} type={props.type} />
          <div className="legaltexts-content-wrapper">
            {content[props.type]}
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
};

export default LegalTexts;

/* ====== Content of the Page ====== */
// _0 --> legal
// _1 --> privacy
// _2 --> cookies
// content = [_0, _1, _2]
const _0 = props => (
  <React.Fragment>
    <p>
      En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
      Servicios de la Sociedad de la Información y del Comercio Electrónico
      (LSSICE), Preintser Multiservicios, S.L.U. (en adelante, "Reformas
      Preintser"), Responsable de esta web, pone a disposición de los Usuarios
      la presente información, para definir sus Condiciones de Uso.
    </p>
    <p>
      Adicionalmente a los contenidos aquí expuestos, los aspectos específicos
      relacionados con la protección de los datos personales y la privacidad de
      los usuarios de esta web se desarrollan en las páginas de Política de
      Privacidad y Política de Cookies.
    </p>
    <h5>Identidad del Responsable del Tratamiento</h5>
    <hr></hr>
    <ul>
      <li>
        <b>Denominación Social</b>: Preintser Multiservicios, S.L.U.
      </li>
      <li>
        <b>Nombre Comercial</b>: Reformas Preintser
      </li>
      <li>
        <b>CIF</b>: B64472244
      </li>
      <li>
        <b>Inscrita en el Registro Mercantil de Barcelona</b>: Tom.39358 Folio
        207 Hoja B342388
      </li>
      <li>
        <b>Domicilio Social</b>: C/ Castillejos, 202 - Local 2 – 08013 Barcelona
      </li>
      <li>
        <b>Actividad</b>: Construcción
      </li>
      <li>
        <b>Teléfono</b>: 932658205
      </li>
      <li>
        <b>eMail</b>: preintser-decor@telefonica.net{" "}
      </li>
      <li>
        <b>Formulario de contacto online</b>: https://www.reformaspreintser.es/{" "}
      </li>
      <li>
        <b>Nombre de Dominio</b> https://www.reformaspreintser.es/
      </li>
      <li>
        <b>Registro de Tratamientos conforme al RGPD</b>: Clientes/Proveedores,
        Empleados, Selección de Personal y Usuarios Web.
      </li>
    </ul>
    <h5>Finalidad de la Web</h5>
    <hr></hr>
    <p>
      La web de Reformas Preintser tiene la finalidad de informar a clientes y
      potenciales clientes de sus productos y/o servicios, datos de contacto,
      ubicación, etc. Además, en su caso, también tendrá la finalidad de
      divulgar información relacionada con el sector de actividad del
      Responsable.
    </p>
    <h5>Marco Normativo</h5>
    <hr></hr>
    <p>
      La actividad de esta web se encuentra sujeta al marco legal español y
      europeo, concretamente a las siguientes normas:
    </p>
    <ul>
      <li>
        Reglamento General de Protección de Datos (RGPD) (UE) 2016/679, que
        regula el tratamiento de datos personales en los países de la Unión
        Europea.
      </li>
      <li>
        Ley Orgánica 3/2018, de 5 de diciembre, sobre protección de datos y
        derechos digitales (LOPD y GDD), normas de ámbito regional (aplicables a
        España), y que definen y amplían muchos de los conceptos y derechos
        presentes en el RGPD.
      </li>
      <li>
        Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y del Comercio Electrónico (LSSICE), norma que afecta a
        aquellas webs que, de alguna forma, realicen actividades económicas
        mediante medios electrónicos, como es el caso de esta web.
      </li>
    </ul>
    <p>
      Toda persona que acceda a este sitio web asume el papel de Usuario,
      comprometiéndose a la observancia y cumplimiento riguroso de las
      condiciones aquí dispuestas, así como a cualesquiera otra disposición
      legal que fuera de aplicación. "Reformas Preintser" no se hará responsable
      de los daños y perjuicios, propios o a terceros, producidos por el uso de
      este sitio web por parte del Usuario.
    </p>
    <p>
      "Reformas Preintser" proporciona el acceso a artículos, informaciones,
      servicios y datos de su propiedad o de terceros, elaborados con fines
      meramente informativos o divulgativos, que pueden no reflejar el estado
      actual de la legislación o la jurisprudencia, y que se refieren a
      situaciones generales, por lo que su contenido no debe ser aplicado
      necesariamente por el Usuario a casos concretos. El contenido de esta web,
      por tanto, no puede ser considerado, en ningún caso, sustitutivo de
      asesoramiento legal.
    </p>
    <p>
      "Reformas Preintser" se reserva el derecho a modificar cualquier tipo de
      información que pudiera aparecer en la web, en cualquier momento y sin
      previo aviso, sin que exista obligación de preavisar o poner en
      conocimiento de los Usuarios dichas obligaciones, entendiéndose como
      suficiente la publicación en el presente sitio web.
    </p>
    <p>
      Este sitio web ha sido revisado y probado para que funcione correctamente
      de manera ininterrumpida. No obstante, "Reformas Preintser" no descarta la
      posibilidad de que existan ciertos errores de programación, falta de
      disponibilidad puntual (por ejemplo, caídas del servidor, o mantenimiento
      del mismo) o que acontezcan causas de fuerza mayor, catástrofes naturales,
      huelgas, o circunstancias semejantes que hagan imposible el acceso
      temporal a la página web. De igual forma, "Reformas Preintser" no puede
      garantizar el funcionamiento ininterrumpido o totalmente libre de errores
      de esta web, ni se responsabiliza de los virus que tengan su origen en una
      transmisión telemática infiltrados por terceros generados con la finalidad
      de obtener resultados negativos para un sistema informático
    </p>
    <p>
      El Usuario se compromete a no utilizar esta web ni, si es el caso, los
      servicios o productos ofrecidos en la misma, para la realización de
      actividades contrarias a la ley, al orden público o a estas condiciones de
      uso. Por tanto, "Reformas Preintser" no se hace responsable de la
      información y contenidos almacenados, a título enunciativo pero no
      limitativo, en foros, chats, generadores de blogs, comentarios, redes
      sociales o cualesquiera otro medio que permita a terceros publicar
      contenidos. No obstante, y en cumplimiento de lo dispuesto en el art. 11 y
      16 de la LSSI-CE, "Reformas Preintser" se pone a disposición de todos los
      Usuarios, autoridades y fuerzas de seguridad, y colaborando de forma
      activa en la retirada o en su caso bloqueo de todos aquellos contenidos
      que pudieran afectar o contravenir la legislación nacional, o
      internacional, derechos de terceros, o la moral y el orden público. En
      caso de que un Usuario considere que existe en la web algún contenido que
      pudiera ser susceptible de esta clasificación, se ruega lo notifique de
      forma inmediata a nuestro personal.
    </p>
    <p>
      "Reformas Preintser" se reserva el derecho a denegar o retirar el acceso a
      la web sin necesidad de advertencia previa, a instancia propia o de un
      tercero, a aquellos Usuarios que incumplan nuestras Condiciones de Uso.
    </p>
    <h5>Propiedad Intelectual</h5>
    <hr></hr>
    <p>
      El sitio web, incluyendo a título enunciativo pero no limitativo su
      programación, edición, compilación y demás elementos necesarios para su
      funcionamiento, los diseños, logotipos, texto y/o gráficos son propiedad
      de "Reformas Preintser" o, en su caso, dispone de licencia o autorización
      expresa por parte de los autores.
    </p>
    <p>
      Todos los contenidos del sitio web se encuentran debidamente protegidos
      por la normativa de propiedad intelectual e industrial (artículos 8 y
      32.1, párrafo segundo, de la Ley de Propiedad Intelectual), así como
      inscritos en los registros públicos correspondientes, y no se permite la
      reproducción y/o publicación, total o parcial, del sitio web, ni su
      tratamiento informático, su distribución, difusión, modificación o
      transformación, sin el permiso previo y por escrito del mismo. “Reformas
      Preintser” velará por el cumplimiento de las anteriores condiciones, así
      como por la debida utilización de los contenidos presentados en sus
      páginas web, ejercitando todas las acciones civiles y penales que le
      correspondan en el caso de infracción o incumplimiento de estos derechos
      por parte del Usuario.
    </p>
    <p>
      Los diseños, logotipos, texto y/o gráficos ajenos a "Reformas Preintser" y
      que pudieran aparecer en el sitio web, pertenecen a sus respectivos
      propietarios, siendo ellos mismos responsables de cualquier posible
      controversia que pudiera suscitarse respecto a los mismos. En todo caso,
      "Reformas Preintser" cuenta con la autorización expresa y previa por parte
      de los mismos. "Reformas Preintser" reconoce a favor de sus titulares los
      correspondientes derechos de propiedad industrial e intelectual, no
      implicando su sola mención o aparición en el sitio web la existencia de
      derechos o responsabilidad alguna del Responsable sobre los mismos, como
      tampoco respaldo, patrocinio o recomendación por parte del mismo.
    </p>
    <h5>Enlaces de terceros</h5>
    <hr></hr>
    <p>
      "Reformas Preintser" puede poner a disposición del Usuario enlaces u otros
      elementos que permiten el acceso hacia otros sitios web pertenecientes a
      terceros. No comercializamos los productos y/o servicios de dichas páginas
      enlazadas, ni asumimos ningún tipo de responsabilidad sobre las mismas, ni
      sobre la información contenida en ellas, ni su veracidad o licitud, ni de
      cualesquiera efectos que pudieran derivarse.
    </p>
    <p>
      En todo caso, "Reformas Preintser" manifiesta que procederá a la retirada
      inmediata de cualquier contenido que pudiera contravenir la legislación
      nacional o internacional, la moral o el orden público, procediendo a la
      retirada inmediata de la redirección a dicho sitio web, poniendo en
      conocimiento de las autoridades competentes el contenido en cuestión.
    </p>
    <h5>Ley Aplicable y Jurisdicción</h5>
    <hr></hr>
    <p>
      La relación entre Responsable y Usuario se rige en todos y cada uno de sus
      extremos por la ley española, a la que se someten expresamente ambas
      partes. El idioma de redacción e interpretación de este aviso legal es el
      español. Para la resolución de todas las controversias o cuestiones
      relacionadas con el presente sitio web o de las actividades en él
      desarrolladas, "Reformas Preintser" y Usuario acuerdan someterse a los
      Juzgados y Tribunales del domicilio del Usuario.
    </p>
  </React.Fragment>
);
const _1 = props => (
  <React.Fragment>
    <p>
      En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
      Servicios de la Sociedad de la Información y del Comercio Electrónico
      (LSSICE), Preintser Multiservicios, S.L.U. (en adelante, “Reformas
      Preintser”), Responsable de esta web, pone a disposición de los Usuarios
      la presente información, para definir sus Condiciones de Uso.
    </p>
    <p>
      Adicionalmente a los contenidos aquí expuestos, los aspectos específicos
      relacionados con la protección de los datos personales y la privacidad de
      los usuarios de esta web se desarrollan en las páginas de Política de
      Privacidad y Política de Cookies.
    </p>
  </React.Fragment>
);
const _2 = props => "Hola";
const content = [<_0 />, <_1 />, <_2 />];
