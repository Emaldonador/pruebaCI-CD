import { respuesta } from "respuesta_solicitud";
import { solicitud } from "solicitud";

export  function calcularSubsidio(sol:solicitud):respuesta{
    const r:respuesta= {
        aprobado:false,
        monto:0
    }
    if (!sol.tiene_vivienda){

        if (sol.valor_vivienda<60000000){
            
            if (sol.estrato<=2 ){
                r.aprobado = true;
                r.monto =40000000;
            }else{
                r.aprobado = true;
                r.monto =4000000;
            }
        }
    }
    return r;
}