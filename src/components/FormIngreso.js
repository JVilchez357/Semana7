function FormIngreso({handlerClick}){
    return(
        <>
            <label from="numMin">Valor minimo: </label>
            <input type="number" id="numMin" name="numMin"></input>
            <br/>
            <label from="numMax">Valor maximo: </label>
            <input type="number" id="numMax" name="numMax"></input>
            <br/>
            <label from="cantRandom">Cantidad: </label>
            <input type="cantRandom" id="cantRandom" name="cantRandom"></input>
            <br/>
            <button type="button" onClick={handlerClick}>Generar numeros</button>
        </>
    );
}
export default FormIngreso;