import { FormC } from "./FormStyles"
import ButtonMain from "../buttons/ButtonMain"

function FormContact() {
  return (
    <FormC>
        <label htmlFor="name">Full Name<input type="text" name="name"/> </label>
        <label htmlFor="email">Email Address<input type="email" name="email"/> </label>
        <label htmlFor="phone">Phone Number<input type="number" name="phone"/> </label>
        <label htmlFor="subject">Subject<input type="text" name="subject"/> </label>
        <label htmlFor="message">Please type your message here... <textarea id="message" name="message" /></label>
        <ButtonMain/>
    </FormC>
  )       
}

export default FormContact
