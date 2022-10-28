function guid_get(){
  const uid = document.getElementById('uid').value;
  
    
    let steamId = bigInt(uid);

    let parts = [0x42,0x45,0,0,0,0,0,0,0,0];

    for (var i = 2; i < 10; i++) {
      let res = steamId.divmod(256);
      steamId = res.quotient; 
      parts[i] = res.remainder.toJSNumber();
    }

    let wordArray = CryptoJS.lib.WordArray.create(new Uint8Array(parts));
    let hash = CryptoJS.MD5(wordArray);
    // console.log(hash.toString());
    document.getElementById("guid").value = hash.toString();
    

};
