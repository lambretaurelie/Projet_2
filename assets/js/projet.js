$(function(){
  $('#validCoordonnees').click(function(){
    //on déclare les variables avec la valeur des coordonnées
    validLastName = $('#LastName').val();
    validFirstName = $('#firstName').val();
    validMail = $('#mail').val();
    validConfirmMail = $('#confirmMail').val();
    validPassword = $('#password').val();
    validConfirmPassword = $('#confirmPassword').val();
    validAddress = $('#address').val();
    validZipCode = $('#zipCode').val();
    validCity = $('#city').val();
    validDeliveryAddress = $('deliveryAddress').val();
    validDeliveryCode = $('#deliveryCode').val();
    validDeliveryCity = $('#deliveryCity').val();
    validPhoneNumber = $('#phoneNumber').val();
    validMobilNumber = $('#mobilNumber').val();
    //création des regexs avec l'ensemble des lettres de l'alphabet en minuscule et majuscule,les accent, les tirets...
    regexLastName = /^[a-zA-Zéèàëïäêaâî\-\s]*$/;
    regexFirstName =/^[a-zA-Zéèàëïäêaâî\-\s]*$/;
    //création d'une regex avec l'ensemble des lettres de l'alphabet en minuscule, les tirets, les chiffres,les  underscores,les points
    regexMail = /^[a-z0-9_.-]+@[a-z0-9_.-]+\.[a-z]{2,6}$/;
    regexConfirmMail = /^[a-z0-9_.-]+@[a-z0-9_.-]+\.[a-z]{2,6}$/;
    regexPassword = /^[a-zA-Zéèàëïäêaâî\-\s]*$/;
    regexConfirmPassword = /^[a-zA-Zéèàëïäêaâî\-\s]*$/;
    //création d'une regex avec l'ensemble des lettres de l'alphabet en minuscule et majuscule, les tirets, les chiffres,les points
    regexAdress = /^[a-zA-Zéèàëïäêaâî\-\s0-9]*$/;
    //création d'une regex avec l'ensemble des chiffres mais limité a 5 chiffres
    regexZipCode = /^[0-9]{5}$/;
    regexCity = /^[a-zA-Zéèàëïäêaâî\-\s]*$/;
    regexDeliveryAddress = /^[a-zA-Zéèàëïäêaâî\-\s0-9]*$/;
    regexDeliveryCode = /^[0-9]{5}$/;
    regexDeliveryCity = /^[a-zA-Zéèàëïäêaâî\-\s]*$/;
    //création d'une regex avec l'ensemble des chiffres
    regexPhoneNumber = /^0[1-9][0-9]{8}$/;
    regexMobilNumber = /^0[1-9][0-9]{8}$/;
    if ((validLastName == "") && (validFirstName == "") && (validMail == "") && (validConfirmMail == "")
    (validPassword == "") && (validConfirmPassword == "") && && (validAddress == "")
    && (validZipCode == "") && (validCity == "") && (validDeliveryAddress == "") && (validDeliveryCode == "")
    && (validDeliveryCity == "") && (validPhoneNumber == "") && (validMobilNumber == "")){
      alert("Merci de compléter correctement le formulaire.");
    }else if (regexLastName.test(validLastName)){
      alert('Votre nom est valide');
    }else{
      alert('Votre nom n\'est pas valide');
    }
    if (regexFirstName.test(validFirstName)){
      alert('Votre prénom est valide');
    }else{
      alert('Votre prénom n\'est pas valide');
    }
    if (regexMail.test(validMail)){
      alert('Votre adresse mail est valide');
    }else{
      alert('Votre adresse mail n\'est pas valide');
    }
    if (regexConfirmMail.test(validConfirmMail)){
      alert('Votre adresse mail est valide');
    }else{
      alert('Votre adresse mail n\'est pas valide');
    }
    if (regexAdress.test(validAddress)){
      alert('Votre adresse postal est valide');
    }else{
      alert('Votre adresse postal n\'est pas valide');
    }
    if (regexZipCode.test(validZipCode)){
      alert('Votre code postal est valide');
    }else{
      alert('Votre code postal n\'est pas valide');
    }
    if (regexCity.test(validCity)){
      alert('Votre Ville est valide');
    }else{
      alert('Votre ville n\'est pas valide');
    }
    if (regexDeliveryAddress.test(validDeliveryAddress)){
      alert('Votre adresse de livraison est valide');
    }else{
      alert('Votre adresse de livraison n\'est pas valide');
    }
    if (regexDeliveryCode.test(validDeliveryCode)){
      alert('Votre code postal de livraison est valide');
    }else{
      alert('Votre code postal de livraison n\'est pas valide');
    }
    if (regexDeliveryCity.test(validDeliveryCity)){
      alert('Votre Ville de livraison est valide');
    }else{
      alert('Votre Ville de livraison n\'est pas valide');
    }
    if (regexPhoneNumber.test(validPhoneNumber)){
      alert('Votre numéro de telepnone est valide');
    }else{
      alert('Votre numéro de telepnone n\'est pas valide');
    }
    if (regexMobilNumber.test(validMobilNumber)){
      alert('Votre numéro de mobil est valide');
    }else{
      alert('Votre numéro de mobil n\'est pas valide');
    }
  });
});
