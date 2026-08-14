# Role-Based Access Control

This project is a **Role-Based Access Control (RBAC) REST API** built with **Node.js, Express.js, MongoDB, Mongoose, JWT, and bcrypt**. It demonstrates how authentication and authorization can be implemented in a backend application by allowing users to register and securely log in with hashed passwords, while **JSON Web Tokens (JWT)** are used to authenticate requests. After a successful login, the server generates a JWT containing the user's ID and role. The client then sends the token with each protected request using the `Authorization: Bearer <token>` header. The authentication middleware verifies the token and attaches the decoded user information to `req.user`, allowing protected routes to identify the currently authenticated user.

The project also demonstrates **role-based authorization**, where access to specific endpoints is determined by the user's role. Admins can access the `/admin` route, while manager-level access can be shared between administrators and managers, and the `/user` route can be accessed by administrators, managers, and users. 

The authentication flow follows **Register → Store User in MongoDB → Login → Generate JWT → Send Bearer Token → Verify JWT → Attach User to Request → Check Role → Access Protected Route**, providing a practical foundation for building secure APIs with different levels of user permissions.
