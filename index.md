fronteditor.dev/nlw-unite
# HTML

*Hypertext*
*Markup*
-TAG
-ATRIBUTOS
*Language*

# CSS
/* Cascading StyleSheet*/
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
COMEÇAR POR ISSO NO CSS

# JavaScript
```js
// variaveis
const mensagem = "Oi, tudo bem?"
// tipos de dados
 //number
 //string
//funcao
alert(mensagem)
// objeto javascript
const participante = {
  nome: "Madyson Willyan",
  email: "madyson@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19,20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

// array
let participantes = [
  {
  nome: "Madyson Willyan",
  email: "madyson@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19,20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}
]
for (let participante of participantes) {
   output = output + criarNovoParticipante(participante)
   // faça alguma coisa aqui
   // enquanto tiver participantes nessa lista

  } 
   if(participante.dataCheckIn == null)
      dataCheckIn = `
      
       const fazerCheckIn = (event) => {
      // Lógica para fazer o check-in do participante