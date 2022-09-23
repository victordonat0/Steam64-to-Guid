function guid_get(){
  var uid = document.getElementById('uid').value;
  
    
    var steamId = bigInt(uid);

    var parts = [0x42,0x45,0,0,0,0,0,0,0,0];

    for (var i = 2; i < 10; i++) {
      var res = steamId.divmod(256);
      steamId = res.quotient; 
      parts[i] = res.remainder.toJSNumber();
    }

    var wordArray = CryptoJS.lib.WordArray.create(new Uint8Array(parts));
    var hash = CryptoJS.MD5(wordArray);
    // console.log(hash.toString());
    document.getElementById("guid").value = hash.toString();
    

};
