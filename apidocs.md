## Rest API

### Authorication

> #### /register 
> type: POST, params: {firstname, lastname, email, password}

> #### /login
> type: POST, params: { email, password}

### Posts

> #### /posts
> type: GET 

> #### /posts
> type: POST, params: {header, content, category_id,  user_id, file_id}

> #### /posts/:id
> type: GET 

> #### /posts/:id
> type: DELETE

> #### /posts/user/:id
> type: GET

> #### /categories
> type: GET 

> #### /categories
> type: POST, params: {category_name}

> #### /categories/:id
> type: GET 

> #### /post-comment
> type: POST, params: {user_id, post_id, comment_content}

> #### /comments/:post_id
> type: GET 

### Users

> #### /users
> type: GET

> #### /users/:id
> type: GET 

 > #### /users/:id
> type: POST, params: {firstname, lastname, email, password}

