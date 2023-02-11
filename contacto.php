<?

$name = $_POST['name'];         // Nombre persona que envia el correo    
$from = $_POST['email'];        // Quien lo envia
$message = $_POST['message'];

echo "Entro en correo\n";


echo "<br>$name - $from - $message<br>"; 
//exit;

echo "Enviando mensaje\n";
//$to      = "info@ekcuma.es";       // Para correo EKC//$to = "roberto.torresserrano@gmail.com";
$to      = "ekc@uma.es";
$subject = "Web EKC23 de $name";   // Asunto del correo
$headers = "From:" . $from;        // Correo de quien nos escribe     

$success = mail($to,$subject,$message,$headers);
if (!$success) {
    $errorMessage = error_get_last()['message'];
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no",  viewport-fit="cover">
     <!-- Enlaces para obtener las tipografías -->
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Noto+Sans&display=swap" rel="stylesheet">
    <style> @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Noto+Sans&display=swap'); </style>
    <link rel="icon" type="image/x-icon" href="/resources/main/favicon.png" />
    <!-- Enlace a la página de estilos de este contacto.html -->
    <link href="Styles/style-contacto.css" rel="stylesheet" type="text/css">
    <link href="Styles/navbar-mobile.css" rel="stylesheet" type="text/css">
    <title>Ekc23</title>
</head>
<body>
     <!-- Navbar -->
    <div class="nav">
        <div class="logo">
            <a href="index.html"><img src="resources/main/EKC_23_ARTE EXPRES_Isotipo.png" alt="isotipo"></a>
        </div>
        <!-- Enlace a la navegación encapsulada que realiza un desplagable en 
            dispositivos menores de 480px -->
            <nav>
                <div class="pages">
                  <div class="container nav-container">
                      <input class="checkbox" type="checkbox" name="" id="" />
                      <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                      </div>  
                   
                    <div class="menu-items">
                        <li id="dropdown"><a rel="EKC" href="index.html">EKC23</a>
                            <ul id="dropdown-options">
                                <li><a href="#">EKC22</a></li>
                            </ul>
                        </li>
                        <li><a href="podcast.html">Podcast</a></li>
                        <li><a href="equipo.html">Equipo</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                    </div>
                  </div>
                </div>
              </nav>
    </div>
     <!-- Contenido Principal de la Página -->
    <div class="contenido-principal">
        <div class="text-container">
            <div style="padding-top:130px;padding-left:60px;padding-bottom:180px;padding-right:60px;text-align:center;">
                <p style="font-size:32px;">¡Correo enviado!</p><br>
                <p style="font-size:28px;">Nuestro equipo te responderá lo más rápido posible</p><br>
                <div style="display: flex;justify-content: center;">
                    <img src="resources/contacto/opcion 4.png" alt="Contacto">
                </div>    
            </div>    
        </div>
    </div>


             <!-- Footer -->
             <div class="footer">
                <div id="nav-footer">
                    <ul>
                        <li><a href="index.html">EKC23</a></li>
                        <li><a href="podcast.html">Podcast</a></li>
                        <li><a href="equipo.html">Equipo</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                    </ul>
                </div>
                <div class="info">
                    <p>Sitio web creado por el equipo de desarrollo web de EKC23</p>
                    <p>Aviso Legal | Política de Cookies | Política de Privacidad | Configuración de Cookies</p>
                </div>
                <div class="redes">
                    <p>Siguenos en:</p>
                    <a href="https://www.instagram.com/ekc23uma/?igshid=YmMyMTA2M2Y%3D" ><img id="instagram" src="resources/main/instablanco.png" alt="instagram"></a>
                    <a href="https://twitter.com/EKCArteExpres?s=20&t=lGtfY5Qsgq6KAlaWXKTRWQ" ><img id="twitter" src="resources/main/twitterblanc3.png" alt="twitter"></a>
                    <a href="https://www.tiktok.com/@ekc_arteexpres?_t=8ZBPM2OUUsf&_r=1"><img id="tiktok" src="resources/main/tiktokblanc.png" alt="tiktok"></a> 
                    <a href="" ><img id="spotify" src="resources/main/spotisoloblanc.png" alt="spotify"></a>
                </div>
            </div>
            <!-- Enlace de script al javascript de la página -->
        <script src="js/contacto.js"></script>
    </body>
</html>

