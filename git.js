//comandos GIT BASH

//Git Bash es un software de control de versiones que registra cambios realizados recuperando y teniendo acceso a versiones anteriores especificas.

//Git Hub es un sitio web donde alojamos nuestros archivos y proyectos de programacion.

//Repositorio : es el lugar donde se almacenan los archivos de nuestros proyectos

//Seguimiento : se dice que un archivo esta en seguimiento cuando es agregado al repositorio y luego de eso se hace un commit informando de algun cambio hecho en el proyecto.

//COMANDOS GIT

`git init` //crea un repositorio

//un repositorio es como un directorio destinado al seguimiento de un proyecto.

`git config user.name "nombre"`  // nos identificamos como participe de ese repositorio en el cual vamos a actualizar cambios
`git config user.email "email"` // nos identificamos con el mail con el que nos registramos en la pagina de git hub 

`git status`  // revisamos el estado de los archivos que contiene la carpeta actual en la que estamos

`git add .`   //añadimos a seguimiento el archivo indicado o los que contenga la carpeta
`git add nombre.extencion`

`git commit -m "comentario"` //indicamos el commit que indicaria el ultimo cambio que se hizo en el repositorio

`git remote add origin urlDelRepositorioRemoto` //con este comando enlazamos el repositorio local con el remoto,la url se adquiere de la pagina donde esta el repositorio remoto.

`git remote -v` //para verificar si fue realizado el enlace entre repositorios

`git push origin master` // push indica que vamos a subir el cambio realizado al Git Hub 
// para que nos permita subir esta informacion al repositorio remoto es necesario que el o los archivos esten en seguimiento y con su ultimo commit realizado, sino, no nos va aparecer reflejado en la pagina de GitHub.

`git clone urlDelRepositorioRemoto`  //con este comando clonamos el repositorio en cualquier parte de nuestra computadora siempre y cuando tenga enlazado el repositorio local y el remoto.

`git pull origin master` // con pull lo que hacemos es actualizar los archivos en nuestro repositorio local por si alguno de los participantes de nuestro proyecto haya alterado algo en la version del proyecto en el repositorio remoto.
//master: se refiere a la rama principal del repositorio
//origin: es el nombre predeterminado que recibe el repositorio remoto principal contra el que trabajamos

`git log` // imprime la informacion de las versiones del repositorio,la informacion que nos imprime es: autor,email,fecha y hora, y los commit realizado incluyendo la de los participantes del proyecto

`git update-git-of-windows -y` //con este comando mantenemos el Git Bash actualizado a la ultima version, el -y nos sirve para aceptar cualquier ventana que nos vaya apareciendo para la actualizacion de git.

`git --version` //nos imprime la version de nuestro git instalado

`git config --global user.name "name"` 
`git config --global user.email "email"`   //  --global nos sirve para dejar en nuestra pc la identidad fija para cualquier repositorio que haya. De esa manera no tendremos que indicar en cada repositorio que creemos nuestro nombre y email.