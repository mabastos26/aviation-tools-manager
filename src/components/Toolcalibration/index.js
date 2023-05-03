import "./styles.css"

const Toolcalibration=()=>{
    return(
        <div className="container-calibration">
            <h2>Registro de Calibrações:</h2>
            <table className="calibration-table">
                <thead>
                    <tr>
                        <td>Data:</td>
                        <td>Responsável</td>
                        <td>validade</td>
                    </tr>
                </thead>
                <tbody >
                        <tr>
                            <td>sdfdfsdf</td>
                            <td>sdfdfsdf</td>
                            <td>sdfdfsdf</td>
                        </tr>
                </tbody>
            </table>
            <h2 hidden={false} style={{color:"green"}}>O item está calibrado!</h2>
                <div className="alerta-cal" hidden={false}>
                    <h2 style={{color:"red"}}>O item não está calibrado!</h2>
                    <button>Registrar calibração</button>
                </div>
    </div>

    )
}

export default Toolcalibration;