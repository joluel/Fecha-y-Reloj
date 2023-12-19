const hora = document.getElementById("time");
const fecha = document.getElementById("date");
const diaSemana = ["Domingo", "Lunes", "Martes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const mesesAnio = ["Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const reloj = setInterval(()=> {
    const local = new Date();

    let day = local.getDay();
    let dia = local.getDate();
    let mes = local.getMonth()
    let anio = local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${diaSemana[day]}, ${dia} ${mesesAnio[mes]} ${anio}`;
}, 1000)

