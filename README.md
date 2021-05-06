This project used the gatsby starter hello-world as a starting point which can be found at https://github.com/gatsbyjs/gatsby-starter-hello-world

1. Use the Gatsby CLI to create a project on your local machine
    ```shell
    gatsby new https://github.com/jakobbergeson/gatbsy-project.git
    ```
2. Navigate into the projects directory and start it up.

    ```shell
    cd gatbsy-project
    npm run develop
    ```
    **Important** 
      This project uses a dotenv file to reroute the standard GraphQL IDE (GraphiQL) to GraphQl Playground. In order to access this ``` npm run develop``` must be         used instead of the standard ```gatsby develop```

3.  The project is now running at `http://localhost:8000`!
  
4.  Access GraphQL Playground at `http://localhost:8000/___graphql`!
