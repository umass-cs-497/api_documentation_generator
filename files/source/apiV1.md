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



# Group Users

## User Generic [/user]
API for generic users

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
API for a specific user. These api calls will only be used by the specified user so giving an "id" param may be pointless...

+ Parameters
    + user_id (string) : ID of the specific user


### Get User [GET]
Gets a user's info (public)
        
+ Response 200 (application/json)
    + Body
    
            {
                "status": "success",
                "data":{
                    "first_name": "Jane",
                    "last_name": "Doe"
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

## Get Notifications [/user/notification]

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
        

## Mark Read Notification [/user/notification/{notification_id}]

### Mark Read Notification [PUT]
Will mark a notification as read

+ Parameters
    + notification_id (string) : ID of a specific notification  
    
+ Response 200 (application/json)
    + Body
    
            {
                status : "Success",
                data : {}
            }

# Group Bookmarks

## Create Bookmark [/user/bookmark]
Allows for dealing will bookmarks

### Create Bookmark [POST]
Creates a bookmark for the current user

+ Request
    + Body
    
            {
                "course_id" : "dfb11e1f3c23000000007855",
                "lecture_id" : "4cdfb11e1f3c000000007822",
                "label" : "New Bookmark! :D",
                "time" : "15825491740"
            }

+ Response 200 (application/json)
    + Body
    
            {
                "success" : "true",
                "data":{
                    "bookmark_id" : "dfaa1e1f3c23000000007855"
            }

## Bookmark Specific [/user/bookmark/{bookmark_id}]
Allows for dealing with specific bookmarks

### Delete Bookmark [DELETE]
Deletes a specific bookmark based on it's ID

+ Parameters
    + bookmark_id (string) : ID of the specific bookmark
    
+ Response 200 (application/json)
    + Body
    
            {
                "status" : "success",
                "data" : {
                    
                }
            }

### Edit Bookmark [PUT]
Edits a specific bookmark based on it's ID

+ Parameters
    + bookmark_id (string) : ID of the specific bookmark

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


## Get Course Bookmarks [/user/bookmark/course/{course_id}]
Course Specific Bookmark API calls

### Get Course Bookmarks [GET]
Gets all of the current user's bookmarks for a specific course

+ Parameters
    + course_id (string) : ID of the specific course

            
+ Response 200 (application/json)
    + Body
    
            {
                "status" : "success".
                "data" : {
                        "bookmarks" : [
                            {
                                "bookmark_id" : "bbda1e1f3c23000000007551"
                                "label" : "This is a bookmark!",
                                "time" : "27854724576",
                                "lecture_id" : "dfaa1e1f3c23000000007855"
                            },
                            {
                                "bookmark_id" : "bbda1e1f3c23000000001111"
                                "label" : "This is a bookmark too!",
                                "time" : "27854714576",
                                "lecture_id" : "ccca1e1f3c23000000007444"
                            },
                        ]
                }
            }


##Get Lecture Bookmarks [/user/bookmark/{course_id}/lecture/{lecture_id}]
Lecture Specific Bookmark API calls

###Get Lecture Bookmarks [GET]
Gets all of the current user's bookmarks for a specific lecture

+ Parameters
    + course_id (string) : ID of the specific course
    + lecture_id (string) : ID of the specific lecture
    
+ Response 200 (application/json)
    + Body

            {
                "status" : "success",
                "data" : {
                        "bookmarks" : [
                            {
                                "bookmark_id" : "bbda1e1f3c23000000007551"
                                "label" : "This is a bookmark!",
                                "time" : "27854724576"
                            },
                            {
                                "bookmark_id" : "bbda1e1f3c23000000001111"
                                "label" : "This is a bookmark too!",
                                "time" : "27854714576"
                            },
                        ]
                }
            }

# Group Courses

##Add A Course [/course]
Course Generic API calls

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
Course Specific API calls

###Get Course [GET]
Gets all of the information for a specific course

+ Parameters
    + course_id (string) : ID for specific course

+ Request
    + Body
        
            {

            }

+ Response 200 (application/json)
    + Body
            
            {

            }


###Edit Course [PUT]
Edits a course

+ Parameters
    + course_id (string) : ID for specific course

+ Request
    + Body
        
            {

            }

+ Response 200 (application/json)
    + Body
            
            {

            }

###Delete Course [DELETE]
Deletes a specific course

+ Parameters
    + course_id (string) : ID for specific course

+ Request
    + Body
        
            {

            }

+ Response 200 (application/json)
    + Body
            
            {

            }

# Group Roster

##Course Roster [/course/{course_id}/roster/]
Course Roster Specific API calls

###Get Course Roster [GET]
Gets the roster of the specific course

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
                            "user_id" : "ffcc5143aa0000882"
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

            }

+ Response 200 (application/json)
    + Body

            {

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

            }


##Delete A User From Roster [/course/{course_id}/roster/{user_id}]

###Delete A User From Roster[DELETE]
Deletes a specified user from the specified course

+ Parameters
    + course_id (string) : ID of the course
    + user_id (string) : ID of the user

+ Response 200 (application/json)
    + Body

            {

            }


# Group Lectures

## Lecture Generic API [/course/{course_id}/lecture]

### Add Lecture Manually [POST]
Allows a lecture to be added manually

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

### Add Lecture Automatically [POST]
Allows a lecture to be added automatically via lecture capturing system

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

## (TODO) Lecture Specific API [/course/{course_id}/lecture/{lecture_id}]

+ Parameters
    + course_id (string) : ID of the course
    + lecture_id (string) : ID of the lecture


### Get A Lecture [GET]
Gets a specific lecture

+ Response 200 (application/json)
    + Body

            {
                "status" : "success",
                "data" : {
                    
                }
            }

### Edit A Lecture [PUT]
Edits a specific lecture

+ Response 200 (application/json)
    + Body

            {
                "status" : "success",
                "data" : {
                    
                }
            }

### Delete A Lecture [DELETE]
Deletes a specific lecture

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

### Add Attachment To Lecture [POST]
Adds an attachment to a lecture

+ Request
    + Body

            {

            }

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

### Deletes Attachment From Lecture [DELETE]
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
                    
                }
            }

### Add Lecture Comment [POST]
Adds a new comment for the specified lecture

+ Request
    + Body

            {

            }

+ Response 200 (application/json)
    + Body
        
            {
                "status" : "success",
                "data" : {
                    
                }
            }

## Comment Specific [/course/{course_id}/lecture/{lecture_id}/comment/{comment_id}]

+ Parameters
    + course_id (string) : ID of the course
    + lecture_id (string) : ID of the lecture
    + comment_id (string) : ID of the comment

### Delete Comment [DELETE]
Deletes the comment

+ Response 200 (application/json)
    + Body
        
            {
                "status" : "success",
                "data" : {
                    
                }
            }

### Edit Comment [PUT]
Edits specific comment

+ Request
    + Body

            {  
                
            }

+ Response 200 (application/json)
    + Body
        
            {
                "status" : "success",
                "data" : {
                    
                }
            }

### Reply To Comment [POST]
Replies to a specific comment

+ Request
    + Body

            {  
                
            }

+ Response 200 (application/json)
    + Body
        
            {
                "status" : "success",
                "data" : {
                    "comment_id" : "ffacd34529800002422"
                }
            }

