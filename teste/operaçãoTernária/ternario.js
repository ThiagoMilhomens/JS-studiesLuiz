const pontuacaoUsuario = 1000
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'

console.log(nivelUsuario(500))
// Usuário VIP

const corUsuario = null
const corPadrao = corUsuario || 'Preto'

console.log(corPadrao)
// Preto
