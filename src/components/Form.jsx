import Button from "./Button"

const Form = () => {
  return (
    <form>
      <label htmlFor="guess">
        <input 
          name="guess" 
          placeholder="Enter number..."
          required 
        />
      </label>
      <Button>Guess</Button>
    </form>
  )
}

export default Form