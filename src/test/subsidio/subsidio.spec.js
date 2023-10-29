"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
//import * from "../../src/solicitud"
const subsidio_1 = require("../../src/subsidio");
//const app = createServer();
describe("valida el calculo del subsidio", function () {
    it("solicitud rechazada", function () {
        //given
        const slc_Juan = {
            nombre: "Juan Alvarado",
            cedula: "13253840",
            estrato: 4,
            valor_vivienda: 45000000,
            tiene_vivienda: true
        };
        //when
        const rpt = (0, subsidio_1.calcularSubsidio)(slc_Juan);
        //then
        chai_1.assert.equal(rpt.aprobado, false);
    });
    it("solicitud aceptada, subsidio40", function () {
        //given
        const slc_Pedro = {
            nombre: "Pedro Suarez",
            cedula: "60342562",
            estrato: 2,
            valor_vivienda: 45000000,
            tiene_vivienda: false
        };
        //when
        const rpt = (0, subsidio_1.calcularSubsidio)(slc_Pedro);
        //then
        chai_1.assert.equal(rpt.aprobado, true);
        chai_1.assert.equal(rpt.monto, 40000000);
    });
    it("solicitud aceptada, subsidio4", function () {
        //given
        const slc_Luisa = {
            nombre: "Luisa",
            cedula: "25678453",
            estrato: 3,
            valor_vivienda: 45000000,
            tiene_vivienda: false
        };
        //when
        const rpt = (0, subsidio_1.calcularSubsidio)(slc_Luisa);
        //then
        chai_1.assert.equal(rpt.aprobado, true);
        chai_1.assert.equal(rpt.monto, 4000000);
    });
});
