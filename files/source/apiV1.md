FORMAT: 1A

#Lecture Viewer API
<span style="font-size:16px" >LectureViewer API will be utilized by the React front end and will allow for CRUD operations by being the middle man for the database. </span>

><span style="color:orange;">NOTE: This is an *incomplete* API at the moment. The base url calls are all defined but not all of the request/response data is finalized</span>

## API Responses
----------------

<span style="font-size:16px" >These are examples of the responses that one can expect to recieve from the API</span>


### <span style="color:rgb(41, 171, 41);">A Successful Response</span>

This shows a response example of what a correctly used api with no errors would look like

```javascript
    
{
    status : "success",
    data : {
        "posts" : [
            { "id" : 1, "title" : "A blog post", "body" : "Some useful content" },
            { "id" : 2, "title" : "Another blog post", "body" : "More content" },
        ]
     }
}

```

### <span style="color:orange;">A Failed Response</span>

This shows a response example of what an improperly formatted api call looks like

```javascript
    
{
    status : "fail",
    data : { "title" : "A title is required" }
}

```

### <span style="color:red;">An Error Response</span>

This shows a response example of what an internal error would return

```javascript
    
{
    status : "error",
    message : "There was a database connection error"
}

```


## Current Points of Confusion
------------------------------
1. How are courses going to get made? By admin? Cause if so, s/he will need to have a list of instructors to select who is instructing a specific course. This would require a new API. An alternative to this is just entering the instructors email. 

    ```html
    /user/instructor GET
    ```
2. Continuing off of the one above, do we want the same for adding students?
3. Do we want things like creating/editing a user to return the user object in the response? Or just a success?
4. I have no idea how to document uploading the lectures....
5. Update and delete user... should they be only done by the actual user themseleves or others like the admin?

# Group Users

## User Generic [/user]


### Create User [POST]
Creates a new user

+ Request
    + Body
        
            {
                "email" : "jdoe@umass.edu",
                "password" : "password",
                "first_name" : "Jane",
                "last_name" : "Doe"
            }

+ Response 200 (application/json)
    + Body

            {
                "status": "success",
                "data": {
                    "user_id": "4cdfb11e1f3c000000007822"
                }
            }
            
### Get User [GET]
Gets logged in user info (private)
        
+ Response 200 (application/json)
    + Body
    
            {
                "status": "success",
                "data":{
                    "first_name": "Jane",
                    "last_name": "Doe",
                    "course_list": [{"name" : "CS187 Data Structures", "id": "4cdfb11e1f3c000000007822"}]
                }
            }


## User Specific [/user/{user_id}]
These api calls will only be used by the specified user so giving an "id" param may be pointless...

+ Parameters
    + user_id (string) : ID of the specified user


### Get User [GET]
Gets a user's info (public)
        
+ Response 200 (application/json)
    + Body
    
            {
                "status": "success",
                "data":{
                    "first_name": "Jane",
                    "last_name": "Doe",
                    "profile_picture" : "bbb32283ff00004221.png"
                }
            }

### Update User [PUT]
Updates a user's info

+ Request
    + Body

            {
                "first_name": "Jan",
                "last_name": "Does"
            }
        
+ Response 200 (application/json)
    + Body
    
            {
                "status": "success",
                "data":{
    
                }
            }

### Delete User [DELETE]
Deletes a user

+ Response 200 (application/json)
    + Body
    
            {
                "status": "success",
                "data":{
    
                }
            }


# Group Notifications

## Notifications Generic [/user/notification]

### Get Notifications [GET]
Gets the notifications of the logged in user
    
+ Response 200 (application/json)
    + Body
            
            {
                "status":"success",
                "data":{

                    "notifications" : [
                        {
                            "type" : "added to course",
                            "course_name" : "CS187 Data Structures",
                            "course_id" : "4cdfb11e1f3c000000007822",
                            "date" : "03/02/2015 01:28:22"
                        },
                        {
                            "type" : "new lecture",
                            "course_name" : "CS187 Data Structures",
                            "course_id" : "4cdfb11e1f3c000000007822",
                            "lecture_name" : "Lecture 5: Can we really trust arrays?",
                            "lecture_id" : "8dfaa22e1f3c000000003312",
                            "date" : "03/01/2015 11:21:12"
                        },
                        {
                            "type" : "reply",
                            "course_name" : "CS187 Data Structures",
                            "course_id" : "4cdfb11e1f3c000000007822",
                            "lecture_name" : "Lecture 5: Can we really trust arrays?",
                            "lecture_id" : "8dfaa22e1f3c000000003312",
                            "comment" : "What's an array?",
                            "comment_id" : "8dfaa22eff3c242000003312"
                            "reply" : "\*facepalm\* its soo simple dude.",
                            "replier_name" : "That Guy",
                            "replier_id" : "8dfaa22e1f3c242000003312"
                            "date" : "03/02/2015 01:28:22"
                        }
                    ]
                }
            }
        

## Notifications Specific [/user/notification/{notification_id}]

### Mark Read Notification [DELETE]
Marks a notification as read

+ Parameters
    + notification_id (string) : ID of a specified notification  
    
+ Response 200 (application/json)
    + Body
    
            {
                status : "success",
                data : {

                }
            }

# Group Bookmarks

## Bookmark Generic [/user/bookmark]

### Create Bookmark [POST]
Creates a bookmark for the current user

+ Request
    + Body
    
            {
                "course_id" : "dfb11e1f3c23000000007855",
                "lecture_id" : "4cdfb11e1f3c000000007822",
                "label" : "New Bookmark! :D",
                "time" : "140"
            }

+ Response 200 (application/json)
    + Body
    
            {
                "success" : "true",
                "data":{
                    "bookmark_id" : "dfaa1e1f3c23000000007855"
            }

## Bookmark Specific [/user/bookmark/{bookmark_id}]


### Delete Bookmark [DELETE]
Deletes a specified bookmark based on it's ID

+ Parameters
    + bookmark_id (string) : ID of the specified bookmark
    
+ Response 200 (application/json)
    + Body
    
            {
                "status" : "success",
                "data" : {
                    
                }
            }

### Edit Bookmark [PUT]
Edits a specified bookmark based on it's ID

+ Parameters
    + bookmark_id (string) : ID of the specified bookmark

+ Request
    + Body
    
            {
                "label" : "This is the new label!"
            }

+ Response 200 (application/json)
    + Body
    
            {
                "status" : "success",
                "data" : {

                }
            }


## Bookmark Course Specific [/user/bookmark/course/{course_id}]


### Get Course Bookmarks [GET]
Gets all of the current user's bookmarks for a specified course

+ Parameters
    + course_id (string) : ID of the specified course

            
+ Response 200 (application/json)
    + Body
    
            {
                "status" : "success",
                "data" : {
                        "bookmarks" : [
                            {
                                "bookmark_id" : "bbda1e1f3c23000000007551",
                                "label" : "This is a bookmark!",
                                "time" : "2000",
                                "lecture_id" : "dfaa1e1f3c23000000007855"
                            },
                            {
                                "bookmark_id" : "bbda1e1f3c23000000001111",
                                "label" : "This is a bookmark too!",
                                "time" : "11",
                                "lecture_id" : "ccca1e1f3c23000000007444"
                            },
                        ]
                }
            }


##Bookmark Lecture Specific [/user/bookmark/{course_id}/lecture/{lecture_id}]

###Get Lecture Bookmarks [GET]
Gets all of the current user's bookmarks for a specified lecture

+ Parameters
    + course_id (string) : ID of the specified course
    + lecture_id (string) : ID of the specified lecture
    
+ Response 200 (application/json)
    + Body

            {
                "status" : "success",
                "data" : {
                        "bookmarks" : [
                            {
                                "bookmark_id" : "bbda1e1f3c23000000007551",
                                "label" : "This is a bookmark!",
                                "time" : "27854724576"
                            },
                            {
                                "bookmark_id" : "bbda1e1f3c23000000001111",
                                "label" : "This is a bookmark too!",
                                "time" : "27854714576"
                            },
                        ]
                }
            }

# Group Courses

##Course Generic [/course]

###Add A Course [POST]
Adds a course to the system (will add more request fields)

+ Request
    + Body
    
            {
                "department" : "Computer Science",
                "course_name" : "Web Scalability",
                "course_number" : "497s",
                "term" : "Spring",
                "year" : "2015",
                "instructor_id" : "23ffaaccdd2330002288"
            }

+ Response 200 (application/json)
    + Body
    
            {
                "status" : "success",
                "data" : {
                    "course_id" : "55aadfeecd3300113344"
                }
            }

##Course Specific [/course/{course_id}]


### Get Course [GET]
Gets all of the information for a specified course

+ Parameters
    + course_id (string) : ID for specified course


+ Response 200 (application/json)
    + Body
            
            {
                "department" : "Computer Science",
                "department_shorthand" : "CS",
                "course_name" : "Web Scalability",
                "course_number" : "497s",
                "description" : "A \"class\" about web stuff",
                "section" : "01",
                "term" : "Spring",
                "year" : "2015",
                "instructor_id" : "23ffaaccdd2330002288",
                "lectures":
                    [
                        {
                            "lecture_id" : "27dcccad253452a00011",
                            "title" : "Lecture 4: What is the Interwebs?",
                            "description" : "This lecture is awesome and you don't want to miss it",
                            "time_posted" : "1337622367267",
                            "time_length" : "3026",
                            "thumbnail" : "http://url.to/thumbnail/here.jpg"
                        },
                        {
                            "lecture_id" : "113ccad253452a00222",
                            "title" : "Lecture 5: Databases",
                            "description" : "We will talk about how to store huge amounts of data",
                            "time_posted" : "1337623117267",
                            "time_length" : "2026",
                            "thumbnail" : "http://url.to/thumbnail/here.jpg"
                        }
                    ]
            }


### Edit Course [PUT]
Edits a course's basic information

+ Parameters
    + course_id (string) : ID for specified course

+ Request
    + Body
        
            {
                "department" : "Computer Science",
                "department_shorthand" : "CS",
                "course_name" : "Web Scalability",
                "course_number" : "497s",
                "description" : "A \"class\" about web stuff",
                "section" : "01",
                "term" : "Spring",
                "year" : "2015",
                "instructor_id" : "23ffaaccdd2330002288",
            }

+ Response 200 (application/json)
    + Body
            
            {
                "status" : "success",
                "data" : {

                }
            }

### Delete Course [DELETE]
Deletes a specified course

+ Parameters
    + course_id (string) : ID for specified course

+ Response 200 (application/json)
    + Body
            
            {
                "status" : "success",
                "data" : {

                }
            }

# Group Roster

## Roster Generic [/course/{course_id}/roster/]

### Get Course Roster [GET]
Gets the roster of the specified course

+ Parameters
    + course_id (string) : ID of the course

+ Response 200 (application/json)
    + Body

            {
                "status" : "success",
                "data" : {
                    roster : [
                        {
                            "user_name" : "Jane Doe",
                            "user_id" : "ffcc5143aa0000882",
                            "profile_picture" : "http://path/to/pic.jpg"
                        },
                        {
                            "user_name" : "Jan Itor",
                            "user_id" : "abcc5143aa0000111",
                            "profile_picture" : "http://path/to/pic.jpg"
                        }
                    ]
                }
            }


###Add Single User To Roster [POST]
Adds a *single* user by _email_ to the roster of the specified course

+ Parameters
    + course_id (string) : ID of the course

+ Request
    + Body

            {
                "user_id" : "67253ccdaf00002213"
            }

+ Response 200 (application/json)
    + Body

            {
                "status" : "success",
                "data" : {

                }
            }

###Add Users To Roster [POST]
Adds a *group* of users by a file of _emails_ to the roster of the specified course (Figure out how to upload files and show how thats required in here)

+ Parameters
    + course_id (string) : ID of the course

+ Request (multipart/form-data; boundary=---BOUNDARY)

        -----BOUNDARY
        Content-Disposition: form-data; name="text[file]"; filename="users.csv"
        Content-Type: text/csv
        Content-Transfer-Encoding: base64

        /9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a
        HBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIy
        MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIA
        AhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEB
        AAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AL+AD//Z
        -----BOUNDARY

+ Response 200 (application/json)
    + Body

            {
                "status" : "success",
                "data" :{

                }
            }


##Roster Specific [/course/{course_id}/roster/{user_id}]

###Remove User From Roster[DELETE]
Removes a specified user from the specified course

+ Parameters
    + course_id (string) : ID of the course
    + user_id (string) : ID of the user

+ Response 200 (application/json)
    + Body

            {
                "status" : "success",
                "data" : {

                }
            }


# Group Lectures

## Lecture Generic [/course/{course_id}/lecture]

###TODO Add Lecture Man. [POST]
Allows a lecture to be added manually such as a screencast

+ Parameters
    + course_id (string) : ID of the course

+ Request
    + Body

            {
                "title" : "Lecture 1: How to API",
                "description" : "For this lecture, we will just REST",


            }

+ Response 200 (application/json)
    + Body

            {
                "status" : "success",
                "data" : {
                    "lecture_id" : "ff2653ca16000ff32cd"
                }
            }

### TODO Add Lecture Auto [POST]
Allows a lecture to be added automatically via the lecture capturing system

+ Parameters
    + course_id (string) : ID of the course

+ Response 200 (application/json)
    + Body

            {
                "status" : "success",
                "data" : {
                    "lecture_id" : "ff2653ca16000ff32cd"
                }
            }

## Lecture Specific [/course/{course_id}/lecture/{lecture_id}]

+ Parameters
    + course_id (string) : ID of the course
    + lecture_id (string) : ID of the lecture


### Get A Lecture [GET]
Gets a specified lecture

+ Response 200 (application/json)
    + Body

            {
                "status" : "success",
                "data" : {
                    "title" : "Lecture 4: What is the Interwebs?",
                    "description" : "This lecture is awesome and you don't want to miss it",
                    "time_posted" : "1337622367267",
                    "time_length" : "3026",
                    "thumbnail" : "http://url.to/thumbnail/here.jpg"
                }
            }

### Edit A Lecture [PUT]
Edits a specified lecture

+ Request 
    + Body
            {
                "lecture_id" : "27dcccad253452a00011",
                "title" : "Lecture 4: What is the Interwebs?",
                "description" : "This lecture is awesome and you don't want to miss it",
                "time_posted" : "1337622367267",
                "time_length" : "3026",
                "thumbnail" : "http://url.to/thumbnail/here.jpg"
            }

+ Response 200 (application/json)
    + Body

            {
                "status" : "success",
                "data" : {
                    
                }
            }

### Delete A Lecture [DELETE]
Deletes a specified lecture

+ Response 200 (application/json)
    + Body

            {
                "status" : "success",
                "data" : {
                    
                }
            }


# Group Attachments

## Attachment Generic [/course/{course_id}/lecture/{lecture_id}/]

+ Parameters
    + course_id (string) : ID of the course
    + lecture_id (string) : ID of the lecture

### Add Attachment [POST]
Adds an attachment to a lecture

+ Request (multipart/form-data; boundary=---BOUNDARY)

        -----BOUNDARY
        Content-Disposition: form-data; name="jpg[file]"; filename="importantFile.jpg"
        Content-Type: image/jpeg
        Content-Transfer-Encoding: base64

        /9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a
        HBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIy
        MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIA
        AhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEB
        AAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AL+AD//Z
        -----BOUNDARY

+ Response
    + Body

            {
                "status" : "success",
                "data" : {
                    "attachment_id" : "4972ddffcca200001234"
                }
            }

## Attachment Specific [/course/{course_id}/lecture/{lecture_id}/{attachment_id}]

+ Parameters
    + course_id (string) : ID of the course
    + lecture_id (string) : ID of the lecture
    + attachment_id (string) : ID of the attachment

### Delete Attachment [DELETE]
Deletes an attachment from a lecture

+ Response
    + Body

            {
                "status" : "success",
                "data" : {
                   
                }
            }


# Group Comments

## Comment Generic [/course/{course_id}/lecture/{lecture_id}/comment]

+ Parameters
    + course_id (string) : ID of the course
    + lecture_id (string) : ID of the lecture

### Get Lecture Comments [GET]
Gets the comments for the specified lecture

+ Response 200 (application/json)
    + Body
        
            {
                "status" : "success",
                "data" : {
                    "commments" : [
                        {
                            "name": "Bill Howard",
                            "user_id": "190accdff12700001123",
                            "posted_date": "19836263546",
                            "time" : "1234",
                            "content": "Explain slide 55 in more detail please",
                            "replies": [
                                {
                                    "name": "Jane Doe",
                                    "user_id": "12aacdd12700004444",
                                    "posted_date": "19836293546",
                                    "time" : "1234",
                                    "content": "It's talking about the internet",
                                    "replies": [
                                    
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "John Doe",
                            "user_id": "999fcdff12700005353",
                            "posted_date": "19836213516",
                            "time" : "1234",
                            "content": "This was a really helpful part of the lecture.",
                            "replies": [
                                
                            ]
                        }
                    ]
                }
            }

### Add Lecture Comment [POST]
Adds a new comment to the specified lecture

+ Request
    + Body

            {
                "content" : "Is this the krusty krab?",
                "posted_date" : "23252323232"
                "time" : "1234"
            }

+ Response 200 (application/json)
    + Body
        
            {
                "status" : "success",
                "data" : {
                    "comment_id" : "123bcda1300002211"
                }
            }

## Comment Specific [/course/{course_id}/lecture/{lecture_id}/comment/{comment_id}]

+ Parameters
    + course_id (string) : ID of the course
    + lecture_id (string) : ID of the lecture
    + comment_id (string) : ID of the comment

### Delete Comment [DELETE]
Deletes the specified comment (We may need to keep the comment but change the content to "[Deleted]")

+ Response 200 (application/json)
    + Body
        
            {
                "status" : "success",
                "data" : {
                    
                }
            }

### Edit Comment [PUT]
Edits the specified comment

+ Request
    + Body

            {  
                "content" : "Is this the chum bucket?"
            }

+ Response 200 (application/json)
    + Body
        
            {
                "status" : "success",
                "data" : {
                    
                }
            }

### Reply To Comment [POST]
Replies to a specified comment

+ Request
    + Body

            {  
                "content" : "No this is patrick.",
                "posted_date" : "1342425525",
                "time" : "1234"
            }

+ Response 200 (application/json)
    + Body
        
            {
                "status" : "success",
                "data" : {
                    "comment_id" : "ffacd34529800002422"
                }
            }

