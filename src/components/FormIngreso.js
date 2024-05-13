function FormIngreso({handlerClick}){
    return(
        <>
            <label from="cantRandom">Cantidad: </label>
            <input type="number" id="cantRandom" name="cantRandom"></input>
            <br/>
            <button type="button" onClick={handlerClick}>Generar numeros</button>
        </>
    );
}
export default FormIngreso;