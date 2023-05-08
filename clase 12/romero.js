const a=[];
const b=[];
let aux=[];
let num1;
let num2;
let suma=[];
function Cargar() {
    num1=parseInt(document.getElementById("num1").value)
    num2=parseInt(document.getElementById("num2").value) 
    a.push(num1)
    b.push(num2)
    alert("valores del arreglo a: "+a);
    alert("valores del arreglo b: "+b);
}
function Cambio (a,b,aux) {
    document.write("nums originales del arreglo a: "+a+"<br>")
    document.write("nums originales del arreglo b: "+b+"<br>")
    for (i=0; i<a.length; i++){
        aux[i]=a[i]
        a[i]=b[i]
        b[i]=aux[i]
    } 
    document.write("arreglo a con nums intercambiados: "+a+"<br>")
    document.write("arreglo b con nums intercambiados: "+b)
}
function Sumar (a,b) {
    for (i=0; i<a.length; i++) {
        suma[i]=(a[i]+b[i])
    }
    document.write("nums del arreglo a: "+a+"<br>")
    document.write("nums del arreglo b: "+b+"<br>")
    document.write("nums de la suma de los arreglos a y b: "+suma)
}