import request from "supertest";
import { assert, expect } from "chai";
import { solicitud } from "solicitud";
import { respuesta } from "respuesta_solicitud";
//import * from "../../src/solicitud"

import {calcularSubsidio} from "../../src/subsidio";
//const app = createServer();

describe("valida el calculo del subsidio", function(){
    
    it("solicitud rechazada", function(){
        //given
        const slc_Juan:solicitud = {
            nombre: "Juan Alvarado",
            cedula:"13253840",
            estrato: 4,
            valor_vivienda: 45000000,
            tiene_vivienda: true
        }
        //when
        const rpt:respuesta = calcularSubsidio(slc_Juan);
        //then
        assert.equal(rpt.aprobado, false);
    })

    it("solicitud aceptada, subsidio40", function(){
        //given
        const slc_Pedro:solicitud = {
            nombre: "Pedro Suarez",
            cedula:"60342562",
            estrato: 2,
            valor_vivienda: 45000000,
            tiene_vivienda: false
        }
        //when
        const rpt:respuesta = calcularSubsidio(slc_Pedro);
        //then
        assert.equal(rpt.aprobado, true);
        assert.equal(rpt.monto, 40000000);
    })
    
    it("solicitud aceptada, subsidio4", function(){
        //given
        const slc_Luisa:solicitud = {
            nombre: "Luisa",
            cedula:"25678453",
            estrato: 3,
            valor_vivienda: 45000000,
            tiene_vivienda: false
        }
        //when
        const rpt:respuesta = calcularSubsidio(slc_Luisa);
        //then
        assert.equal(rpt.aprobado, true);
        assert.equal(rpt.monto, 4000000);
    })
});
