# boot2start
This will be a project that matches bootcamp students to start- ups. We may use Angel.co API and it will allow startup employers to see profiles.


# ROUTES

### GET ROUTES

- landing page:  `/`

- all bootcamps: `/bootcamps`

- all startups:  `/startups`

- login:         `/login`


- candidats in a bootcamp: `/bootcamp/[bootcampID]`

- candidate 				 `/candidate/[candidateID]`

- startup					`/startup/[startupID]`



### POST ROUTES

- create bootcamp:	`/api/bootcamp/create`

- create startup:		`/api/startup/create`

- create candidate 	`/api/candidate/create`



### PUT ROUTES

- update bootcamp:  `/api/update/bootcamp/[bootcampID]`

- update candidate: `/api/update/candidate/[candidateID]`

- update startup: `/api/update/startup/[startupID]`



### delete ROUTES

- delete bootcamp:  `/api/delete/bootcamp/[bootcampID]`

- delete candidate: `/api/delete/candidate/[candidateID]`

- delete startup: `/api/delete/startup/[startupID]`
