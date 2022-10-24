export function BemVindo() {
  const handleClick = (userName) => {
    alert(`Bem vindo ${userName}`)
  }
  return (
    <button onClick={() => handleClick('Renan')}>Clique aqui</button>
  )
}