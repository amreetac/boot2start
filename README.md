# boot2start
This will be a project that matches bootcamp students to start-ups. We may use Angel.co API and it will allow startup employers to see profiles.


#ROUTES

###--GET ROUTES--

-landing page:  /

-all bootcamps: /bootcamps

-all startups:  /startups

-login:         /login


-candidats in a bootcamp: /bootcamp/[bootcampID]

-candidate 				 /candidate/[candidateID]

-startup					/startup/[startupID]



###---POST ROUTES--

-create bootcamp:	/bootcamp/create

-create startup:		/startup/create

-create candidate 	/candidate/create



###--PUT ROUTES--

-update bootcamp:  /update/bootcamp/[bootcampID]

-update candidate: /update/candidate/[candidateID]

-update startup: /update/startup/[startupID]



###--delete ROUTES--

-delete bootcamp:  /delete/bootcamp/[bootcampID]

-delete candidate: /delete/candidate/[candidateID]

-delete startup: /delete/startup/[startupID]
