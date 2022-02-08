// const persona = {
// 	nombre: 'juanito'
// };
// //operadores spread {...<object>} -- para hacer una copia de todo el objeto
// const persona2 = {...persona};
// persona2.nombre = 'alcachofa';
// console.log(persona2,persona);

// const arreglo = [];

// arreglo.push(0);
// arreglo.push(1);
// arreglo.push(2);

// console.log(arreglo);

// //función

// function gaa(name){
// 	return  `Holas, ${name}`;
// }
// //función de fleca
// const salud2 = (nombre)=>{
// 	return `hola, ${nombre}`;
// }

// //función flecha simplificada
// const simpl = name => 'Esto '+name;
// //ninja
 
const ninja = {
	nombre: 'Itachi',
	apellidos: 'Uchiha',
	edad:13,
	aldea:'konoha',
	equipo:'Ambu',
	poderes:{
		power1: 'Ninjutsu',
		power2: 'Sharinagan',
		power3: 'Mangekyo Sharingan',
		power4: 'Taaijutsu'
	}
}

const fun = ({nombre, apellidos, edad, aldea, equipo} )=>
{
	return{
		nnombre: nombre,
		aapellidos: apellidos
	};
}
const {nnombre,aapellidos} = fun(ninja)
console.log(nnombre,aapellidos)
// const {nombre,apellidos,edad,aldea,poderes:{power1,power2,power3,power4}} = ninja;



// console.log (`Es ${nombre} ${apellidos} con ${edad} años de edad de la aldea de  ${aldea} y el tiene el ${power3} `);

// // console.log(simpl('aea'))
// // console.log( salud2('asas'))