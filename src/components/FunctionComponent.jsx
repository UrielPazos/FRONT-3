/* eslint-disable react/prop-types */
const Padre = (props) => {
    return (
    <div>
    <h1>Este es un h1 de componente de funcion </h1>
    {props.children}
    </div>
);
};

const Hijo = (props) => {
return (
    <div>
        <h1>Este es el Hijo que se llama {props.nombre}</h1>
    </div>
);
};

export { Padre, Hijo };
