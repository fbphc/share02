import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Form>
        <FormGroup>
          <Input required name="email" placeholder="Email" type="email" />
        </FormGroup>
        <FormGroup>
          <Input required name="password" placeholder="password" type="password" />
        </FormGroup>

        <Button>Login</Button>
      </Form>
      <div>
      <p>don't have an account? please register</p>
      <Link to="/register">Register</Link>
      </div>
    </div>
  );
}
