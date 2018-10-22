$(function(){
  $('#validCoordonnees').click(function(){
    //on déclare les variables avec la valeur des coordonnées
    validLastName = $('#LastName').val();
    validFirstName = $('#firstName').val();
    validMail = $('#mail').val();
    validAddress = $('#address').val();
    validDeliveryAddress = $('deliveryAddress').val();
    validPhoneNumber = $('#phoneNumber').val();
    //création des regexs avec l'ensemble des lettres de l'alphabet en minuscule et majuscule,les accent, les tirets...
    regexLastName = /^[a-zA-Zéè\-\s]*$/;
    regexFirstName = /^[a-zA-Zéè\-\s]*$/;
    //création d'une regex avec l'ensemble des lettres de l'alphabet en minuscule, les tirets, les chiffres,les  underscores,les points
    regexMail = /^[a-z0-9_.-]+@[a-z0-9_.-]+\.[a-z]{2,6}$/;
    //création d'une regex avec l'ensemble des lettres de l'alphabet en minuscule et majuscule, les tirets, les chiffres,les points
    regexAdress = /^[a-zA-Zéèà\-\s0-9]*$/;
    regexDeliveryAddress = /^[a-zA-Zéèà\-\s0-9]*$/;
    //création d'une regex avec l'ensemble des chiffres
    regexPhoneNumber = /^0[1-9][0-9]{8}$/;
    if ((validLastName == "") && (validFirstName == "") && (validMail == "") && (validAddress == "") && (validDeliveryAddress == "") && (validPhoneNumber == "")){
      alert("Merci de compléter correctement le formulaire.");
    }else if (regexLastName.test(validLastName)){ // on verifie notre regex
      alert('Votre nom est valide');
    }else{
      alert('Votre nom n\'est pas valide');
    }
    if (regexFirstName.test(validFirstName)){ // on verifie notre regex
      alert('Votre prénom est valide');
    }else{
      alert('Votre prénom n\'est pas valide');
    }
    if (regexMail.test(validMail)){ // on verifie notre regex
      alert('Votre adresse mail est valide');
    }else{
      alert('Votre adresse mail n\'est pas valide');
    }
    if (regexAdress.test(validAddress)){ // on verifie notre regex
      alert('Votre adresse postal est valide');
    }else{
      alert('Votre adresse postal n\'est pas valide');
    }
    if (regexDeliveryAddress.test(validDeliveryAddress)){ // on verifie notre regex
      alert('Votre adresse de livraison est valide');
    }else{
      alert('Votre adresse de livraison n\'est pas valide');
    }
    if (regexPhoneNumber.test(validPhoneNumber)){ // on verifie notre regex
      alert('Votre numéro de telepnone est valide');
    }else{
      alert('Votre numéro de telepnone n\'est pas valide');
    }
  });
});
