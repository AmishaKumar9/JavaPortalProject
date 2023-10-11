export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    console.log("called");
    window.localStorage.setItem("isLoggedIn",true)
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
  
    // const email = loginInfo.email;
    // const password = loginInfo.password;
    // const response = await fetch('http://localhost:8080/users?email=' + email);
    // const data = await response.json();
    // console.log({ data });
    // if (data.length) {
    //   if (password === data[0].password) {
    //     window.localStorage.setItem("isLoggedIn",true)
    //     resolve({ data: data[0] });
    //   } else {
    //     reject({ message: 'wrong credentials' });
    //   }
    // } else {
    //   reject({ message: 'user not found' });
    // }
    // // TODO: on server it will only return some info of user (not password)
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(loginInfo),
        headers: {
          "content-type": "application/json",
        },
        // 'Content-Type': 'application/x-www-form-urlencoded',
      });
     
      if (response.ok) {
        const data = await response.json();
        window.localStorage.setItem("isLoggedIn",true)
        resolve({ data });
      } else {
        const err = await response.text();
        reject( err );
      }
    } catch (error) {
      reject( error );
    }

  });
}

export function signOut() {
  return new Promise(async (resolve) => {
    // TODO: on server we will remove user session info
    window.localStorage.removeItem("isLoggedIn");
    resolve({ data: 'success' });
  });
}
