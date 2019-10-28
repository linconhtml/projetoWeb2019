
		validacao = function(){
			
		};



        validacao.prototype.ValidarCampos = function (){
	  	elementoUsuario = document.getElementById("txtUsuario");
  		UsuarioDigitado = elementoUsuario.value;
  		
  		elementoSenha = document.getElementById("txtSenha");
  		SenhaDigitada = elementoSenha.value;
  		
  		if (UsuarioDigitado=="" || SenhaDigitada==""){
  			
  			alert("usuario e senha precisam ser preenchidos");
  			return false;
  			
  		} else{
  			return true;
  		}
   	}
        
        aut = new validacao();
