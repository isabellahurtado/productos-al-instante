jQuery(document).ready(function($){
  //Verificación de registro
  $('.registro').on(
    'submit',
    function(e){
      e.preventDefault();

      var name = $('#name').val();
      var email = $('#email').val();
      var password = $('#password').val();

      if(!name){
        alert('Ingresa un nombre');
      }else if(!email){
        alert('Ingresa un correo');
      } else if(!password){
        alert('Ingresa una contraseña');
      } else{
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function(){
          alert('Bienvenido!');
        })
        .catch(function(error) {
         alert('Hubo un error, intenta de nuevo');
       });
   }
 }
);

  //Verificación de ingreso        
  $('.ingreso').on(
    'submit',

    function(e){
      e.preventDefault();

      var email = $('#email').val();
      var password = $('#password').val();

      if(!email){
        alert('Ingresa un correo');
      } else if(!password){
         alert('Ingresa una contraseña');
      } else{
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function(){
         location.href="tiendas.html"
        })
        .catch(function(error) {
          alert('Crea una cuenta');
        });
      }
    }) 
 });