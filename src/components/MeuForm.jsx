export function MeuForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    alert(data.userName);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="userName" id="userName" />
      <button type="submit">Enviar</button>
    </form>
  )
}