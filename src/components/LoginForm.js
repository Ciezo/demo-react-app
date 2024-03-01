import React from "react";

function LoginForm() {
  return (
    <>
      <div>
        <form
          class="needs-validation p-4 p-md-5 border rounded-3"
          novalidate
          action=""
          method=""
        >
          <div class="form-group mb-3">
            <label for="floatingRole" class="form-label">
              Logging-in as:
            </label>
            <select name="login-role" id="floatingRole" class="form-control">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div class="form-floating mb-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="floatingUsername"
              class="form-control"
            />
            <label for="floatingUsername">
              <i class="fa-regular fa-user"></i> Username
            </label>
            <span class="invalid-feedback"></span>
          </div>

          <div class="form-floating mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="floatingPassword"
              class="form-control"
            />
            <label for="floatingPassword">
              <i class="fa-solid fa-vault"></i> Password
            </label>
            <span class="invalid-feedback"></span>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Stay signed-in
            </label>
          </div>

          <hr class="my-4" />
          <input
            type="submit"
            name="login-user"
            class="w-100 btn btn-lg btn-success"
            value="Login"
          />
        </form>
      </div>
    </>
  );
}

export default LoginForm;
