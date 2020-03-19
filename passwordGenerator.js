function changeVocals (str) {
    //code di sini
    var simpan=''
    for (var i = 0; i < str.length; i++) {
        switch(str[i]){
            case 'a':
                simpan+='b'
                break
            case 'i':
                simpan+='j'
                break
            case 'e':
                simpan+='f'
                break
            case 'u':
                simpan+='v'
                break
            case 'o':
                simpan+='p'
                break
            case 'A':
                simpan+='B'
                break
            case 'I':
                simpan+='F'
                break
            case 'E':
                simpan+='F'
                break
            case 'O':
                simpan+='P'
                break
            case 'U':
                simpan+='V'
                break
            default:
                simpan+=str[i]
        }     
    }
    return simpan
  }

  function reverseWord (str) {
    //code di sini
    var balik=''
    for (var i = str.length-1; i >=0; i--) {
        balik+=str[i]
    }
    return balik
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var temp=''
    for (var i = 0; i < str.length; i++) {
        if(str[i]==str[i].toUpperCase())
        {
            temp+=str[i].toLowerCase()
        }
        else {
            temp+=str[i].toUpperCase()
        }  
    }
    return temp
  }
  
  function removeSpaces (str) {
    //code di sini
    var simpan=''
    for (var i = 0; i < str.length; i++) {
        if(str[i]==' ')
        {
            for (var j = i; j < str.length; j++) {
                simpan+=str[i+1]
                if(j=str.length-1)
                {
                    break
                }
            }
        }
        else {
            simpan+=str[i]
        }
    }
    return simpan
  }
  
  function passwordGenerator (name) {
    //code di sini
    var gantiVocal=changeVocals(name)
    var balikKata=reverseWord(gantiVocal)
    var salingBalik=setLowerUpperCase(balikKata)
    var hapusSpasi=removeSpaces(salingBalik)
    return hapusSpasi
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'