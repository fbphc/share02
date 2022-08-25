import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Input } from 'reactstrap'

export default function Login() {
  return (
    <div>

        <h1>Login</h1>
        <Form>
  <FormGroup>
    <Input
      name="email"
      placeholder="Email"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Input
      name="password"
      placeholder="password"
      type="password"
    />
  </FormGroup>
  
  <Button>
    Login
  </Button>
</Form>

<Link to='/register' >Register</Link>
    </div>
  )
}
