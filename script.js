function verificar () {
    var data = new Date ()
    var ano = data.getFullYear() //ano atual
    var fano = document.getElementById('txtano')
    var res = document.querySelector ('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){

    window.alert('[ERRO]Verifique os dados e corrija-os!')

    } else if (Number(fano.value) < 1900) {

        window.alert('[ERRO] Limite mínimo ultrapassado!')
        
    } else {

        var fsex = document.getElementsByName('radsex') //ambos elementos precisam ter mesmo nome
        var idade = ano - Number(fano.value) //ano atual - ano digitado
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')

        if (fsex[0].checked){
            
            genero = 'Homem'
            document.body.style.background = '#b1cbff'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancam.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adultom.png')
            } else {
                img.setAttribute('src', 'idosom.png')
            }

        } else if (fsex[1].checked) {
            document.body.style.background = '#b1cbff'
            genero = 'Mulher'

            if (idade >= 0 && idade < 10){
                    img.setAttribute('src', 'criancaf.png')
                } else if (idade < 21) {
                    img.setAttribute('src', 'jovemf.png')
                } else if (idade < 50){
                    img.setAttribute('src', 'adultof.png')
                } else {
                    img.setAttribute('src', 'idosof.png')
                }
        } else {
            genero = 'LGBT+'
            var backimg = document.body.style.backgroundImage = "url('bandeiralgbt.png')"
            
            if (idade >= 0 && idade < 10){
                    img.setAttribute('src', 'lgbt.png')
                } else if (idade < 21) {
                    img.setAttribute('src', 'lgbt.png')
                } else if (idade < 50){
                    img.setAttribute('src', 'lgbt.png')
                } else {
                    img.setAttribute('src', 'lgbt.png')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e tem ${idade} anos!`
        res.appendChild(img)
    
    }
}