import React from "react";

export default function Footer(){  

    return (
        <footer>
            <article className="container_footer">
                <div className="box-footer">
                { <div className="logo">
                        <img src="./img/logo.png " />
                    </div> }
                    <div className="terms">
                    </div>
                </div>
                
                <div className="box-footer">
                    <h2> NOSOTROS </h2>
                    <a href="#">¿Quiénes somos?</a>
    
                    <a href="#">Información coorporativa</a>
    
                    <a href="#">Trabajá con nosotros</a>
    
                    <a href="#">Contacto</a>
                </div>
    
                <div className="box-footer">
                    <h2> AYUDA </h2>
                    <a href="#">Preguntas frecuentas</a>
    
                    <a href="#">Términos de uso</a>
    
                    <a href="#">Preferencia de cookies</a>
    
                    <a href="#">Privacidad</a>
                </div>
                
                <div className="box-footer">
                    <h2> REDES SOCIALES </h2>
                
                    <a href="#"> <i className="fab fa-instagram"></i> Instagram</a> 
                       
                    <a href="#"><i className="fab fa-facebook-square"></i> Facebook</a>
                        
                    <a href="#"><i className="fab fa-youtube"></i> Youtube</a>
                       
                    <a href="#"><i className="fab fa-amazon"></i> Amazon</a>              
                </div>
             
                <div className="box-copyright">
                    <p className="integrantes"> B.R.A Music es un servicio de música gratuito que tiene como objetivo que todas las personas puedan accerder a contenido de calidad. Surge como una iniciativa de la coorporativa B.R.A S.A, encabezada y desarrollada por sus dueños fundadores Benjamin Peña, Roberto Arellano y Ana Teperman.</p>
                    <hr/>
                    <p className="derechos">Todos los derechos reservados <i className="far fa-copyright"></i> 2022 <b>B.R.A Music</b></p>
                </div>
            </article>
        </footer>
    )

}