let participantes = [
  {
    nome: "Madyson Willyan", 
    email: "madyson@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Jonathan Diego",
    email: "jonathandiego@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Willyane Eunice",
    email: "willyane@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Wilson Alves",
    email: "wilson@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Mariluce Alves",
    email: "mariluce@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
  }, 
  {
    nome: "Gustavo Augusto",
    email: "gustavo@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Marluce Alves",
    email: "marluce@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Ricardo Da Silva",
    email: "ricardo@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Jonas Da Silva",
    email: "jonas@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Gilvan Alves",
    email: "gilvan@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)
  
 let dataCheckIn = dayjs(Date.now())
 .to(participante.dataCheckIn)

  if(participante.dataCheckIn == null) {
     dataCheckIn= `
     <button
     data-email= "${participante.email}"
     onclick= "fazerChecIn(event)"
     >
     Confirmar check-in
     </button>
     `
}
  
  return `
    <tr>
      <td> 
        <strong>
        ${participante.nome}
        </strong>
        <br>
        <small>
        ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
  `;
};

const atualizarLista = (participantes) => {
  let output = ""
  for(let participante of participantes){
    output = output + criarNovoParticipante(participante)
  }
  document
  .querySelector('tbody')
  .innerHTML = output
};

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email:dadosDoFormulario.get('email'),
    dataInscricao: new Date (),
    dataCheckIn: null
  } 

  const participanteExiste= participantes.find( (p) => p.email == participante.email

)
 if (participanteExiste){
  alert('Email já cadastrado!')
  return
 }
  participantes= [participante,...participantes]
  atualizarLista(participantes)

  //limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value= ""

}
 
 const fazerChecIn= (event) => {
  // confirmar se realmente quer check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
   if(confirm(mensagemConfirmacao) == false) {
    return 
   }

  alert(resultado) // true ou false - boolean 
  // encontrar o participante dentro da lista
  const participante = participantes.find((p) => p.email == event.target.dataset.email
  ) 
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()

  atualizarLista(participantes)
 }
