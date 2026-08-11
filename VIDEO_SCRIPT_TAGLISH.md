# Video Presentation Script (Taglish)
## REST and GraphQL API Demo

**Total Time: 5-7 minutes**

---

## PART 1: INTRODUCTION (30 seconds)

**[Start recording - Show your desktop]**

"Hello! Good evening po. Ako si [Your Name], and today, ipo-present ko yung REST and GraphQL API demo ko for our assignment. 

So basically, ginawa ko dito is isang Student Management System na may dalawang types ng API - yung REST API and yung GraphQL API. Both ng dalawang ito ay nag-share ng same data source, so makikita natin yung difference nila in terms of how they work."

---

## PART 2: CODE WALKTHROUGH - SERVER.JS (2 minutes)

**[Open Visual Studio Code, show server.js file]**

"Okay, so let's start sa code. Ito yung server.js file ko."

**[Scroll to top, show imports]**

"So dito sa taas, naka-import ko yung Express para sa web server, tapos yung GraphQL packages para sa GraphQL functionality."

**[Scroll to students array]**

"Tapos ito yung data natin - simple array lang ng students with id, name, email, major, and year. Tignan natin, may tatlong students tayo initially - si John Doe, Jane Smith, and Samuel Lee."

---

### REST API Section

**[Scroll to REST API endpoints section]**

"Okay, so una, tignan natin yung REST API endpoints ko."

**[Point to GET /api/students]**

"First, meron tayong GET request sa `/api/students` - ito yung para kunin lahat ng students. Simple lang, ire-return niya yung lahat ng data from the students array."

**[Scroll to GET by ID]**

"Next, meron din tayong GET with ID - `/api/students/:id` - ito para kunin yung specific student lang based sa ID niya. If hindi niya makita yung student, mag-return ng 404 error."

**[Scroll to POST endpoint]**

"Tapos meron tayong POST request - ito yung para mag-add ng new student. Kailangan niya ng name and email, yung major and year are optional. Pag success, status 201 yung return niya."

**[Scroll to PUT endpoint]**

"Yung PUT naman is for full update - ibig sabihin, kailangan mong i-provide lahat ng fields. If hindi, mag-error siya. Ito yung difference ng PUT sa PATCH."

**[Scroll to PATCH endpoint]**

"Yung PATCH naman is partial update lang - pwede mong i-update yung specific fields lang na gusto mo. Halimbawa, year lang, or name lang."

**[Scroll to DELETE endpoint]**

"And lastly, yung DELETE - ito naman para mag-delete ng student based sa ID. Ire-return niya yung deleted student data."

---

### GraphQL Section

**[Scroll to GraphQL schema section]**

"Okay, now let's move to GraphQL. So dito sa GraphQL, may schema tayo."

**[Point to Student type]**

"First, yung Student type - same fields lang din with the REST API: id, name, email, major, year."

**[Point to StudentInput]**

"Tapos may StudentInput - ito yung gagamitin natin for mutations, para sa pag-add or update ng student."

**[Point to Query type]**

"Sa Query type, meron tayong dalawa - yung `students` para kunin lahat, and yung `student` with ID para sa specific student lang."

**[Point to Mutation type]**

"Tapos sa Mutations, meron tayong tatlo - `addStudent` for creating, `updateStudent` for updating, and `deleteStudent` for deleting."

**[Scroll to resolvers/rootValue]**

"And ito naman yung mga resolvers - basically, yung mga functions na nag-hahandle ng actual logic. Same lang din ng functionality with REST, pero different lang yung approach."

**[Point to the app.use GraphQL]**

"At dito, ni-register natin yung GraphQL endpoint sa `/graphql`. May `graphiql: true` para may built-in UI tayo for testing sa browser."

---

## PART 3: POSTMAN DEMO - REST API (2-3 minutes)

**[Open Postman]**

"Okay, so ngayon, i-test natin using Postman. Make sure na running na yung server natin."

**[Show terminal with server running]**

"Ayan, running na yung server ko sa port 3000."

---

### GET All Students

**[Open Postman, create new request]**

"First, i-test natin yung GET all students."

**[Type URL: http://localhost:3000/api/students]**
**[Set method to GET]**

"Method is GET, URL is `localhost:3000/api/students`. Click send."

**[Click Send, show response]**

"Ayan! Nakuha natin yung lahat ng students - John Doe, Jane Smith, and Samuel Lee. Status 200, meaning success."

---

### POST Create Student

**[Create new request]**

"Next, mag-add tayo ng new student using POST."

**[Set method to POST]**
**[URL: http://localhost:3000/api/students]**

"Method is POST, same URL pero without ID. Tapos sa Headers tab..."

**[Go to Headers tab, add Content-Type]**

"...kailangan natin ng Content-Type: application/json."

**[Go to Body tab, select raw and JSON]**

"Sa Body, piliin natin yung raw, tapos JSON format. Type natin yung data:"

**[Type the JSON]**
```json
{
  "name": "Maria Santos",
  "email": "maria.santos@example.com",
  "major": "Information Technology",
  "year": 2
}
```

"Okay, name is Maria Santos, email, major is IT, year 2. Click send."

**[Click Send, show response]**

"Ayan! Successfully created! Status 201, and nandito na yung new student with ID 4. Ang message, 'Student created successfully'."

---

### PUT Update Student

**[Create new request]**

"Now, i-update natin si John Doe using PUT."

**[Set method to PUT]**
**[URL: http://localhost:3000/api/students/1]**

"Method is PUT, URL is `/api/students/1` - 1 is yung ID ni John. Headers, same - Content-Type: application/json."

**[Go to Body, type JSON]**
```json
{
  "name": "John Doe Updated",
  "email": "john.updated@example.com",
  "major": "Software Engineering",
  "year": 3
}
```

"Type natin yung updated data. Lahat ng fields kailangan complete for PUT. Click send."

**[Click Send, show response]**

"Ayan! Successfully updated si John Doe. Message: 'Student updated successfully'."

---

### PATCH Partial Update

**[Create new request]**

"Ngayon, gamitin natin yung PATCH para partial update lang."

**[Set method to PATCH]**
**[URL: http://localhost:3000/api/students/2]**

"Method is PATCH, ID 2 - that's Jane Smith. Sa body..."

**[Body JSON]**
```json
{
  "year": 4
}
```

"Year lang yung cha-change natin - from year 3 to year 4. Hindi na kailangan ng other fields dahil PATCH siya. Send."

**[Click Send, show response]**

"Perfect! Nag-update lang yung year, yung other fields intact pa rin."

---

### DELETE Student

**[Create new request]**

"Last for REST, i-delete natin si Samuel Lee."

**[Set method to DELETE]**
**[URL: http://localhost:3000/api/students/3]**

"Method is DELETE, ID is 3. No body needed. Click send."

**[Click Send, show response]**

"Ayan! Successfully deleted. Nag-return ng data ni Samuel. Message: 'Student deleted successfully'."

---

## PART 4: POSTMAN DEMO - GRAPHQL (2-3 minutes)

**[Create new request in Postman]**

"Okay, so tapos na tayo sa REST. Now, let's test GraphQL. Medyo different yung approach dito."

"Important reminder for GraphQL: method is always POST, and kailangan natin ng proper JSON format."

---

### Query All Students

**[Set method to POST]**
**[URL: http://localhost:3000/graphql]**

"Method: POST, URL: `localhost:3000/graphql`. Sa Headers..."

**[Add header Content-Type: application/json]**

"Content-Type: application/json. Very important yan."

**[Go to Body, select raw and JSON]**

"Body, select raw and JSON. Then type natin yung query:"

**[Type the query]**
```json
{
  "query": "{ students { id name email major year } }"
}
```

"So notice, naka-wrap sa JSON object with key na 'query'. Inside, yung actual GraphQL query. We're asking for all students with all their fields. Click send."

**[Click Send, show response]**

"Ayan! Nakuha natin yung data. Pero tignan natin yung difference - sa REST, automatic na yung fields. Sa GraphQL, tayo ang nag-specify kung anong fields exactly ang kailangan natin."

---

### Query Single Student

**[Edit the query]**

"Ngayon, single student lang kukunin natin - si Maria Santos with ID 4."

**[Type new query]**
```json
{
  "query": "{ student(id: \"4\") { id name email major } }"
}
```

"Notice, `student` with parameter na id is 4, tapos nag-specify lang tayo ng id, name, email, and major - wala yung year. Kaya flexible ang GraphQL - you get only what you ask for. Send."

**[Click Send, show response]**

"Perfect! Maria Santos lang nakuha natin, and yung fields na nirequest lang natin yung nandito."

---

### Mutation: Add Student

**[Create new query]**

"Now, mag-add tayo ng student using mutation."

**[Type mutation]**
```json
{
  "query": "mutation { addStudent(input: { name: \"Pedro Reyes\", email: \"pedro.reyes@example.com\", major: \"Computer Science\", year: 1 }) { id name email major year } }"
}
```

"So yung syntax is `mutation`, tapos `addStudent` with input object. Same fields lang din. After the closing parenthesis, nag-specify tayo kung anong fields yung gusto nating i-return. Send."

**[Click Send, show response]**

"Ayan! Successfully added si Pedro Reyes with ID 5. And nag-return lang yung fields na hiningi natin."

---

### Mutation: Update Student

**[Create new query]**

"Update naman natin si Pedro using mutation."

**[Type mutation]**
```json
{
  "query": "mutation { updateStudent(id: \"5\", input: { name: \"Pedro Reyes Updated\", email: \"pedro.updated@example.com\", major: \"Data Science\", year: 2 }) { id name email major year } }"
}
```

"So `updateStudent`, dalawang parameters - yung id at yung input. Complete fields kailangan. Send."

**[Click Send, show response]**

"Success! Na-update na si Pedro."

---

### Mutation: Delete Student

**[Create new query]**

"Last, delete mutation."

**[Type mutation]**
```json
{
  "query": "mutation { deleteStudent(id: \"5\") { id name email } }"
}
```

"Simple lang - `deleteStudent` with id. Tapos nag-request lang tayo ng id, name, and email ng deleted student. Send."

**[Click Send, show response]**

"Perfect! Na-delete na si Pedro, and nag-return yung basic info niya."

---

## PART 5: COMPARISON AND CONCLUSION (1 minute)

**[Show both REST and GraphQL requests side by side or switch between them]**

"Okay, so ano yung key differences ng REST at GraphQL based sa demo natin?"

**[Summarize key points]**

"**First, yung endpoints:**
- REST - multiple endpoints, different URLs for different resources (`/api/students`, `/api/students/1`, etc.)
- GraphQL - single endpoint lang (`/graphql`)

**Second, yung HTTP methods:**
- REST - different methods (GET, POST, PUT, PATCH, DELETE)
- GraphQL - POST lang palagi

**Third, yung data structure:**
- REST - fixed structure, you get all fields automatically
- GraphQL - flexible, you specify exactly which fields you want

**Fourth, yung syntax:**
- REST - simple, straightforward HTTP requests
- GraphQL - uses query language, medyo mas complex pero mas flexible

**And lastly, use cases:**
- REST - good for simple CRUD operations, standard APIs
- GraphQL - better for complex data requirements, when you need to minimize data transfer, or when you want flexibility

Both are very useful depending on your project requirements."

---

## PART 6: CLOSING (30 seconds)

**[Show your GitHub repository]**

"So yan yung demo ng REST and GraphQL API ko. Lahat ng code available sa GitHub ko, link nasa Teams submission."

**[Show the POSTMAN_TESTING_GUIDE.md file if you want]**

"May testing guide din ako na kasama, para mas madali yung pag-test ng lahat ng endpoints."

"That's it for my presentation. Thank you po for watching! Salamat!"

**[Stop recording]**

---

## TIPS FOR RECORDING:

1. **Speak clearly and not too fast** - para maintindihan yung explanation
2. **Show your face** (optional) - mas personal yung presentation
3. **Test your audio** before recording - make sure clear yung voice
4. **Keep your desktop clean** - close unnecessary applications
5. **Practice once** before actual recording - para smooth yung flow
6. **If may mistake, it's okay!** - just pause, take a breath, and continue
7. **Smile and be confident** - you know your code!

---

## RECORDING TOOLS:

- **OBS Studio** (Free, best quality)
- **Windows Game Bar** (Win + G)
- **Zoom** (Record yourself)
- **Loom** (Easy to use, online)

Good luck sa presentation! 🚀
