console.log('Pre-entrega 2 en funcionamiento');

let ingreso=0
let plazo=0
let TNA=0
let monto=0;
let Credito=[];
let Credito1=[];
let info=0;
let C=0;
let nuevop=0;
let flag1 = true;
const boton = document.querySelector('#boton')


function calculoCredito(TNA,ingreso,plazo){
    let j=TNA/12;
    C=(monto*j*(1+j)**plazo)/((1+j)**plazo-1);
    let Tp=0;
    let tpi=0;
    let Si=0;
    let ip=0;
    let Si0=monto;
    for(i=1;i<=plazo;i++){
        tpi=C-Si0*j-Si*j;    
        Tp=Tp+tpi;    
        Si=monto-Tp;
        ip=C-tpi;
        Si0=0
        Credito.push({Periodo:  i.toFixed(0), Capital:  tpi.toFixed(2) , Interes:  ip.toFixed(2), Saldo: Si.toFixed(2)});
    }
}
function visualizar(elemento){
        title.innerText = `Su credito ha sido calculado por un monto de: $${monto} a devolver en un plazo de: ${plazo} meses con una TNA de: ${TNA.toFixed(4)*100}% y un valor de cuota fija de: $${C.toFixed(2)}`
        const{Periodo,Capital,Interes,Saldo}=Credito1[elemento-1];
        nuevop = document.createElement('li')
        nuevop.innerText=`El Periodo: ${Periodo} esta compuesto por $${Capital} de capital + $${Interes} de interes y resta pagar un saldo de: $${Saldo}` 
        document.body.append(nuevop)
              
}




    
  
function guardar (Credito){
    localStorage.setItem("Credito1",JSON.stringify(Credito));
        
    }
function extraer (){
    Credito1 = JSON.parse(localStorage.getItem("Credito1"))
}

    function ejecucion (){
        localStorage.clear
        const in1= document.getElementById('ingreso');
        ingreso = in1.value ;
        const in2= document.getElementById('plazo') ;
        plazo = in2.value ;
        const elec= document.getElementById('eleccion') ;
        info = elec.value;
        monto=(ingreso*.2*plazo);
        TNA=10000/(ingreso/plazo);
        calculoCredito(TNA,monto,plazo);
        guardar(Credito);  
        extraer();
        visualizar(info);
        Credito=[];
        flag1 = false;
    
       
    }



boton.addEventListener('click', ()=>{ 

    flag1 ? ejecucion() : alert('Para ingresar nuevos valores presione RESET');
    
  
})
boton2.addEventListener('click', ()=>{ 
    location.reload();       
})

