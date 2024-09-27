import jsPDF from "jspdf";
import { Datas } from "../store/datas/types";

export function downloadPDF(datas: Datas) {
    try {
        const doc = new jsPDF()

        doc.addImage('images/cr.jpg', 'PNG', 15, 10, 180, 24)
        console.log(datas)

        // doc.setFillColor(242, 242, 252)
        doc.setFillColor(254, 254, 254)
        // Cuadro 1
        doc.roundedRect(10, 45, 190, 45, 0, 0, 'DF')
        // Lineas Horozontales
        doc.line(10, 51.4, 200, 51.4)
        doc.line(10, 57.8, 200, 57.8)
        doc.line(10, 64.2, 200, 64.2)
        doc.line(10, 70.6, 200, 70.6)
        doc.line(10, 77, 200, 77)
        doc.line(10, 83.4, 200, 83.4)
        // Lineas Verticales
        doc.line(57.5, 45, 57.5, 90)
        doc.line(105, 51.4, 105, 90)
        doc.line(152.5, 51.4, 152.5, 90)

        // Cuadro 2
        doc.roundedRect(45, 103, 120, 40, 1, 1, 'DF')
        // Lineas Horzontales
        doc.line(45, 109.66, 165, 109.66)
        doc.line(45, 116.32, 165, 116.32)
        doc.line(45, 122.98, 165, 122.98)
        doc.line(45, 129.64, 165, 129.64)
        doc.line(45, 136.3, 165, 136.3)
        // Linea Vertical
        doc.line(105, 103, 105, 143)
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(15)
        doc.text("Condiciones de la Simulación", 66, 41)
        doc.text("Condiciones Cupo Solicitado", 68, 100)

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

        doc.line(16, 210, 120, 210)
        doc.line(16, 226, 120, 226)
        doc.line(16, 242, 120, 242)

        // Huella
        doc.setFillColor(254, 254, 254)
        doc.roundedRect(150, 210, 32, 30, 0, 0, 'DF')

        // Cuadro Final
        doc.roundedRect(16, 255, 180, 28, 0, 0, 'DF')

        doc.save('simulacion-rotativo.pdf')
    } catch (error) {
        console.log(error)
    }
}