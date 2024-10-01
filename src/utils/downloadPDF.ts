import jsPDF from "jspdf";
import { Datas, TypeAsociado } from "../store/datas/types";
import { setValue } from "./setValue";
import { pagoMensual } from "./cuota";
import { convertirNumeroATexto } from "./valorTexto";

export function downloadPDF(datas: Datas, typeAsociado: Partial<TypeAsociado>) {
    try {
        const doc = new jsPDF()

        doc.addImage('images/cr.jpg', 'PNG', 15, 10, 180, 24)

        // Fecha y hora de radicacion
        const now = new Date()
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const hour = String(now.getHours()).padStart(2, '0');
        const min = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        doc.setFont("helvetica", "bold");
        doc.setFontSize(6.5)
        doc.text(`${day}/${month}/${year}  ${hour}:${min}:${seconds}`, 173, 35)
        doc.setFont("helvetica", "normal");

        // doc.setFillColor(242, 242, 252)
        doc.setFillColor(254, 254, 254)
        // Cuadro 1
        doc.roundedRect(10, 45, 190, 51.2, 0, 0, 'DF')
        // Lineas Horozontales y datos Por orden de fila

        doc.setFillColor(44, 46, 127)
        doc.roundedRect(10, 45, 47.5, 51.2, 0, 0, 'DF')
        doc.roundedRect(105, 51.5, 47.5, 44.5, 0, 0, 'DF')

        doc.setFontSize(8)
        doc.setTextColor(255, 255, 255)

        doc.text("Nombre de Asociado", 12, 49.4)
        doc.line(10, 51.4, 200, 51.4)
        doc.text("Número Identificación Asociado", 12, 55.8)
        doc.text("Tipo de Asociado", 107, 55.8)
        doc.line(10, 57.8, 200, 57.8)
        doc.text("Antiguedad Laboral Fecha", 12, 62.2)
        doc.text("Antiguedad Laboral", 107, 62.2)
        doc.line(10, 64.2, 200, 64.2)
        doc.text("Salario o Pensión", 12, 68.6)
        doc.text("Valor Descuentos Desprendibles", 107, 68.6)
        doc.line(10, 70.6, 200, 70.6)
        doc.text("Descuento de Seguridad Social", 12, 75)
        doc.text("Ahorro Coovitel", 107, 75)
        doc.line(10, 77, 200, 77)
        doc.text("Capacidad de Descuento (Nómina)", 12, 81.4)
        doc.text("Puntaje Score", 107, 81.4)
        doc.line(10, 83.4, 200, 83.4)
        doc.text("Riesgo", 12, 87.8)
        doc.text("Monto de Cupo Maximo", 107, 87.8)
        doc.line(10, 89.8, 200, 89.8)
        doc.text("Plazo", 12, 94)
        doc.text("Forma de Pago", 107, 94)
        doc.setTextColor(0, 0, 0)

        // Datos Asociado
        doc.setFont("helvetica", "italic");
        doc.setFontSize(9)
        if (datas.formulario && datas.seguridad && datas.capacidadDescuento && datas.credito && typeAsociado.name && datas.aportes) {
            doc.text(datas.formulario.name, 95, 49.4)
            doc.text(datas.formulario.cedula, 72, 55.8)
            if (datas.formulario.antiguedad) {
                doc.text(datas.formulario.antiguedad, 73, 62.2)
            } else {
                doc.text("No aplica", 73, 62.2)
            }
            doc.text(`$ ${datas.formulario.salario}`, 73, 68.6)
            doc.text(`$ ${setValue(datas.seguridad?.toString())}`, 74, 75)
            doc.text(`$ ${setValue(datas.capacidadDescuento?.toString())}`, 72, 81.4)
            doc.text(datas.credito?.riesgo, 72, 87.8)
            doc.text(`${datas.credito?.plazo} Cuotas`, 73, 94)

            doc.text(typeAsociado.name, 166, 55.8)
            doc.text(`$ ${datas.formulario.desprendibles}`, 170, 68.6)
            doc.text(`$ ${setValue(datas.aportes.toString())}`, 172, 75)
            doc.text(datas.formulario.score, 174, 81.4)
            doc.text(`$ ${setValue(datas.montoMaximo.toString())}`, 166, 87.8)
            doc.text("Libranza", 170, 94)
        }
        if (datas.formulario?.years) {
            doc.text(datas.formulario.years, 169, 62.2)
        } else {
            doc.text("No aplica", 166, 62.2)
        }

        // Lineas Verticales
        doc.line(57.5, 45, 57.5, 96)
        doc.line(105, 51.4, 105, 96)
        doc.line(152.5, 51.4, 152.5, 96)


        // Cuadro 2
        doc.setFillColor(254, 254, 254)
        doc.roundedRect(45, 105, 120, 40, 0, 0, 'DF')

        // Fondo azul
        doc.setFillColor(44, 46, 127)
        doc.roundedRect(45, 105, 60, 40, 0, 0, 'DF')

        doc.setFontSize(8)
        doc.setTextColor(255, 255, 255)

        // Lineas Horzontales
        doc.setFontSize(8)
        doc.text("Monto Cupo Aprovado", 47, 109.5)
        doc.line(45, 111.66, 165, 111.66)
        doc.text("Plazo", 47, 116)
        doc.line(45, 118.32, 165, 118.32)
        doc.text("Tasa E.A", 47, 122.50)
        doc.line(45, 124.98, 165, 124.98)
        doc.text("Tasa N.M", 47, 129.40)
        doc.line(45, 131.64, 165, 131.64)
        doc.text("Valor Cuota", 47, 136)
        doc.line(45, 138.3, 165, 138.3)
        doc.text("Garantia", 47, 142.5)

        // Linea Vertical
        doc.line(105, 105, 105, 145)

        // Texto Negro
        doc.setTextColor(0, 0, 0)
        doc.setFont("helvetica", "italic");
        doc.setFontSize(9)
        if (datas.formulario && datas.credito) {
            doc.text(`$ ${datas.formulario.monto}`, 125, 109.5)
            doc.text(`${datas.credito?.plazo} Cuotas`, 126.5, 116)
            doc.text(`${datas.credito.EA} %`, 128, 122.5)
            doc.text(`${datas.credito.NMV} %`, 128, 129.4)
            const cuota = setValue(pagoMensual(datas.monto, datas.credito?.NMV, datas.credito?.plazo).toString())
            doc.text(`$ ${cuota}`, 126, 136)
            doc.text(`Firma`, 129, 142.5)
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(15)
        doc.text("Condiciones de la Simulación", 66, 41)
        doc.text("Condiciones Cupo Solicitado", 68, 103)

        doc.setFontSize(10)
        doc.text("Aceptación de condiciones", 16, 150)
        doc.setFontSize(6.3)
        doc.setFont("helvetica", "normal");
        doc.text("1) Tengo  conocimiento que si  pierdo la  calidad de  asociado  por retiro voluntario o  exclusión el valor de  mi ahorro se cruzará  con los  valores pendientes  de pago y si esta operación", 16, 154)
        doc.text("arroja un  sobrante a mi  favor será reintegrado  en un periodo máximo de 90 días calendario de acuerdo con el Estatuto de Coovitel. 2) Manifiesto que conozco y acepto, que si pierdo la", 16, 158)
        doc.text("calidad  de Asociado  a COOVITEL respecto  de la(s)  obligación(es) que se encuentre(n) pendiente  de pago, la Entidad  Solidaria cobrará la  tasa máxima permitida  legalmente para el", 16, 162)
        doc.text("momento de la  desvinculación, por la pérdida de mis derechos como Cooperador; de la misma manera declaro que conozco y acepto que las modificaciones pactadas con relación a las", 16, 166)
        doc.text("tasas  de  interés, pueden  conllevar al incremento  en el valor de la  cuota y/o  incremento del  plazo. 3) Declaro  que conozco y acepto  las condiciones del crédito solicitado. Así mismo", 16, 170)
        doc.text("declaro que conozco y acepto el reglamento y la política de cobranzas,  dichos documentos puedo  consultarlos en cualquier momento  en la página web  www.coovitel.coop. 4) Coovitel", 16, 174)
        doc.text("no realiza  cobros adicionales  de  otros  servicios  diferentes  a  los  informados  en  el  presente  simulador sin  previa autorización del   solicitante. 5) Declaro  que conozco y acepto las", 16, 178)
        doc.text("condiciones  del  Seguro  de  Vida  Deudores  Contratado,  que  tuve la  libertad de escoger  la aseguradora y que  dicho contrato puede  ser consultado en  https://www.coovitel.coop. 6)", 16, 182)
        doc.text("Coovitel  no  realiza  cobros  por  pagos  anticipados o  prepagos  de  la  operación  de crédito.  7) En  caso de que el  crédito sea destinado  para el pago de un seguro voluntario: tengo", 16, 186)
        doc.text("conocimiento  que, si  llegare a  incurrir en  una mora mayor o igual a  30 días de  mi obligación ?línea  de crédito seguros?,  se dará la  terminación automática del  contrato de  seguros", 16, 190)
        doc.text("(póliza)  en  los términos  del  artículo  1068  del  código  de  comercio. En  este  caso el valor de  las primas no devengadas  será reintegrado por la aseguradora a la Cooperativa y será", 16, 194)
        doc.text("cruzado con el saldo de mi obligación crediticia, la cual posterior a su aplicación se dará por terminada.", 16, 198)

        // Lineas de Firmas y datos

        doc.setFontSize(12)
        doc.setFont("helvetica", "bold");
        doc.line(16, 212, 120, 212)
        doc.text("Firma", 16, 216)
        doc.line(16, 228, 120, 228)
        doc.text("Nombre Completo", 16, 232)
        doc.line(16, 244, 120, 244)
        doc.text("Número de Identificación", 16, 248)

        // Huella
        doc.setTextColor(0, 0, 0)
        doc.setFillColor(254, 254, 254)
        doc.roundedRect(150, 210, 32, 30, 0, 0, 'DF')
        doc.text("Huella", 160, 246)

        // Cuadro Final
        doc.setFontSize(13)
        doc.setFillColor(254, 254, 254)
        doc.roundedRect(16, 255, 180, 28, 0, 0, 'DF')
        // Lineas Verticales
        doc.text("Autorización", 96, 259)
        doc.line(16, 261, 195.6, 261)
        doc.text("Nombre Completo", 28, 265.5)
        doc.text("Cargo", 104, 265.5)
        doc.text("Firma", 162, 265.5)
        doc.line(16, 267, 195.6, 267)
        // Lineas Horizontales
        doc.line(80, 261, 80, 283)
        doc.line(140, 261, 140, 283)

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8)
        doc.text("Pagina 1/2", 100, 290)


        if (typeAsociado.name == "Pensionado" && datas.formulario?.pagaduria.toLowerCase() == "colpensiones") {
            console.log("Colpensiones")
        } else {

            // SEGUNDA PAGINA
            doc.addPage()

            doc.addImage('images/logo.png', 'PNG', 10, 10, 80, 22)

            // Datos superiores
            doc.setFontSize(7)
            doc.setFont("helvetica", "italic");
            doc.setFillColor(254, 254, 254)

            // Rectangulo 1
            doc.roundedRect(150, 8, 45, 4, 0, 0, 'DF')
            doc.text("FECHA DE RADICACION", 120, 11)
            doc.text(`${day}  /  ${month}  /  ${year}`, 165, 11)
            doc.text("MES   DIA   AÑO", 164, 15)

            doc.setFillColor(254, 254, 254)
            doc.roundedRect(150, 18, 45, 4, 0, 0, 'DF')
            doc.text("LIBRANZA N°", 133, 21)

            doc.setFillColor(254, 254, 254)
            doc.roundedRect(150, 24, 45, 4, 0, 0, 'DF')
            doc.text("MODALIDAD", 134, 27)
            doc.setFontSize(8)
            doc.text("Cupo Rotativo", 163, 27)
            doc.setFontSize(7)

            doc.setFillColor(254, 254, 254)
            doc.roundedRect(150, 30, 45, 4, 0, 0, 'DF')
            doc.text("CAPITAL INICIAL", 129, 33)
            doc.text(`$ ${datas.formulario?.monto}`, 165, 33)

            doc.setFillColor(254, 254, 254)
            doc.roundedRect(150, 36, 45, 4, 0, 0, 'DF')
            doc.text("VALOR CUOTA", 131, 39)
            if (datas.credito?.NMV) {
                const cuota = setValue(pagoMensual(datas.monto, datas.credito?.NMV, datas.credito?.plazo).toString())
                doc.text(`$ ${cuota}`, 166, 39)
            }

            // Texto
            if (datas.formulario) {
                const text = `Nosotros ${datas.formulario.name} identificado con cedula de ciudadanía número ${datas.formulario.cedula} declaramos incondicional, solidaria e indivisiblemente deudores de la Cooperativa Empresarial de Ahorro y Crédito - COOVITEL,por la suma de ${convertirNumeroATexto(datas.monto)} ( $ ${datas.formulario.monto} M/Cte) moneda legal colombiana; que de dicha entidad he(mos) recibido en calidad de mutuo con intereses. Para tal efecto autorizo(amos) expresamente al tesorero o pagador de ${datas.formulario.pagaduria} para que descuente de mi salario y pague a la Cooperativa COOVITEL, el valor total de esta libranza en la forma que se estipula más adelante, con destino a la cancelación del crédito y hasta la concurrencia del saldo pendiente, de conformidad con el artículo 1° de la ley 1527 de 2012, que al tenor dispone: "Cualquier persona natural asalariada, contratada por prestación de servicios, asociada a una cooperativa o precooperativa,fondo de empleados o pensionada, podrá adquirir productos y servicios financieros o bienes y servicios de cualquier naturaleza, acreditados con su salario, sus pagos u honorarios o su pensión, siempre que medie autorización expresa de descuento dada al empleador o entidad pagadora, quien en virtud de la suscripción de la libranza o descuento directo otorgada por el asalariado, contratista o pensionado, estará obligado a girar los recursos directamente a la entidad operadora". Además autorizo(amos) de la misma forma a COOVITEL, para que haga exigible esta libranza ante la entidad de la cual derive mi salario o pensión o sea beneficiario de algún seguro de vida. PRIMERO: el crédito se pagara con el siguiente plan de amortización:`

                const lines = doc.splitTextToSize(text, 158);
                const lineHeight = 4.5; // Ajusta el valor de altura entre líneas (en puntos)
                doc.setFontSize(8)
                doc.setFont("helvetica", "italic");
                // Dibuja las líneas con el espaciado especificado
                lines.forEach((line: string, i: number) => {
                    doc.text(line, 15, 55 + (i * lineHeight)); // Aplica el espaciado multiplicando por el índice
                });
            }

            console.log(convertirNumeroATexto(datas.monto))


            doc.setFillColor(44, 46, 127)
            doc.roundedRect(16, 118, 176, 8, 0, 0, 'DF')

            doc.setFillColor(254, 254, 254)
            doc.roundedRect(16, 126, 176, 8, 0, 0, 'DF')

            doc.line(60, 118, 60, 134)
            doc.line(104, 118, 104, 134)
            doc.line(148, 118, 148, 134)
            doc.line(192, 118, 192, 134)

            // Tabla de datos
            doc.setTextColor(254, 254, 254)
            doc.text("Tipo de Cuota", 29, 123)
            doc.text("No.Cuotas", 74, 123)
            doc.text("Valor Cuota", 119, 123)
            doc.text("Periocidad Pago", 160, 123)

            doc.setTextColor(0, 0, 0)
            doc.setFontSize(9)
            doc.text("Ordinaria", 32, 131)
            if (datas.credito?.plazo) {
                doc.text(`${datas.credito?.plazo}`, 80, 131)
                const cuota = setValue(pagoMensual(datas.monto, datas.credito?.NMV, datas.credito?.plazo).toString())
                doc.text(`$ ${cuota}`, 118, 131)
            }
            doc.text("Mensual", 164, 131)

            const text2 = `SEGUNDO: Durante el plazo del crédito reconoceré(mos) intereses corrientes a la tasa del ${datas.credito?.NMV} % mensual, intereses que se empiezan a causar desde la fecha del desembolso y que cancelaré(mos) a COOVITEL. TERCERO: En caso de mora reconoceré(mos) la tasa de interés moratoria máxima que permitan las disposiciones legales vigentes, sin perjuicio de las sanciones legales respectivas. En el evento que el descuento no se efectúe al mes siguiente de firmada la libranza o en caso de retiro o suspensión y por el tiempo que dure suspendido el descuento, me(nos) comprometo(emos) y obligo(amos) voluntaria e irrevocablemente a cancelar o girar a COOVITEL, dentro de los cinco (5) primeros días del mes, la cuota correspondiente; así mismo, si se incumple alguna de las cláusulas anteriores, se traslade de inmediato la cuenta total de mi crédito a cargo y costa de mi CODEUDOR. CUARTO: El asociado debe cerciorarse del saldo pendiente con COOVITEL, tan pronto le sean suspendidos los descuentos pactados, puesto que cualquier saldo a cargo genera obligaciones y causa intereses. QUINTO: Nosotros CODEUDORES de esta obligación, aceptamos voluntaria, irrevocable e incondicionalmente todas las responsabilidades que implica nuestra firma en esta documentación.`

            doc.setTextColor(0, 0, 0)
            const lines2 = doc.splitTextToSize(text2, 198);
            const lineHeight2 = 4.5; // Ajusta el valor de altura entre líneas (en puntos)
            doc.setFontSize(8)
            doc.setFont("helvetica", "italic");
            // Dibuja las líneas con el espaciado especificado
            lines2.forEach((line: string, i: number) => {
                doc.text(line, 15, 150 + (i * lineHeight2)); // Aplica el espaciado multiplicando por el índice
            });


            // Cuadros de Firmas Segunda Pagina

            // Firma DEUDOR
            doc.setFont("helvetica", "bold");
            doc.setFillColor(254, 254, 254)
            doc.roundedRect(14, 200, 55, 40, 0, 0, 'DF')
            doc.text("FIRMA DEUDOR", 16, 204)
            doc.line(16, 210, 67, 210)
            doc.text("C.C.", 16, 216)
            doc.line(23, 216, 67, 216)
            doc.text("TEL:", 16, 223)
            doc.line(24, 223, 67, 223)
            doc.text("DIRECCIÓN:", 16, 230)
            doc.line(34, 230, 67, 230)
            doc.line(16, 237, 67, 237)

            // FIRMA CODEUDOR 1
            doc.setFillColor(254, 254, 254)
            doc.roundedRect(76, 200, 55, 40, 0, 0, 'DF')
            doc.text("FIRMA CODEUDOR", 78, 204)
            doc.line(78, 210, 129, 210)
            doc.text("C.C.", 78, 216)
            doc.line(85, 216, 129, 216)
            doc.text("TEL:", 78, 223)
            doc.line(86, 223, 129, 223)
            doc.text("DIRECCIÓN:", 78, 230)
            doc.line(96, 230, 129, 230)
            doc.line(78, 237, 129, 237)

            // FIRMA CODEUDOR 2
            doc.setFillColor(254, 254, 254)
            doc.roundedRect(138, 200, 55, 40, 0, 0, 'DF')
            doc.text("FIRMA CODEUDOR", 140, 204)
            doc.line(140, 210, 191, 210)
            doc.text("C.C.", 140, 216)
            doc.line(147, 216, 191, 216)
            doc.text("TEL:", 140, 223)
            doc.line(148, 223, 191, 223)
            doc.text("DIRECCIÓN:", 140, 230)
            doc.line(158, 230, 191, 230)
            doc.line(140, 237, 191, 237)

            // ELABORO
            doc.setFillColor(254, 254, 254)
            doc.roundedRect(14, 243, 35, 22, 0, 0, 'DF')
            doc.text("ELABORÓ:", 15, 247)
            doc.text("FIRMA", 27, 264)
            doc.line(18, 260, 45, 260)

            // REVISO
            doc.setFillColor(254, 254, 254)
            doc.roundedRect(56, 243, 35, 22, 0, 0, 'DF')
            doc.text("REVISÓ:", 57, 247)
            doc.text("FIRMA", 69, 264)
            doc.line(60, 260, 87, 260)

            // EMPRESA PAGADORA
            doc.setFillColor(254, 254, 254)
            doc.roundedRect(98, 243, 95, 22, 0, 0, 'DF')
            doc.text("EMPRESA PAGADORA::", 99, 247)
            doc.text("FIRMA AUTORIZADA", 105, 264)
            doc.line(102, 260, 135, 260)
            doc.text("FIRMA AUTORIZADA", 155, 264)
            doc.line(151, 260, 186, 260)

            doc.text("Pagina 2/2", 100, 290)
        }


        doc.save('simulacion-rotativo.pdf')
    } catch (error) {
        console.log(error)
    }
}