import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../lang-context";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./LegalTexts.css";
import ie from "../assets/img/legal/browsers/ie.png";
import ch from "../assets/img/legal/browsers/ch.png";
import ff from "../assets/img/legal/browsers/ff.png";
import sa from "../assets/img/legal/browsers/sa.png";
import op from "../assets/img/legal/browsers/op.png";

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
      "Reformas Preintser" se encuentra profundamente comprometido con el
      cumplimiento de la normativa española y europea de protección de datos de
      carácter personal, y garantiza el cumplimiento íntegro de las obligaciones
      dispuestas, así como la implementación de las medidas de seguridad
      dispuestas en el Reglamento General de Protección de Datos (RGPD) (UE)
      2016/679 y en Ley Orgánica 3/2018, de 5 de diciembre, sobre protección de
      datos y derechos digitales (LOPD y GDD, en adelante LOPD).
    </p>
    <p>
      De conformidad con estas normativas, informamos que la utilización de
      nuestra web puede requerir que se faciliten ciertos datos personales a
      través de formularios de contacto, o mediante el envío de emails, y que
      éstos serán objeto de tratamiento por "Reformas Preintser", Responsable
      del tratamiento, cuyos datos son:
    </p>
    <ul>
      <li>
        <b>Denominación Social</b>: Preintser Multiservicios, S.L.U.
      </li>
      <li>
        <b>CIF</b>: B64472244
      </li>
      <li>
        <b>Domicilio Social</b>: C/ Castillejos, 202 - Local 2 – 08013 Barcelona
      </li>
      <li>
        <b>Teléfono</b>: 932658205
      </li>
      <li>
        <b>eMail</b>: preintser-decor@telefonica.net
      </li>
    </ul>
    <h5>Obtención y Tratamiento de Datos Personales</h5>
    <hr></hr>
    <p>
      Un dato personal es cualquier información relativa a una persona: nombre,
      email, domicilio, teléfono, NIF/NIE... Adicionalmente, cuando un Usuario
      visita nuestro sitio web, determinada información se almacena
      automáticamente por motivos técnicos, como la dirección IP asignada por su
      proveedor de acceso a Internet.
    </p>
    <p>
      "Reformas Preintser", como Responsable del Tratamiento, tiene el deber de
      informar a los Usuarios de su sitio web acerca de la recogida de datos de
      carácter personal que pueden llevarse a cabo, bien sea mediante el envío
      de correo electrónico o al cumplimentar los formularios incluidos en el
      sitio web.
    </p>
    <p>
      Se obtendrán únicamente los datos precisos para poder realizar el servicio
      contratado, o para poder responder adecuadamente a la petición de
      información realizada por el Usuario. Los datos recabados son
      identificativos y corresponden a un mínimo razonable para poder llevar a
      término la actividad realizada. En particular, no se recogen datos
      especialmente protegidos en ningún momento. En ningún caso se realizará un
      uso diferente de los datos, que la finalidad para los que han sido
      recabados.
    </p>
    <p style={{ textDecoration: "underline" }}>Formularios de contacto/email</p>
    <ul>
      <li>
        <b>Finalidad</b>: Dar contestación a su solicitud de información
        realizada a través de nuestro/s formulario/s de contacto.
      </li>
      <li>
        <b>Legitimación</b>: La base jurídica que legitima este tratamiento es
        el consentimiento del Usuario, que podrá revocar en cualquier momento.
      </li>
      <li>
        <b>Cesión de datos</b>: Los datos personales serán tratados a través de
        servidores gestionados por{" "}
        <a href="https://www.ionos.es/" target="_blank">
          1&amp;1
        </a>
        , que tendrá la consideración de Encargado del Tratamiento.
      </li>
    </ul>
    <h5>Menores de edad</h5>
    <hr></hr>
    <p>
      Solo podrán usar este sitio web las personas mayores de 14 años. Según
      obliga la LOPD y GDD, en caso de menores de 14 años, será condición
      obligatoria el consentimiento de sus padres o tutores para que podamos
      tratar sus datos personales.
    </p>
    <h5>Medidas de seguridad</h5>
    <hr></hr>
    <p>
      Se informa a los Usuarios de la web de “Reformas Preintser” de que se han
      adoptado las medidas de seguridad técnicas, organizativas y de seguridad a
      nuestro alcance para evitar la pérdida, mal uso, alteración, acceso no
      autorizado y robo de los datos, y que garantizan así la confidencialidad,
      integridad y calidad de la información contenida en las mismas, de acuerdo
      con lo establecido en la normativa vigente en materia de protección de
      datos. Los datos personales que se recogen en los formularios son objeto
      de tratamiento, únicamente, por parte del personal de “Reformas Preintser”
      o de los Encargados del Tratamiento designados.
    </p>
    <p>
      El Sitio Web de “Reformas Preintser” cuenta además con un cifrado SSL, que
      permite al Usuario el envío seguro de sus datos personales a través de los
      formularios de contacto del sitio web.
    </p>
    <h5>Veracidad de los datos</h5>
    <hr></hr>
    <p>
      El Usuario manifiesta que todos los datos facilitados por él son ciertos y
      correctos y se compromete a mantenerlos actualizados. El Usuario
      responderá de la veracidad de sus datos y será el único responsable de
      cuantos conflictos o litigios pudieran resultar por la falsedad de los
      mismos. Es importante que, para que podamos mantener los datos personales
      actualizados, el Usuario informe a “Reformas Preintser” siempre que haya
      habido alguna modificación en los mismos.
    </p>
    <h5>Cesión de datos</h5>
    <hr></hr>
    <p>
      “Reformas Preintser” no cederá ni comunicará a ningún tercero tus datos,
      excepto en los casos legalmente previstos o cuando la prestación de un
      servicio implique la necesidad de una relación contractual con un
      Encargado de Tratamiento. Así, el Usuario acepta que algunos de los datos
      personales recabados sean facilitados a estos Encargados del Tratamiento
      (plataformas de pago, gestoría, intermediarios, etc.), cuando sea
      necesario para la efectiva realización de un servicio contratado o
      producto adquirido. El Usuario acepta también que, en caso de prestación
      de servicios, éstos puedan ser, total o parcialmente, subcontratados a
      otras personas o empresas, que tendrán la consideración de Encargados del
      Tratamiento, con los que se ha convenido el correspondiente contrato de
      confidencialidad, o adherido a sus políticas de privacidad, establecidas
      en sus respectivas páginas web. El Usuario podrá negarse a la cesión de
      sus datos a los Encargados del Tratamiento, mediante petición escrita, por
      cualquiera de los medios anteriormente referenciados.
    </p>
    <h5>Ejercicio de Derechos del Usuario</h5>
    <hr></hr>
    <p>
      La LOPD y el RGPD conceden a los interesados la posibilidad de ejercer una
      serie de derechos relacionados con el tratamiento de sus datos personales.
      Para ello, el Usuario deberá dirigirse, aportando documentación que
      acredite su identidad (DNI o pasaporte), mediante correo electrónico a
      <tt> preintser-decor@telefonica.net</tt>, o bien mediante comunicación
      escrita a la dirección que aparece en nuestro Aviso Legal. Dicha
      comunicación deberá reflejar la siguiente información: nombre y apellidos
      del Usuario, la petición de solicitud, el domicilio y los datos
      acreditativos.
    </p>
    <p>
      El ejercicio de derechos deberá ser realizado por el propio Usuario. No
      obstante, podrán ser ejecutados por una persona autorizada como
      representante legal del Usuario, aportándose la documentación que acredite
      dicha representación.
    </p>
    <p>El Usuario podrá solicitar el ejercicio de los derechos siguientes:</p>
    <ul>
      <li>
        Derecho a solicitar el <b>acceso</b> a los datos personales.
      </li>
      <li>
        Derecho a solicitar su <b>rectificación</b> (en caso de que sean
        incorrectos) o supresión.
      </li>
      <li>
        Derecho a solicitar la <b>limitación</b> de su tratamiento, en cuyo caso
        únicamente serán conservados por “Reformas Preintser” para el ejercicio
        o la defensa de reclamaciones.
      </li>
      <li>
        Derecho a <b>oponerse</b> al tratamiento: "Reformas Preintser" dejará de
        tratar sus datos, salvo que por motivos legítimos o el ejercicio o la
        defensa de posibles reclamaciones se tengan que seguir tratando.
      </li>
      <li>
        Derecho a la <b>portabilidad</b> de los datos: en caso de que quiera que
        sus datos sean tratados por otra empresa, "Reformas Preintser" le
        facilitará la portabilidad de sus datos en formato exportable.
      </li>
    </ul>
    <p>
      En el caso de que se haya otorgado el consentimiento para alguna finalidad
      específica,{" "}
      <b>
        el Usuario tiene derecho a retirar el consentimiento en cualquier
        momento
      </b>
      , sin que ello afecte a la licitud del tratamiento basado en el
      consentimiento previo a su retirada.
    </p>
    <p>
      Si un Usuario considera que hay un problema con la forma en que “Reformas
      Preintser” está manejando sus datos, puede dirigir sus reclamaciones al
      Responsable de Seguridad o a la autoridad de protección de datos que
      corresponda, siendo la Agencia Española de Protección de Datos la indicada
      en el caso de España.
    </p>
    <h5>Conservación de los datos</h5>
    <hr></hr>
    <p>
      Los datos de carácter personal de los Usuarios que usen el formulario de
      contacto o que nos envíen un email solicitando información serán tratados
      durante el tiempo estrictamente necesario para atender a la solicitud de
      información, o hasta que se revoque el consentimiento otorgado.
    </p>
    <p>
      Los datos de carácter personal de los Clientes serán tratados hasta que
      finalice la relación contractual. El período de conservación de los datos
      personales será el mínimo necesario, pudiendo mantenerse hasta:
    </p>
    <ul>
      <li>
        <b>4 años</b>: Ley sobre Infracciones y Sanciones en el Orden Social
        (obligaciones en materia de afiliación, altas, bajas, cotización, pago
        de salarios…); Arts. 66 y sig. Ley General Tributaria (libros de
        contabilidad…)
      </li>
      <li>
        <b>5 años</b>: Art. 1964 Código Civil (acciones personales sin plazo
        especial)
      </li>
      <li>
        <b>6 años</b>: Art. 30 Código de Comercio (libros de contabilidad,
        facturas…)
      </li>
      <li>
        <b>10 años</b>: Art. 25 Ley de Prevención del Blanqueo de Capitales y
        Financiación del Terrorismo.
      </li>
      <li>
        <b>Sin plazo</b>: Datos desagregados y anonimizados.
      </li>
    </ul>
    <p>
      En el caso de tratamiento de datos de candidatos (C.V.), "Reformas
      Preintser" podrá mantener almacenado su currículo un máximo de dos años
      para incorporarlo a futuras convocatorias, a menos que el candidato se
      manifieste en contrario.
    </p>
    <h5>Redes sociales</h5>
    <hr></hr>
    <p>
      "Reformas Preintser" cuenta con perfil en algunas de las principales redes
      sociales de Internet (Twitter, Google+), reconociéndose en todos los casos
      Responsable del tratamiento de los datos de sus seguidores, fans,
      suscriptores, comentaristas y otros perfiles de Usuarios (en adelante,
      seguidores) publicados por "Reformas Preintser".
    </p>
    <p>
      La finalidad del tratamiento de datos por parte de "Reformas Preintser",
      cuando la ley no lo prohíba, será la de informar a sus seguidores sobre
      sus actividades y ofertas, por cualquier vía que la red social permita,
      así como prestar servicio personalizado de atención al cliente. La base
      jurídica que legitima este tratamiento será el consentimiento del
      interesado, que podrá revocar en cualquier momento.
    </p>
    <p>
      En ningún caso "Reformas Preintser" extraerá datos de las redes sociales,
      a menos que se obtuviera puntual y expresamente el consentimiento del
      Usuario para ello (por ejemplo, para la realización de un concurso).
    </p>
    <h5>Selección de personal</h5>
    <hr></hr>
    <p>
      El aspirante que envíe comunicaciones electrónicas a "Reformas Preintser",
      con la finalidad de acceder a los procesos de selección de personal del
      responsable, nos autoriza a analizar: los documentos remitidos (por
      ejemplo, el C.V.), todo el contenido que sea directamente accesible a
      través de buscadores de Internet (por ejemplo, Google), los perfiles que
      mantenga en redes sociales profesionales (por ejemplo, LinkedIn), los
      datos obtenidos en las pruebas de acceso, y la información que revele en
      la entrevista de trabajo; con el objetivo de valorar su candidatura y
      poder, en su caso, ofrecerle un puesto de trabajo. En caso de que el
      candidato no sea seleccionado, "Reformas Preintser" podrá mantener
      almacenado su C.V. durante un máximo de dos años, para incorporarlo a
      futuras convocatorias, a menos que el candidato manifieste lo contrario.
      La base jurídica que legitima este tratamiento será el consentimiento del
      interesado, que podrá revocar en cualquier momento.
    </p>
    <h5>Confidencialidad</h5>
    <hr></hr>
    <p>
      La información suministrada por el cliente tendrá, en todo caso, la
      consideración de confidencial, sin que pueda ser utilizada para otros
      fines distintos a los aquí descritos. "Reformas Preintser" se obliga a no
      divulgar ni revelar información sobre las pretensiones del Usuario, los
      motivos del asesoramiento solicitado, o la duración de su relación con
      éste.
    </p>
    <h5>Validez</h5>
    <hr></hr>
    <p>
      Esta política de privacidad y de protección de datos ha sido redactada por
      EXPERTOS LOPD®,{" "}
      <a href="https://www.expertoslopd.es/" target="_blank">
        empresa de protección de datos
      </a>
      , a día 23:13 , y podrá variar en función de los cambios de normativa y
      jurisprudencia que se vayan produciendo, siendo responsabilidad del
      titular de los datos la lectura del documento actualizado, en orden a
      conocer sus derechos y obligaciones al respecto en cada momento.
    </p>
  </React.Fragment>
);
const _2 = props => (
  <React.Fragment>
    <p>
      En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
      Sociedad de la Información y Comercio Electrónico informamos al Usuario de
      la utilización de cookies en la web de "Reformas Preintser".
    </p>
    <p>
      Una cookie es un fichero que se descarga en el ordenador o el dispositivo
      del Usuario (smartphone, tableta, televisión conectada...) al acceder a
      determinadas páginas web. Las cookies permiten, entre otras cosas,
      recopilar información estadística, facilitar ciertas funcionalidades
      técnicas, almacenar y recuperar información sobre los hábitos de
      navegación o preferencias de un Usuario o de su equipo y, dependiendo de
      la información que contengan y de la forma en que utilice su equipo,
      pueden utilizarse para reconocer al Usuario, recordar aspectos del Usuario
      como su idioma, país, navegador, etc. En caso de no querer recibir
      cookies, el Usuario podrá configurar su navegador para que las borre del
      disco duro de su ordenador, las bloquee o le avise en su caso de
      instalación de las mismas. Para continuar sin cambios en la configuración
      de las cookies, simplemente, continúa navegando en la página web.
    </p>
    <h5>Otras cookies</h5>
    <hr></hr>
    <p>
      En alguna página del Sitio Web se puede mostrar contenido embebido o
      invocado a través del cual se pueden estar instalando cookies de terceros.
      Por ejemplo, cookies de Gstatic. Cuando se incluyen estos contenidos en el
      Sitio Web se intenta que la única finalidad de estas cookies sea técnica.
      Los terceros que prestan los contenidos pueden decidir cambiar la
      finalidad de estas cookies, por lo que se revisan estas páginas cada
      cierto tiempo.
    </p>
    <h5>Configuración de cookies</h5>
    <hr></hr>
    <p>
      El Usuario puede permitir, bloquear o eliminar las cookies instaladas en
      su equipo mediante la configuración de las opciones de su navegador.
      Puedes encontrar información sobre cómo hacerlo, en relación con los
      navegadores más comunes, en los links que se incluyen a continuación:
    </p>
    <div className="cookies-browser-list">
      <img src={ie} alt="ie" className="cookies-browser" />
      <img src={ch} alt="ch" className="cookies-browser" />
      <img src={ff} alt="ff" className="cookies-browser" />
      <img src={sa} alt="sa" className="cookies-browser" />
      <img src={op} alt="op" className="cookies-browser" />
    </div>

    <h5>Aceptación de cookies</h5>
    <hr></hr>
    <p>
      Al acceder a este sitio web por primera vez, verás una ventana dónde se
      informa de la utilización de las cookies y donde puedes consultar esta
      "Política de cookies". Puedes cambiar la configuración de cookies en
      cualquier momento, configurando el navegador para aceptar, o no, las
      cookies que recibes o para que el navegador te avise cuando un servidor
      quiera guardar una cookie. Te informamos de que, en el caso de bloquear o
      no aceptar la instalación de cookies, es posible que ciertos servicios no
      estén disponibles sin la utilización de éstas o que no pueda acceder a
      determinados servicios ni tampoco aprovechar por completo todo lo que
      nuestra web ofrece.
    </p>
    <p>
      "Reformas Preintser" te agradece que consientas la aceptación de cookies,
      esto nos ayuda a obtener datos más precisos que nos permiten mejorar el
      contenido y el diseño de nuestras páginas webs para adaptarlas a tus
      preferencias.
    </p>
  </React.Fragment>
);
const content = [<_0 />, <_1 />, <_2 />];
